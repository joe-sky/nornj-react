import gulp from 'gulp';
import babel from 'gulp-babel';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import jasmine from 'gulp-jasmine';
import rename from 'gulp-rename';
import gulpIf from 'gulp-if';
import eslint from 'gulp-eslint';
import notify from 'gulp-notify';
import { argv } from 'yargs';
import env from 'gulp-env';

//Handle error
function handlebuildError() {
  // Send error to notification center with gulp-notify
  notify.onError({
    title: "Compile Error",
    message: "<%= error.message %>"
  }).apply(this, arguments);

  // Keep gulp from hanging on this task
  this.emit('end');
}

//The packages need to be excluded by webpack
const webpackExternals = {
  'nornj': {
    root: 'nj',
    commonjs2: 'nornj',
    commonjs: 'nornj',
    amd: 'nornj'
  },
  'react': {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react'
  },
  'react-dom': {
    root: 'ReactDOM',
    commonjs2: 'react-dom',
    commonjs: 'react-dom',
    amd: 'react-dom'
  }
};

//Build js
gulp.task('build', function() {
  var libName = 'nornj-react.js';
  if (argv.p) {
    libName = 'nornj-react.min.js';
  }

  var plugins = [];
  if (argv.p) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
        warnings: false
      },
      sourceMap: true
    }));
  }

  return gulp.src('./src/base.js')
    .pipe(env.set({
      BABEL_ENV: 'webpack'
    }))
    .pipe(webpackStream({
      devtool: argv.p ? 'source-map' : false,
      watch: argv.w ? true : false,
      externals: webpackExternals,
      output: {
        filename: libName,
        library: 'NornJReact',
        libraryTarget: 'umd'
      },
      module: {
        rules: [{
          test: /\.js$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        }]
      },
      plugins
    }, webpack))
    .on('error', handlebuildError)
    .pipe(gulp.dest('./dist'));
});

//Convert es6 code to es5 from src to lib
gulp.task("lib", () => {
  gulp.src('./src/**/*.js')
    .pipe(env.set({
      BABEL_ENV: 'development'
    }))
    .pipe(babel())
    .pipe(gulp.dest('./lib'));

  gulp.src('./mobx/base.js')
    .pipe(env.set({
      BABEL_ENV: 'development'
    }))
    .pipe(babel())
    .pipe(rename('index.js'))
    .pipe(gulp.dest('./mobx'));

  gulp.src('./native/base.js')
    .pipe(env.set({
      BABEL_ENV: 'development'
    }))
    .pipe(babel())
    .pipe(rename('index.js'))
    .pipe(gulp.dest('./native'));
});

//Unit testing
gulp.task("test", () => gulp.src(["./test/**/**Spec.js"])
  .pipe(jasmine({
    includeStackTrace: true
  }))
);

//Run eslint
gulp.task('eslint', () => gulp.src(['./src/**/*.js'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
);

//Default task
gulp.task('default', ['build'], () => gulp.start('lib'));
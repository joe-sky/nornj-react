/**
 * React bindings for NornJ template engine.
 */
declare namespace NornJReact {
  /**
   * `njr.bindTemplate`, register React component to NornJ template.
   */
  export function bindTemplate(): NornJ.Component;

  /**
   * `njr.bindTemplate`, register React component to NornJ template.
   */
  export function bindTemplate(name: string): Function;

  /**
   * [Deprecated]`njr.bindTemplateName`, register React component to NornJ template.
   */
  export function bindTemplateName(): NornJ.Component;

  /**
   * [Deprecated]`njr.bindTemplateName`, register React component to NornJ template.
   */
  export function bindTemplateName(name: string): Function;

  /**
   * [Deprecated]`njr.registerTmpl`, register React component to NornJ template.
   */
  export function registerTmpl(options: object): Function;
}

declare module 'nornj-react' {
  export = NornJReact;
}

declare module 'nornj-react/native' {
  export = NornJReact;
}

declare module 'nornj-react/mobx';

declare module 'nornj-react/mobx/native';

declare module 'nornj-react/redux';

declare module 'nornj-react/router';

declare module 'nornj-react/lib/*';
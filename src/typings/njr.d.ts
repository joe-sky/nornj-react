import { NornJComponent } from 'nornj/src/typings/nj';

/**
 * NornJ-React Wrapper components.
 */
export interface NornJWrapperComponent { }

/**
 * React bindings for NornJ template engine.
 */
export interface NornJReact {
  /**
   * `njr.bindTemplate`, register React component to NornJ template.
   */
  bindTemplate(): NornJWrapperComponent;

  /**
   * `njr.bindTemplate`, register React component to NornJ template.
   */
  bindTemplate(name: string, template?: any, components?: any): Function;

  /**
   * `njr.bindTemplate`, register React component to NornJ template.
   */
  bindTemplate(options: object): Function;

  /**
   * `njr.bindTemplateName`, register React component to NornJ template.
   */
  bindTemplateName(): NornJComponent;

  /**
   * `njr.bindTemplateName`, register React component to NornJ template.
   */
  bindTemplateName(name: string): Function;

  /**
   * [Deprecated]`njr.registerTmpl`, register React component to NornJ template.
   */
  registerTmpl(name: string, template?: any, components?: any): Function;

  /**
   * [Deprecated]`njr.registerTmpl`, register React component to NornJ template.
   */
  registerTmpl(options: object): Function;
}
import { NornJComponent } from 'nornj/src/typings/nj';

/**
 * React bindings for NornJ template engine.
 */
export interface NornJReact {
  /**
   * `njr.bindTemplate`, register React component to NornJ template.
   */
  bindTemplate(): NornJComponent;

  /**
   * `njr.bindTemplate`, register React component to NornJ template.
   */
  bindTemplate(name: string): Function;

  /**
   * [Deprecated]`njr.bindTemplateName`, register React component to NornJ template.
   */
  bindTemplateName(): NornJComponent;

  /**
   * [Deprecated]`njr.bindTemplateName`, register React component to NornJ template.
   */
  bindTemplateName(name: string): Function;

  /**
   * [Deprecated]`njr.registerTmpl`, register React component to NornJ template.
   */
  registerTmpl(options: object): Function;
}
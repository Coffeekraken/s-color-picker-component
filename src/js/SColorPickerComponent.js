import SWebComponent from "coffeekraken-sugar/js/core/SWebComponent";
import Pickr from "pickr-widget/dist/pickr.min";
import __dispatchEvent from "coffeekraken-sugar/js/dom/dispatchEvent";

export default class SColorPickerComponent extends SWebComponent {
  /**
   * Default props
   * @definition    SWebComponent.defaultProps
   * @protected
   */
  static get defaultProps() {
    return {
      /**
       * Specify an input to connect the color picker to
       * @prop
       * @type  {String}
       */
      for: null,

      /**
       * Activate the opacity selector
       * @prop
       * @type  {Boolean}
       */
      opacity: false,

      /**
       * Specify some color to choose from
       * @prop
       * @type    {Array<Color>}
       */
      swatches: null,

      /**
       * Activate the hue selector
       * @prop
       * @type  {Boolean}
       */
      hue: true,

      /**
       * HEX format
       * @prop
       * @type  {Boolean}
       */
      hex: true,

      /**
       * RGBA format
       * @prop
       * @type  {Boolean}
       */
      rgba: false,

      /**
       * HSVA format
       * @prop
       * @type  {Boolean}
       */
      hsva: false,

      /**
       * Specify if want to display the input or not
       * @prop
       * @type  {Boolean}
       */
      input: true,

      /**
       * Specify the clear button translation. If false, hide the button
       * @prop
       * @type  {String|Boolean}
       */
      clear: false,

      /**
       * Specify the save button translation. If false, hide the button
       * @prop
       * @type  {String|Boolean}
       */
      save: false,

      /**
       * Specify the color to use to display the buttons.
       * This works only if you have generated the classes using the s-color-classes() mixin
       * @prop
       * @type  {String}
       */
      color: null
    };
  }

  /**
   * Css
   * @protected
   */
  static defaultCss(componentName, componentNameDash) {
    return `
      ${componentNameDash} {
        display : block;
        width: 1em; height: 1em;
      }
      .pickr{position:relative;overflow:visible;z-index:1}.pickr *{box-sizing:border-box}.pickr .pcr-button{position:relative;height:2em;width:2em;padding:.5em;border-radius:.15em;cursor:pointer;background:transparent;transition:background-color .3s;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}.pickr .pcr-button:before{background:url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');background-size:.5em;border-radius:.15em;z-index:-1}.pickr .pcr-button:after,.pickr .pcr-button:before{position:absolute;content:"";top:0;left:0;width:100%;height:100%}.pickr .pcr-button:after{background:url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" stroke="%2342445A" stroke-width="5px" stroke-linecap="round"><path d="M45,45L5,5"></path><path d="M45,5L5,45"></path></svg>') no-repeat 50%;background-size:70%;opacity:0}.pickr .pcr-button.clear:after{opacity:1}.pickr .pcr-button.disabled{cursor:not-allowed}.pcr-app{position:absolute;display:flex;flex-direction:column;z-index:10000;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-shadow:0 .2em 1.5em 0 rgba(0,0,0,.1),0 0 1em 0 rgba(0,0,0,.02);top:5px;height:15em;width:28em;max-width:95vw;padding:.8em;border-radius:.1em;background:#fff;opacity:0;visibility:hidden;transition:opacity .3s}.pcr-app.visible{visibility:visible;opacity:1}.pcr-app .swatches{display:flex;flex-wrap:wrap;display:grid;grid-template-columns:repeat(auto-fit,minmax(1.6em,1fr));margin-top:.75em}.pcr-app .swatches>div{position:relative;width:1.5em;height:1.5em;border-radius:.15em;cursor:pointer;margin:0 2px 2px 0;flex-shrink:0;justify-self:center;transition:all .3s;overflow:hidden}.pcr-app .swatches>div:before{background:url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');background-size:6px;border-radius:.15em;z-index:-1}.pcr-app .swatches>div:after,.pcr-app .swatches>div:before{position:absolute;content:"";top:0;left:0;width:100%;height:100%}.pcr-app .swatches>div:after{background:currentColor;border:1px solid rgba(0,0,0,.05);border-radius:.15em;box-sizing:border-box}.pcr-app .swatches>div:hover{filter:brightness(1.1)}.pcr-app .pcr-interaction{display:flex;align-items:center;margin:1em -.2em 0}.pcr-app .pcr-interaction>*{margin:0 .2em}.pcr-app .pcr-interaction input{padding:.5em .6em;border:none;outline:none;letter-spacing:.07em;font-size:.75em;text-align:center;cursor:pointer;color:#c4c4c4;background:#f8f8f8;border-radius:.15em;transition:all .15s}.pcr-app .pcr-interaction input:hover{color:grey}.pcr-app .pcr-interaction .pcr-result{color:grey;text-align:left;flex-grow:1;min-width:1em;transition:all .2s;border-radius:.15em;background:#f8f8f8;cursor:text;padding-left:.8em}.pcr-app .pcr-interaction .pcr-result:focus{color:#4285f4}.pcr-app .pcr-interaction .pcr-result::selection{background:#4285f4;color:#fff}.pcr-app .pcr-interaction .pcr-type.active{color:#fff;background:#4285f4}.pcr-app .pcr-interaction .pcr-clear,.pcr-app .pcr-interaction .pcr-save{color:#fff;width:auto}.pcr-app .pcr-interaction .pcr-save{background:#4285f4}.pcr-app .pcr-interaction .pcr-save:hover{background:#4370f4;color:#fff}.pcr-app .pcr-interaction .pcr-clear{background:#f44250}.pcr-app .pcr-interaction .pcr-clear:hover{background:#db3d49;color:#fff}.pcr-app .pcr-selection{display:flex;justify-content:space-between;flex-grow:1}.pcr-app .pcr-selection .pcr-picker{position:absolute;height:18px;width:18px;border:2px solid #fff;border-radius:100%;user-select:none;cursor:-moz-grab;cursor:-webkit-grabbing}.pcr-app .pcr-selection .pcr-color-preview{position:relative;z-index:1;width:2em;display:flex;flex-direction:column;justify-content:space-between;margin-right:.75em}.pcr-app .pcr-selection .pcr-color-preview:before{position:absolute;content:"";top:0;left:0;width:100%;height:100%;background:url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');background-size:.5em;border-radius:.15em;z-index:-1}.pcr-app .pcr-selection .pcr-color-preview .pcr-last-color{cursor:pointer;transition:background-color .3s;border-radius:.15em .15em 0 0}.pcr-app .pcr-selection .pcr-color-preview .pcr-current-color{border-radius:0 0 .15em .15em}.pcr-app .pcr-selection .pcr-color-preview .pcr-current-color,.pcr-app .pcr-selection .pcr-color-preview .pcr-last-color{background:transparent;width:100%;height:50%}.pcr-app .pcr-selection .pcr-color-chooser,.pcr-app .pcr-selection .pcr-color-opacity,.pcr-app .pcr-selection .pcr-color-palette{position:relative;user-select:none;display:flex;flex-direction:column}.pcr-app .pcr-selection .pcr-color-palette{width:100%;z-index:1}.pcr-app .pcr-selection .pcr-color-palette .pcr-palette{height:100%;border-radius:.15em}.pcr-app .pcr-selection .pcr-color-palette .pcr-palette:before{position:absolute;content:"";top:0;left:0;width:100%;height:100%;background:url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');background-size:.5em;border-radius:.15em;z-index:-1}.pcr-app .pcr-selection .pcr-color-chooser,.pcr-app .pcr-selection .pcr-color-opacity{margin-left:.75em}.pcr-app .pcr-selection .pcr-color-chooser .pcr-picker,.pcr-app .pcr-selection .pcr-color-opacity .pcr-picker{left:50%;transform:translateX(-50%)}.pcr-app .pcr-selection .pcr-color-chooser .pcr-slider,.pcr-app .pcr-selection .pcr-color-opacity .pcr-slider{width:8px;height:100%;border-radius:50em}.pcr-app .pcr-selection .pcr-color-chooser .pcr-slider{background:linear-gradient(180deg,red,#ff0,#0f0,#0ff,#00f,#f0f,red)}.pcr-app .pcr-selection .pcr-color-opacity .pcr-slider{background:linear-gradient(180deg,transparent,#000),url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>');background-size:100%,50%}
      .pcr-app {
        z-index: 10;
      }
    `;
  }

  /**
   * Mount component
   * @definition    SWebComponent.componentMount
   * @protected
   */
  componentMount() {
    super.componentMount();

    // get the input
    if (this.props.for instanceof window.HTMLElement) {
      this._targetElm = this.props.for;
    } else if (typeof this.props.for === "string") {
      this._targetElm = document.querySelector(
        `[name="${this.props.for}"], #${this.props.for}`
      );
    }

    // init new pickr
    this._pickr = new Pickr({
      el: this,
      useAsButton: true,
      default: this._targetElm ? this._targetElm.value : "#fff",
      swatches: this.props.swatches,
      components: {
        preview: true,
        opacity: this.props.opacity,
        hue: this.props.hue,
        interaction: {
          hex: this.props.hex,
          rgba: this.props.rgba,
          hsva: this.props.hsva,
          input: this.props.input,
          clear: this.props.clear !== false,
          save: this.props.save !== false
        }
      },
      strings: {
        clear: this.props.clear,
        save: this.props.save
      },
      onChange: (hsva, instance) => {
        const value = instance.getRoot().app.querySelector("input.pcr-result")
          .value;
        // set the value inside the target input
        if (this._targetElm) {
          this._targetElm.value = value;
          __dispatchEvent(this._targetElm, "change", value);
        }
        // set the background
        this.style.backgroundColor = hsva.toHEX().toString();
      }
    });

    // set the color from the target input if exist
    if (this._targetElm && this._targetElm.value) {
      this._pickr.setColor(this._targetElm.value);
      // set the background
      this.style.backgroundColor = this._targetElm.value.toString();
    }

    // listen for change in the target input
    if (this._targetElm) {
      this._targetElm.addEventListener("change", e => {
        if (e.detail) return; // the update has been made from the component itself
        // set the new color in the picker
        this._pickr.setColor(e.target.value);
      });
    }

    // copy color
    if (this.props.color) {
      this._pickr.getRoot().app.setAttribute("color", this.props.color);
    }
  }
}

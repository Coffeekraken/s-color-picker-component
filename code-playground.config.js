module.exports = {
  // server port
  port: 3000,

  // title
  title: 's-color-picker-component',

  // layout
  layout: 'right',

  // compile server
  compileServer: {

    // compile server port
    port: 4000

  },

  // editors
  editors: {
    html: {
      language: 'html',
      data: `
        <h1 class="h3 m-b-small">
          Coffeekraken s-color-picker-component
        </h1>
        <p class="p m-b-bigger">
          Provide a nice color picker component. This is a wrapper for the nice <a href="https://github.com/Simonwep/pickr" target="_blank">pickr</a> library.
        </p>
        <div class="form-group">
          <input class="form-input" type="text" name="color" id="color" value="#ff0000" />
          <s-color-picker for="color"></s-color-picker>
        </div>
      `
    },
    css: {
      language: 'sass',
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-typography-component/index';
        @import 'node_modules/coffeekraken-s-form-component/index';
        @import 'index';

        @include s-setup(());
        @include s-init();
        @include s-classes();

        @include s-typography-classes();
        @include s-form-classes();

        @include s-color-picker-classes();

        body {
          padding: s-space(bigger);
        }
      `
    },
    js: {
      language: 'js',
      data: `
        import 'webcomponents.js/webcomponents-lite'
        import SColorPickerComponent from './dist/index'
      `
    }
  }
}

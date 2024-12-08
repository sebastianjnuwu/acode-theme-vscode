import plugin from '../plugin.json';
const app = acode.require('settings');

class AcodeEruda {
  
  constructor() {
    this.isenable = true;
    if (!app.value[plugin.id]) {
      app.value[plugin.id] = { enable: this.isenable };
      app.update(false);
    }
  };

  async init() {
    if (!this.settings.enable) return;
    import('eruda').then(eruda => eruda.default.init());
  };

  get setting() {
    return {
      list: [
        {
          key: 'enable',
          text: 'Eruda enable?',
          checkbox: this.settings.enable,
          info: 'If this item is checked, "eruda" will be enabled',
        },
      ],
      cb: (key, value) => {
        this.settings[key] = value;
        app.update();
        if (this.settings.enable) {
          import('eruda').then(eruda => eruda.default.init());
        } else {
          import('eruda').then(eruda => eruda.default.destroy());
        }
      },
    };
  };

  get settings() {
    return app.value[plugin.id];
  };

  async destroy() {
    import('eruda').then(eruda => eruda.default.destroy());
    delete app.value[plugin.id];
    app.update(false);
  };
  
};

if (window.acode) {
  
  acode.setPluginInit(plugin.id, () => new AcodeEruda().init(), new AcodeEruda().setting);
  
  acode.setPluginUnmount(plugin.id, () => new AcodeEruda().destroy());
  
};
import "./eruda.js";
import plugin from "../plugin.json";
const app = acode.require("settings");

/**
 * AcodeEruda class manages the integration of the Eruda debugging tool with the Acode editor.
 * It provides settings for enabling/disabling Eruda and initializes it when necessary.
 */
class AcodeEruda {
  /**
   * Creates an instance of the AcodeEruda class.
   * Initializes the enable setting if not already present in the settings.
   */
  constructor() {
    this.isenable = true;

    // Initialize the plugin settings if not already defined
    if (!app.value[plugin.id]) {
      app.value[plugin.id] = { enable: this.isenable };
      app.update(false);
    }
  }

  /**
   * Initializes the Eruda tool if the settings enable the tool.
   * @returns {Promise<void>} A promise that resolves when Eruda is initialized.
   */
  async init() {
    if (!this.settings.enable) return;
    eruda.init();
  }

  /**
   * Gets the settings for the plugin.
   * Includes a checkbox for enabling/disabling Eruda and a callback to update the settings.
   * @returns {Object} The settings object containing the list of settings and the callback function.
   */
  get setting() {
    return {
      list: [
        {
          key: "enable",
          text: "Eruda enable?",
          checkbox: this.settings.enable,
          info: 'If this item is checked, "Eruda" will be enabled.',
        },
      ],
      /**
       * Callback function to update the plugin settings.
       * @param {string} key - The key of the setting to be updated.
       * @param {boolean} value - The new value of the setting.
       */
      cb: (key, value) => {
        this.settings[key] = value;
        app.update();

        // Initialize or destroy Eruda based on the setting value
        if (this.settings.enable) {
          eruda.init();
        } else {
          eruda.destroy();
        }
      },
    };
  }

  /**
   * Gets the current settings for the plugin.
   * @returns {Object} The current settings for the plugin.
   */
  get settings() {
    return app.value[plugin.id];
  }

  /**
   * Destroys the Eruda tool and removes its settings from the app.
   * @returns {Promise<void>} A promise that resolves when Eruda is destroyed.
   */
  async destroy() {
    eruda.destroy();
    delete app.value[plugin.id];
    app.update(false);
  }
}

// Check if Acode is available before initializing the plugin
if (window.acode) {
  const Instance = new AcodeEruda();

  // Initialize the plugin with the appropriate callback functions
  acode.setPluginInit(plugin.id, () => Instance.init(), Instance.setting);

  // Unmount the plugin and destroy its resources when no longer needed
  acode.setPluginUnmount(plugin.id, () => Instance.destroy());
}

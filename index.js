const wdio = require("webdriverio");

const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
      platformName: "Android",
      platformVersion: "11",
      deviceName: "Android Emulator",
      app: "/Users/rafael.delossantos/Projects/appium-test/ApiDemos-debug.apk",
      appPackage: "io.appium.android.apis",
      appActivity: ".view.TextFields",
      automationName: "Espresso"
    }
  };
  
  async function main () {
    const client = await wdio.remote(opts);

    const field = await client.$("android.widget.EditText");
    await field.setValue("Hello World!");
    const value = await field.getText();
    assert.strictEqual(value,"Hello World!");
  
    await client.deleteSession();
  }
  
  main();
  
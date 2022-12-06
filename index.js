const wdio = require("webdriverio");

const espressoBuildConfig = JSON.stringify({
  additionalAppDependencies: ["com.google.android.material:material:1.0.0", "androidx.lifecycle:lifecycle-extensions:2.1.0"],
});

const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
      platformName: "Android",
      platformVersion: "11",
      deviceName: "Emulator",
      forceEspressoRebuild: true,
      app: "/directory/to/smarthospo/app.apk",
      automationName: "Espresso",
      appPackage: "com.doshii.payattable.dev",
      appActivity: "com.doshii.payattable.ui.main.MainActivity",
      fullReset: true,
      showGradleLog: true,
      printPageSourceOnFindFailure: true,
      espressoBuildConfig: espressoBuildConfig
    }
  };
  
  async function main () {
    const client = await wdio.remote(opts);
    await client.deleteSession();
  }
  
  main();
  
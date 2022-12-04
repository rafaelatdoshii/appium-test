# Appium Testing Hello World using Espresso Driver

### Setup
1. Install Appium from https://github.com/appium/appium-desktop/releases/tag/v1.22.3-4 or from terminal e.g. `npm install -g appium`
2. Launch the appium app
3. Look for `Edit Configurations` and add the path to the following:
- ANDROID_HOME = `/Users/yourusername/Library/Android/sdk`
- JAVA_HOME = `/Applications/Android Studio.app/Contents/jre/Contents/Home/` or  wherever your java is located

4. Start the Appium Server
5. Modify `index.js` to use your own emulator/real device, path of the apk to be tested, etc.
6. Run the appium test in this repository by running `node index.js`


### Notes
See the following references for more information
- https://appium.io/docs/en/about-appium/getting-started/
- https://github.com/appium/appium-espresso-driver
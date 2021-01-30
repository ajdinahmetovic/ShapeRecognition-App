[![Logo](https://livejones.com/wp-content/uploads/2020/05/logo-Placeholder.png 'Logo')](https://YOUR_PROJECT_WEBSITE.io)

# YOUR_PROJECT_NAME Mobile App

## Preview

- [Google Play Store](https://play.google.com/store/apps/details?id=YOUR_APP_BUNDLE_ID)
- [App Store]() `Coming soon`

## Technology

- [React](https://reactjs.org/) + [Redux](https://redux.js.org/) + [React Native](https://facebook.github.io/react-native/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://github.com/axios/axios)
- [YOUR_OTHER_PACKAGES](https://facebook.github.io/react-native/)

## Requirements

- [Node.js v10+](https://nodejs.org/) + [Yarn](https://yarnpkg.com/)
- [React Native CLI](https://www.npmjs.com/package/react-native-cli) (`npm -g install react-native-cli`)
- [Android Studio](https://developer.android.com/studio/index.html)
- Xcode Command Line tools (`xcode-select --install`)
- [CocoaPods](https://cocoapods.org/) (`gem install cocoapods`)
  More on how to install react native [here](https://reactnative.dev/docs/environment-setup)

## Usage

```sh
# install dependencies
yarn install

# run bundler
yarn run serve

# run on Android device/emulator
yarn run android

# run on iOS device/simulator
yarn run ios

# run tests
yarn run test

# lint code
yarn run lint
```

## Development build

###Android:

```sh
# install dependencies
yarn install

# run bundler
yarn run serve

# Build debug apk
yarn debug-build
```

###iOS

- Run `pod install`
- Switch version to 0.1
- Increment build number
- Archive app
- Sign and upload to TestFlight

## Production build

###Android:

```sh
# install dependencies
yarn install

# run bundler
yarn run serve

#IMPORTANT Before this step increment build number in build.gradle
# Build debug apk
yarn release-build
```

- Upload release-apk to Play Console and wait for review :)

###iOS

- Run `pod install`
- Switch version to 1.0
- Increment build number
- Archive app
- Sign and upload to TestFlight
- After TestFlight is apporved promote release to production

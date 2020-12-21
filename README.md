# RNUrlPreviewExample
react-native-url-preview demo

# Usage
***NOTE: you may encounter an error, `EMFILE` too many open files, this can be fixed by either increasing max open files ulimit or installing the following package:***

```
   npm install watchman
```

## Dependencies installation
As a non root user, run the following:

```
   npm i
```

## IOS Usage

In order to run this in iOS simulator (limited to Mac OS) you should run the following command (replacing preferred simulator):

```
   react-native run-ios --simulator <PREFERRED_SIMULATOR>
```

## Android Usage

In order to run this in android simulator you should run the following command:

```
  export JAVA_HOME=/Applications/Android\ Studio.app/Contents/jre/jdk/Contents/Home # use embedded JDK instead of system one
  react-native run-android
```

import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.testnsng',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  webpackConfigPath: "./webpack.custom.config.js",
} as NativeScriptConfig;
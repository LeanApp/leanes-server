

const mergeTrees = require('broccoli-merge-trees');
const esTranspiler = require('broccoli-babel-transpiler');
const replacer = require('broccoli-string-replace');
const WatchedDir = require('broccoli-source').WatchedDir;

const appRoot = __dirname + '/src';

const devJS = replacer(new WatchedDir(appRoot), {
  files: [ '**/*.js' ],
  patterns: [{
    match: '__LeanES__',
    replacement: '@leansdk/leanes/lib/index.dev',
  }, {
    match: '__ConfigurableAddon__',
    replacement: '@leansdk/leanes-configurable-addon/lib/index.dev',
  }, {
    match: '__FsUtilsAddon__',
    replacement: '@leansdk/leanes-fs-utils-addon/lib/index.dev',
  }, {
    match: '__MapperAddon__',
    replacement: '@leansdk/leanes-mapper-addon/lib/index.dev',
  }, {
    match: '__MongoAddon__',
    replacement: '@leansdk/leanes-mongo-addon/lib/index.dev',
  }, {
    match: '__RestfulAddon__',
    replacement: '@leansdk/leanes-restful-addon/lib/index.dev',
  }, {
    match: '__SwaggerAddon__',
    replacement: '@leansdk/leanes-swagger-addon/dev',
  },]
});
const dev = esTranspiler(devJS, {
  filterExtensions: ["js"],
  browserPolyfill: false,
  sourceMap: 'inline',
  exclude: "node_modules/**",
  presets: [
    ["@babel/preset-env", {targets: {node: '14.9'}, loose: true, useBuiltIns: false}]
  ],
  plugins: [
    "@babel/plugin-syntax-flow",
    ["flow-runtime", {
      "assert": true,
      "annotate": true
    }],
    "@babel/plugin-transform-flow-strip-types",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "babel-plugin-parameter-decorator",
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    "@babel/plugin-transform-runtime",
  ],
});

const prodJS = replacer(appRoot, {
  files: [ '**/*.js' ],
  patterns: [{
    match: '__LeanES__',
    replacement: '@leansdk/leanes',
  }, {
    match: '__ConfigurableAddon__',
    replacement: '@leansdk/leanes-configurable-addon',
  }, {
    match: '__FsUtilsAddon__',
    replacement: '@leansdk/leanes-fs-utils-addon',
  }, {
    match: '__MapperAddon__',
    replacement: '@leansdk/leanes-mapper-addon',
  }, {
    match: '__MongoAddon__',
    replacement: '@leansdk/leanes-mongo-addon',
  }, {
    match: '__RestfulAddon__',
    replacement: '@leansdk/leanes-restful-addon',
  }, {
    match: '__SwaggerAddon__',
    replacement: '@leansdk/leanes-swagger-addon',
  },]
});
const prod = esTranspiler(prodJS, {
  filterExtensions: ["js"],
  browserPolyfill: false,
  exclude: "node_modules/**",
  presets: [
    ["@babel/preset-env", {targets: {node: '14.9'}, loose: true, useBuiltIns: false}]
  ],
  plugins: [
    "@babel/plugin-syntax-flow",
    "@babel/plugin-transform-flow-strip-types",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "babel-plugin-parameter-decorator",
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    "@babel/plugin-transform-runtime",
  ],
});

module.exports = options => {
  if (options.env == 'production') {
    return mergeTrees([prod], { annotation: "Final output", overwrite: true });
  } else if (options.env == 'development') {
    return mergeTrees([dev], { annotation: "Final output", overwrite: true });
  }
};

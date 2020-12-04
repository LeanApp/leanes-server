

module.exports = {
  babelrcRoots: [
    "node_modules/@leansdk/leanes",
    "node_modules/@leansdk/leanes-fs-utils-addon",
    "node_modules/@leansdk/leanes-configurable-addon",
  ],
  exclude: [/node_modules\/(?![@leansdk\/leanes])/],
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
    "@babel/plugin-transform-runtime"
  ],
}

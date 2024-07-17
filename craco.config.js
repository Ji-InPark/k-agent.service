const tsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
  },
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          webpackConfig.resolve.plugins.push(new tsconfigPathsWebpackPlugin({}));
          return webpackConfig;
        },
      },
    },
  ],
};

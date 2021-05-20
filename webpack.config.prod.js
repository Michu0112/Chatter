const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'Chatter': './src/scripts/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'scripts'),
    publicPath: 'dist/scripts/'
  },
  devtool: 'cheap-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
              ]
            ]
          }
        }
      }
    ]
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()]
};
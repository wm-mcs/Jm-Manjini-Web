const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'resources/assets/webpack/'),
};

module.exports = {
  context: __dirname,
  entry: {
    home: path.resolve(
      __dirname,
      'resources',
      'assets',
      'webpack',
      'js',
      'index.js'
    ),
  },

  output: {
    path: path.resolve(__dirname, 'public2/'),
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[id].[chunkhash].js',
    publicPath: '/',
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
      https: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'],
      },
      {
        test: /\.scss$/,

        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.(gif|png|jpe?g|ttf|eot|svg|gif|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name][contenthash].[ext]',
              limit: 2000,
              outputPath: 'assets',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'resources/assets/webpack/index.html'),
      minify: {
        collapseWhitespace: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[id].[contenthash].css',
      chunkFilename: 'css/[id].[contenthash].css',
    }),
    new GenerateSW(),
  ],
};

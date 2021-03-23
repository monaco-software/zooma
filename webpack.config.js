const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin')
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const { closeSync, openSync, utimesSync } = require('fs');

const isProductionMode = process.env.NODE_ENV === 'production';

const spaConfig = {
  mode: isProductionMode ? 'production' : 'development',
  devtool: !isProductionMode && 'inline-source-map',
  target: isProductionMode ? 'browserslist' : 'web', // Fix https://github.com/webpack/webpack-dev-server/issues/2758#issuecomment-710086019
  entry: {
    index: './src/index.tsx',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.png|\.mp3$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[hash].[ext]',
            publicPath: '/',
          },
        },
      },
    ],
  },
  optimization: {
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  devServer: {
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 500,
      poll: 500,
    },
    historyApiFallback: true,
    hot: true,
    port: 9000,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'head',
      scriptLoading: 'defer',
      favicon: './src/pwa/favicon.ico',
      manifest: isProductionMode ? 'manifest.json' : undefined,
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new ESLintPlugin({
      extensions: ['.ts', '.tsx'],
    }),
    new StylelintPlugin({
      files: ['./src/**.css'],
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: './src/pages/game/assets/fonts/Bangers.ttf' }],
    }),
    isProductionMode ?
      new CopyWebpackPlugin({
        patterns: [{ from: './src/pwa/' }],
      }) :
      new CopyWebpackPlugin({
        patterns: [{ from: './scripts/reload.js' }],
      }),
    isProductionMode ?
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
        navigateFallback: '/index.html',
      }) :
      new NodemonPlugin({
        script: './ssr/server/server.js',
        watch: [
          path.resolve('./ssr/server/server.js'),
          path.resolve('./ssr/dist/index.html'),
          path.resolve('./ssr/dist/stats.json'),
        ],
        delay: '2000',
        verbose: false,
      }),
    new StatsWriterPlugin({
      filename: 'stats.json',
      transform(data) {
        return JSON.stringify(
          data.assetsByChunkName.index
            .concat(data.assetsByChunkName.vendors));
      },
    }),
  ].filter(Boolean),
};

module.exports = spaConfig;

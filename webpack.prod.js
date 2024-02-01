const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgeCss = require('purgecss-webpack-plugin')
const glob = require('glob')
const path = require('path')
const commonConfig = require('./webpack.common.js')

const purgePath = {
  src: path.join(__dirname, 'src'),
}

const prodConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', {}]],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new PurgeCss({
      paths: glob.sync(`${purgePath.src}/**/*`, {
        nodir: true,
      }),
    }),
  ],
}

module.exports = merge(commonConfig, prodConfig)

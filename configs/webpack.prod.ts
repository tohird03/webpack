import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import {Mode, paths} from './constants';
import {getModuleRules, getOutput, resolve} from './common-webpack-params';

const config: webpack.Configuration = {
  mode: Mode.Production,
  entry: paths.entry,
  output: getOutput(Mode.Production),
  module: {
    rules: getModuleRules(Mode.Production),
  },
  resolve,
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.contentBase,
          to: paths.build,
          // @ts-ignore
          filter: async (resourcePath: any) => !resourcePath.includes('index.html'),
        },
      ],
    }),

    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyURLs: true,
      },
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
      async: false,
    }),
    new CleanWebpackPlugin(),
    new Dotenv({systemvars: true}),
    new MiniCssExtractPlugin({
      filename: "static/styles/[name].css",
      chunkFilename: "static/styles/[id].css",
    }),
  ],
  stats: 'errors-warnings',
  optimization: {
    minimize: true,
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module: any) {
            const moduleList = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);

            if (moduleList && moduleList[1]) {
              const packageName = moduleList[1];
              return `module.${packageName.replace('@', '')}`;
            }
          },
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
      }),
    ]
  },
};

export default config;

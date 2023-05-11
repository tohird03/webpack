import webpack, {Configuration as WebpackConfiguration} from 'webpack';
import {Configuration as WebpackDevServerConfiguration} from 'webpack-dev-server';
import Dotenv from 'dotenv-webpack';
import ESLintPlugin from 'eslint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {DEV_SERVER_PORT, Mode, paths} from './constants';
import {getModuleRules, getOutput, resolve} from './common-webpack-params';

interface Configuration extends WebpackConfiguration {
  devServer: WebpackDevServerConfiguration;
}

const config = (env: Record<string, string>): Configuration => {
  return {
    target: 'web',
    mode: Mode.Development,
    output: getOutput(Mode.Development),
    entry: paths.entry,
    module: {
      rules: getModuleRules(Mode.Development),
    },
    resolve,
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        template: "./public/index.html",
      }),
      new ESLintPlugin({
        extensions: ["js", "jsx", "ts", "tsx"],
      }),
      new webpack.HotModuleReplacementPlugin(),
      new Dotenv({systemvars: true}),
    ],
    devtool: 'cheap-module-source-map',
    optimization: {
      emitOnErrors: true,
    },

    devServer: {
      static: {
        directory: paths.contentBase,
        publicPath: '/',
        watch: true,
      },
      historyApiFallback: true,
      hot: true,
      liveReload: false,
      open: true,
      port: DEV_SERVER_PORT,
      client: {
        logging: 'error',
        overlay: {
          errors: true,
          warnings: false,
        },
        progress: true,
      },
    },
  }
};

export default config;

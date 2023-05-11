import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {
  IMAGE_INLINE_SIZE_LIMIT,
  Mode,
  moduleFileExtensions,
  paths,
} from './constants';

export const getOutput = (mode: Mode) => ({
  publicPath: mode === Mode.Development ? '/' : './',
  filename: `static/js/${mode === Mode.Development ? 'bundle.js' : '[name].[contenthash].js'}`,
  ...(mode === Mode.Development && {chunkFilename: 'static/js/[name].chunk.js'}),
  ...(mode === Mode.Development && {sourceMapFilename: '[file].map'}),
  ...(mode === Mode.Production && {path: paths.build}),
  strictModuleExceptionHandling: true,
});

export const getModuleRules = (mode: Mode) => ([
  {
    test: /\.(ts|js)x?$/i,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        customize: require.resolve(
          'babel-preset-react-app/webpack-overrides'
        ),
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
        plugins: [
          '@babel/plugin-transform-runtime',
        ],
      },
    },
  },
  {
    test: /\.css$/,
    use: mode === Mode.Development
      ? [
        'style-loader',
        'css-loader',
        {
          loader: 'resolve-url-loader',
          options: {
            sourceMap: true,
            sourceMapContents: false
          }
        }
      ]
      : [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {esModule: false}
        },
        'css-loader',
      ],
  },
  {
    test: /\.s[ac]ss$/i,
    use: mode === Mode.Development
      ? [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ]
      : [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {esModule: false},
        },
        'css-loader',
        'sass-loader',
      ],
  },
  {
    test: /\.(eot|otf|ttf|woff|woff2)$/,
    type: mode === Mode.Development ? 'assets/resource' : 'assets/inline',
  },
  {
    test: /\.svg$/,
    use: ['@svgr/webpack', 'url-loader'],
  },
  {
    test: /\.(bmp|gif|jpe?g|tiff|png|webp|svg|mp3|wav)$/,
    use: [
      {
        loader: mode === Mode.Development ? 'file-loader' : 'url-loader',
        options: mode === Mode.Development
          ? {outputPath: 'images'}
          : {
            limit: IMAGE_INLINE_SIZE_LIMIT,
            name: 'static/media/[name].[hash:8].[ext]',
          },
      },
    ],
  },
]);

export const resolve = ({
  extensions: moduleFileExtensions.map(ext => `.${ext}`),
  alias: {
    '@': paths.src,
    'styles': paths.styles,
  }
});

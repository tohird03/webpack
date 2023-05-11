import * as path from "path";
import * as fs from 'fs';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string): string => path.resolve(appDirectory, relativePath);

export enum Mode {
  Development = 'development',
  Production = 'production'
}

export const DEV_SERVER_PORT = 5000;

export const moduleFileExtensions = [
  'js',
  'jsx',
  'ts',
  'tsx',
  'less',
  'json',
  'scss',
];

export const paths = {
  entry: resolveApp('src/index.tsx'),
  template: resolveApp('public/index.html'),
  contentBase: resolveApp("public"),
  server: resolveApp("server"),
  npmrc: resolveApp(".npmrc"),

  src: resolveApp("src"),
  assets: resolveApp("src/assets"),
  styles: resolveApp("src/styles"),
  build: resolveApp('build'),
  nodeModules: resolveApp('node_modules'),
  antThemeLessFile: resolveApp('src/styles/ant-theme.less'),
  root: resolveApp(''),
};

export const IMAGE_INLINE_SIZE_LIMIT = parseInt(process.env.IMAGE_INLINE_SIZE_LIMIT || '10000', 10);

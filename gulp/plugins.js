import argv from "./argv.js";

import gulp, { task, series, parallel, watch, dest } from "gulp";
import browserSync from "browser-sync";
import connectHistoryApiFallback from "connect-history-api-fallback";
import autoprefixer from "autoprefixer";
import plumber from "gulp-plumber";
import gulpif from "gulp-if";
import sourcemaps from "gulp-sourcemaps";
import notify from "gulp-notify";
import debug from "gulp-debug";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import postcss from "gulp-postcss";
import cssnano from "cssnano";
import cssPrettify from "postcss-prettify";
import sortMediaQueries from "postcss-sort-media-queries";
import gulpMode from "gulp-mode";
import emitty from "emitty";
import pug from "gulp-pug";
import { deleteAsync } from "del";
import ttf2woff from "gulp-ttf2woff";
import ttf2woff2 from "gulp-ttf2woff2";
import stream from "merge-stream";
import webpackStream from "webpack-stream";
import rename from "gulp-rename";
import newer from "gulp-newer";
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from "gulp-imagemin";
import changed from "gulp-changed";
import webp from "gulp-webp";
import svgmin from "gulp-svgmin";
import svgstore from "gulp-svgstore";
import replace from "gulp-replace";

const sass = gulpSass(dartSass);
const mode = gulpMode(argv.mode);

export {
  task,
  series,
  parallel,
  watch,
  gulp,
  browserSync,
  connectHistoryApiFallback,
  autoprefixer,
  plumber,
  gulpif as if,
  sourcemaps,
  notify,
  debug,
  sass,
  postcss,
  dest,
  cssnano,
  cssPrettify,
  sortMediaQueries,
  mode,
  emitty,
  pug,
  deleteAsync,
  ttf2woff,
  ttf2woff2,
  stream,
  webpackStream,
  rename,
  newer,
  imagemin,
  gifsicle,
  mozjpeg,
  optipng,
  svgo,
  changed,
  webp,
  svgmin,
  svgstore,
  replace,
};

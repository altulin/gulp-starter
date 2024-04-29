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
import mode from "gulp-mode";
import emitty from "emitty";
import pug from "gulp-pug";

const sass = gulpSass(dartSass);

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
};

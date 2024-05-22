import * as $ from "../../plugins.js";
import argv from "../../argv.js";
import paths from "../../paths.js";
import errorHandler from "../../error.js";
import { svgoConfig } from "./svgoConfig.js";

export const svgMin = () => {
  const isDev = $.mode.development();

  const SRC = `${paths.svg.src}/*.svg`;
  const DESTINATION = paths.svg[isDev ? "dev" : "dist"];

  return $.gulp
    .src(SRC)
    .pipe(
      $.plumber({
        errorHandler,
      })
    )
    .pipe($.if(argv.debug, $.debug()))
    .pipe($.svgmin(svgoConfig()))
    .pipe($.dest(DESTINATION));
};

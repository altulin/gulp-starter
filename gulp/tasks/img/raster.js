import * as $ from "../../plugins.js";
import argv from "../../argv.js";
import paths from "../../paths.js";
import errorHandler from "../../error.js";

export const optimizeRaster = () => {
  const isDev = $.mode.development();

  const SRC = `${paths.raster}/*.{png,jpg}`;
  const DESTINATION = `${paths.destination}/img`;

  return $.gulp
    .src(SRC, { removeBOM: false })
    .pipe($.changed(DESTINATION))
    .pipe($.if(argv.cache, $.newer(SRC)))
    .pipe($.if(argv.debug, $.debug()))
    .pipe(
      $.plumber({
        errorHandler,
      })
    )
    .pipe(
      $.imagemin({
        verbose: isDev,
      })
    )
    .pipe($.dest(DESTINATION));
};

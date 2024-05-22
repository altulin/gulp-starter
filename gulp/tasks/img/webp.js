import * as $ from "../../plugins.js";
import argv from "../../argv.js";
import paths from "../../paths.js";
import errorHandler from "../../error.js";

export const convertToWebP = () => {
  const SRC = `${paths.webp}/*.{png,jpg}`;
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
    .pipe($.webp())
    .pipe($.dest(DESTINATION));
};

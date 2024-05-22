import * as $ from "../plugins.js";
import errorHandler from "../error.js";
import paths from "../paths.js";

const isDev = $.mode.development();

const SRC = paths.fonts.src;
const DESTINATION = paths.fonts[isDev ? "dev" : "dist"];
const ttf = `${SRC}/*.ttf`;

const convert = (plugin) => {
  return $.gulp
    .src(ttf)
    .pipe(
      $.plumber({
        errorHandler,
      })
    )
    .pipe(plugin)
    .pipe($.dest(SRC));
};

export const fonts = () => {
  return $.stream(convert($.ttf2woff()), convert($.ttf2woff2()));
};

export const cleanTtf = () => {
  return $.deleteAsync([ttf]);
};

export const copyFonts = () => {
  return $.gulp
    .src(`${paths.fonts.src}/**/*`)
    .pipe($.dest(`${DESTINATION}/fonts`));
};

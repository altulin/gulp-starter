import * as $ from "../plugins.js";
import errorHandler from "../error.js";
import path from "../paths.js";

const ttf = `${path.fonts.src}/*.ttf`;

const convert = (plugin) => {
  return $.gulp
    .src(ttf)
    .pipe(
      $.plumber({
        errorHandler,
      })
    )
    .pipe(plugin)
    .pipe($.dest(path.fonts.src));
};

export const fonts = () => {
  return $.stream(convert($.ttf2woff()), convert($.ttf2woff2()));
};

export const cleanTtf = () => {
  return $.deleteAsync([ttf]);
};

export const copyFonts = () => {
  return $.gulp
    .src(`${path.fonts.src}/**/*`)
    .pipe($.dest(`${path.fonts.dev}/fonts`));
};

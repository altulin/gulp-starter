import * as $ from "../../plugins.js";
import argv from "../../argv.js";
import paths from "../../paths.js";
import errorHandler from "../../error.js";
import { svgoConfig } from "./svgoConfig.js";

export const makeSvgSprite = () => {
  const SRC = `${paths.sprite}/*.svg`;
  const DESTINATION = `${paths.destination}/img`;

  return $.gulp
    .src(SRC)
    .pipe(
      $.plumber({
        errorHandler,
      })
    )
    .pipe($.if(argv.debug, $.debug()))
    .pipe($.svgmin(svgoConfig()))
    .pipe($.svgstore({ inlineSvg: true }))
    .pipe($.if(argv.minifySvg, $.replace(/^\t+$/gm, "")))
    .pipe($.if(argv.minifySvg, $.replace(/\n{2,}/g, "\n")))
    .pipe($.if(argv.minifySvg, $.replace("?><!", "?>\n<!")))
    .pipe($.if(argv.minifySvg, $.replace("><svg", ">\n<svg")))
    .pipe($.if(argv.minifySvg, $.replace("><defs", ">\n\t<defs")))
    .pipe($.if(argv.minifySvg, $.replace("><symbol", ">\n<symbol")))
    .pipe($.if(argv.minifySvg, $.replace("></svg", ">\n</svg")))
    .pipe($.rename("sprites.svg"))
    .pipe($.dest(DESTINATION));
};

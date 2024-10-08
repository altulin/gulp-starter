import * as $ from "../../plugins.js";
import argv from "../../argv.js";
import paths from "../../paths.js";
import { makePlumber } from "../../error.js";
// import { svgoConfig } from "./svgoConfig.js";
import { cleanSprite } from "../../del/index.js";

export const makeSvgSprite = () => {
  const SRC = `${paths.sprite}/*.svg`;
  const DESTINATION = `${paths.destination}/img`;

  cleanSprite();

  return $.gulp
    .src(SRC)
    .pipe(makePlumber("sprite"))
    .pipe($.if(argv.debug, $.debug()))
    .pipe(
      $.svgmin({
        js2svg: {
          pretty: true,
          indent: 2,
        },
        multipass: true,
        plugins: [{ removeViewBox: false }],
      })
    )
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

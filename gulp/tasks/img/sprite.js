import * as $ from "../../plugins.js";
// import argv from "../../argv.js";
import paths from "../../paths.js";
import { makePlumber } from "../../error.js";
// import { svgoConfig } from "./svgoConfig.js";
import { cleanSprite } from "../../del/index.js";
import browser from "../../browser.js";

export const makeSvgSprite = () => {
  const SRC = `${paths.sprite}/*.svg`;
  const DESTINATION = `${paths.destination}/img`;

  cleanSprite();
  return $.src(SRC)
    .pipe(makePlumber("sprite"))
    .pipe(
      $.sprite({
        mode: {
          inline: true,
          symbol: {
            // symbol mode to build the SVG
            dest: "", // destination folder
            sprite: "sprites.svg", //sprite name
            example: false, // do not build sample page
          },
        },
        svg: {
          xmlDeclaration: false, // strip out the XML attribute
          doctypeDeclaration: false, // don't include the !DOCTYPE declaration
        },
      })
    )

    .pipe($.dest(DESTINATION))
    .pipe(browser.stream());
};

import * as $ from "../../plugins.js";
import argv from "../../argv.js";
import paths from "../../paths.js";
import { makePlumber } from "../../error.js";
import { svgoConfig } from "./svgoConfig.js";

export const svgMin = () => {
  const SRC = `${paths.svg}/*.svg`;
  const DESTINATION = `${paths.destination}/img`;

  return $.src(SRC)
    .pipe(makePlumber("svg"))
    .pipe($.if(argv.debug, $.debug()))
    .pipe($.svgmin(svgoConfig()))
    .pipe($.dest(DESTINATION));
};

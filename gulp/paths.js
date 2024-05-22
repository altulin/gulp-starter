import * as $ from "./plugins.js";

const SRC = "./_src";
const DIST = "./build";
const DEV = "./dev";
const IMG = `${SRC}/img`;

export default {
  scss: `${SRC}/scss`,
  js: `${SRC}/js`,
  pug: `${SRC}/pug`,
  fonts: `${SRC}/fonts`,
  raster: `${IMG}/raster`,
  webp: `${IMG}/webp`,
  sprite: `${IMG}/sprite`,
  svg: `${IMG}/svg`,
  destination: $.mode.development() ? DEV : DIST,
};

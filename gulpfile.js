import { cleanDev, cleanBuild } from "./gulp/del/index.js";
import * as $ from "./gulp/plugins.js";
import * as t from "./gulp/tasks/index.js";
import paths from "./gulp/paths.js";
import {
  optimizeRaster,
  convertToWebP,
  makeSvgSprite,
  svgMin,
} from "./gulp/tasks/img/index.js";

$.task("watch", () => {
  $.watch(`${paths.scss}/**/*.scss`, t.scss);
  $.watch(`${paths.pug}/**/*.pug`, t.pug);
  $.watch(`${paths.js}/**/*.js`, t.js);
  $.watch(paths.raster, optimizeRaster);
  $.watch(paths.webp, convertToWebP);
  $.watch(paths.sprite, $.series(makeSvgSprite));
  $.watch(paths.svg, svgMin);
});

$.task("fonts", $.series(t.ttf2Woff, t.ttf2Woff2, t.cleanTtf, t.copyFonts));
$.task("img", $.series(optimizeRaster, convertToWebP, makeSvgSprite, svgMin));
$.task(
  "develop",
  $.series(cleanDev, $.parallel(t.pug, t.scss, "fonts", t.js, "img"))
);
$.task("development", $.series("develop", $.parallel(t.server, "watch")));
$.task("production", $.series(cleanBuild, $.parallel("develop", t.robots)));

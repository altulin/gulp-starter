import { cleanDev, cleanBuild } from "./gulp/del/index.js";
import * as $ from "./gulp/plugins.js";
import {
  serve,
  scss,
  pug,
  fonts,
  cleanTtf,
  copyFonts,
  js,
  robots,
} from "./gulp/tasks/index.js";
import paths from "./gulp/paths.js";
import {
  optimizeRaster,
  convertToWebP,
  makeSvgSprite,
  svgMin,
} from "./gulp/tasks/img/index.js";

$.task("watch", () => {
  $.watch(paths.scss.src, scss);
  $.watch(`${paths.pug.src}/**/*.pug`, pug);
  $.watch(paths.js.src, js);
  $.watch(paths.raster.src, optimizeRaster);
  $.watch(paths.webp.src, convertToWebP);
  $.watch(paths.sprite.src, makeSvgSprite);
  $.watch(paths.svg.src, svgMin);
});

$.task("fonts", $.series(fonts, cleanTtf, copyFonts));

$.task("img", $.series(optimizeRaster, convertToWebP, makeSvgSprite, svgMin));

$.task(
  "develop",
  $.series(cleanDev, $.parallel(pug, scss, "fonts", js, "img"))
);

$.task("development", $.series("develop", $.parallel(serve, "watch")));
$.task("production", $.series(cleanBuild, $.parallel("develop", robots)));

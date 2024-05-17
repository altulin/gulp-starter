import { cleanDev } from "./gulp/del/dev.js";
import * as $ from "./gulp/plugins.js";
import {
  serve,
  scss,
  pug,
  fonts,
  cleanTtf,
  copyFonts,
  js,
} from "./gulp/tasks/index.js";
import paths from "./gulp/paths.js";
// import { fonts, cleanTtf, copyFonts } from "./gulp/tasks/fonts.js";

$.task("watch", () => {
  $.watch(paths.scss.src, scss);
  $.watch(paths.pug.src, pug);
  $.watch(paths.js.src, js);
});

$.task("fonts", $.series(fonts, cleanTtf, copyFonts));

$.task("develop", $.series(cleanDev, $.parallel(pug, scss, "fonts", js)));

$.task("default", $.series("develop", $.parallel(serve, "watch")));

// $.task("default", pug);

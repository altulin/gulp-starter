import * as $ from "./gulp/plugins.js";
import { serve, scss, pug, images } from "./gulp/tasks/index.js";

$.task("serve", serve);
$.task("watch", () => {
  $.watch("_src/**/*", scss);
  $.watch("_src/**/*.pug", pug);
});

// $.task("default", $.parallel("serve", "watch"));

$.task("default", images);

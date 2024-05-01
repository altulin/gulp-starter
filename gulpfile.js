import * as $ from "./gulp/plugins.js";
import { serve, scss, pug } from "./gulp/tasks/index.js";
import paths from "./gulp/paths.js";

$.task("serve", serve);

$.task("watch", () => {
  $.watch("_src/**/*", scss);
  $.watch("_src/**/*.pug", pug);
});

$.task("develop", $.series(pug, scss));

$.task("default", $.series("develop", $.parallel("serve", "watch")));

// $.task("default", pug);

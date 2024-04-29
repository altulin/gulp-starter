import * as $ from "./gulp/plugins.js";
import { serve, scss } from "./gulp/tasks/index.js";

$.task("serve", serve);
$.task("watch", () => {
  $.watch("_src/**/*", scss);
});

// $.task("default", $.parallel("serve", "watch"));

$.task("default", scss);

import * as $ from "../plugins.js";
import argv from "../argv.js";

export const serve = () => {
  let middleware = [];

  if (argv.spa) {
    middleware.push($.connectHistoryApiFallback());
  }

  $.browserSync.create().init({
    notify: argv.notify,
    open: argv.open,
    port: argv.port,
    // files: ["./gulp/**/*"],

    server: {
      baseDir: "./dev",
      middleware,
    },
  });
};

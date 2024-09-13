import * as $ from "../plugins.js";
import argv from "../argv.js";
import paths from "../paths.js";

export const serve = () => {
  let middleware = [];

  if (argv.spa) {
    middleware.push($.connectHistoryApiFallback());
  }

  $.browserSync.create().init({
    notify: argv.notify,
    open: argv.open,
    port: argv.port,
    files: [`${paths.dev}/**/*`],
    // files: [
    //   "css/**/*.css",
    //   "js/**/*.js",
    //   "img/**/*",
    //   "fonts/**/*",
    //   "**/*.html",
    // ],

    server: {
      baseDir: paths.dev,
    },
  });
};

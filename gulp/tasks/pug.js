/* eslint-disable no-undef */
import * as $ from "../plugins.js";
import argv from "../argv.js";
import errorHandler from "../error.js";
import path from "../paths.js";

let emittyPug;

export const pug = () => {
  const isDev = $.mode.development();

  if (!emittyPug) {
    emittyPug = $.emitty.setup("_src", "pug", {
      makeVinylFile: true,
    });
  }

  if (!argv.cache) {
    return $.gulp
      .src(path.pug.src)
      .pipe(
        $.plumber({
          errorHandler,
        })
      )
      .pipe($.if(argv.debug, $.debug()))
      .pipe(
        $.pug({
          pretty: argv.minifyHtml ? false : "\t",
        })
      )
      .pipe($.dest(path[isDev ? "dev" : "dist"]));
  }

  return new Promise((resolve, reject) => {
    emittyPug.scan(global.emittyPugChangedFile).then(() => {
      $.gulp
        .src(path.pug.src)
        .pipe(
          $.plumber({
            errorHandler,
          })
        )
        .pipe(emittyPug.filter(global.emittyPugChangedFile))
        .pipe($.if(argv.debug, $.debug()))
        .pipe(
          $.pug({
            pretty: argv.minifyHtml ? false : "\t",
          })
        )
        .pipe($.dest(path.pug[isDev ? "dev" : "dist"]))
        .on("end", resolve)
        .on("error", reject);
    });
  });
};

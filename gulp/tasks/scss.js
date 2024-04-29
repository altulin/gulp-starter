import * as $ from "../plugins.js";
import argv from "../argv.js";
import errorHandler from "../error.js";
import path from "../paths.js";

export const scss = () => {
  const isDev = $.mode().development();

  const postcssPlugins = [
    $.autoprefixer({
      grid: "autoplace",
    }),
    $.sortMediaQueries({
      sort: "desktop-first",
    }),
  ];

  if (!isDev) {
    postcssPlugins.push($.cssPrettify());
  }

  if (argv.minifyCss) {
    postcssPlugins.push(
      $.cssnano({
        preset: [
          "default",
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      })
    );
  }

  return $.gulp
    .src(["_src/scss/*.scss", "!_src/scss/_*.scss"])
    .pipe(
      $.plumber({
        errorHandler,
      })
    )
    .pipe($.if(argv.debug, $.debug()))
    .pipe($.sourcemaps.init())
    .pipe($.sass().on("error", $.sass.logError))
    .pipe($.postcss(postcssPlugins))
    .pipe($.if(isDev, $.sourcemaps.write(".")))
    .pipe($.dest(path.style[isDev ? "dev" : "dist"]));
};

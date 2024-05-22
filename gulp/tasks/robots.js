import paths from "../paths.js";
import * as $ from "../plugins.js";

export const robots = () => {
  const isTest = $.mode.test();
  const isDev = $.mode.development();

  const SRC = `.robots.${isTest ? "development" : "production"}.txt`;
  const DESTINATION = paths[isDev ? "dev" : "dist"];

  return $.gulp.src(SRC).pipe($.rename("robots.txt")).pipe($.dest(DESTINATION));
};

import * as $ from "../plugins.js";
import { makePlumber } from "../error.js";
import getConfig from "../../webpack.config.js";
import argv from "../argv.js";

export const js = () => {
  const config = getConfig();
  const {
    entry,
    output: { filename, path },
  } = config;

  return $.gulp
    .src(entry)
    .pipe(makePlumber("script"))
    .pipe($.if(argv.debug, $.debug()))
    .pipe($.webpackStream(config))
    .pipe($.rename(filename))
    .pipe($.dest(path));
};

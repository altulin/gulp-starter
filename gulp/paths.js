const SRC = "_src";
const dist = "build";
const dev = "dev";

export default {
  style: {
    src: `${SRC}/scss/**/*.scss`,
    dist: `${dist}`,
    dev: `${dev}`,
  },
  html: {
    src: `${SRC}/**/*.html`,
    dist: `${dist}`,
    dev: `${dev}`,
  },
  js: {
    src: `${SRC}/js/**/*.js`,
    dist: `${dist}/js`,
    dev: `${dev}/js`,
  },
  pug: {
    src: `${SRC}/pug/pages/*.pug`,
    dist: `${dist}`,
    dev: `${dev}`,
  },

  dev,
  dist,
};

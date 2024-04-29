const SRC = "_src";
const DIST = "build";
const DEV = "dev";

export default {
  style: {
    src: `${SRC}/scss/**/*.scss`,
    dist: `${DIST}/`,
    dev: `${DEV}/`,
  },
  html: {
    src: `${SRC}/**/*.html`,
    dist: `${DIST}`,
    dev: `${DEV}`,
  },
  js: {
    src: `${SRC}/js/**/*.js`,
    dist: `${DIST}/js`,
    dev: `${DEV}/js`,
  },
};

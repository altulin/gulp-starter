const SRC = "./_src";
const dist = "./build";
const dev = "./dev";

export default {
  scss: {
    src: `${SRC}/scss/**/*.scss`,
    dist: `${dist}/css`,
    dev: `${dev}/css`,
  },
  html: {
    src: `${SRC}/**/*.html`,
    dist: `${dist}`,
    dev: `${dev}`,
  },
  js: {
    src: `${SRC}/js`,
    dist: `${dist}/js`,
    dev: `${dev}/js`,
  },
  pug: {
    src: `${SRC}/pug`,
    dist: `${dist}`,
    dev: `${dev}`,
  },
  fonts: {
    src: `${SRC}/fonts`,
    dist: `${dist}`,
    dev: `${dev}`,
  },
  raster: {
    src: `${SRC}/img/raster`,
    dist: `${dist}/img`,
    dev: `${dev}/img`,
  },
  webp: {
    src: `${SRC}/img/webp`,
    dist: `${dist}/img`,
    dev: `${dev}/img`,
  },
  sprite: {
    src: `${SRC}/img/sprite`,
    dist: `${dist}/img`,
    dev: `${dev}/img`,
  },
  svg: {
    src: `${SRC}/img/svg`,
    dist: `${dist}/img`,
    dev: `${dev}/img`,
  },

  dev,
  dist,
};

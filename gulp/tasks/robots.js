import argv from "../argv.js";

export const robots = () => {
  return !argv.robots ? del(["./build/robots.txt"]) : Promise.resolve();
};

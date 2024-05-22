import * as $ from "../plugins.js";

export const cleanBuild = () => {
  return $.deleteAsync(["./build"]);
};

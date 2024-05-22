import * as $ from "../plugins.js";

export const cleanDev = () => {
  return $.deleteAsync(["./dev"]);
};

import * as $ from "./plugins.js";
import argv from "./argv.js";

const errorHandler = () => {
  let errorHandler;

  if (argv.throwErrors) {
    errorHandler = false;
  } else if (argv.notify) {
    errorHandler = $.notify.onError("<%= error.message %>");
  } else {
    errorHandler = null;
  }

  return errorHandler;
};

export default errorHandler;

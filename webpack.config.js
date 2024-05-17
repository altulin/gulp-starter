import TerserPlugin from "terser-webpack-plugin";
import paths from "./gulp/paths.js";
import argv from "./gulp/argv.js";
import * as $ from "./gulp/plugins.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const getConfig = () => {
  const isDev = $.mode.development();
  const __dirname = dirname(fileURLToPath(import.meta.url));

  return {
    entry: `./${paths.js.src}/main.js`,
    output: {
      filename: "script.js",
      path: path.resolve(__dirname, paths.js[isDev ? "dev" : "dist"]),
    },
    mode: "production",
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              beautify: !argv.minifyJs,
              indent_level: 2,
              max_line_len: 120,
            },
          },
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
        },
      ],
    },
  };
};

export default getConfig;

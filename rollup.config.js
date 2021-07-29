import { babel } from "@rollup/plugin-babel";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import styles from "rollup-plugin-styles";
import image from "rollup-plugin-img";

export default {
  input: "./src/index.js",
  output: {
    file: "./build/bundle.js",
    format: "cjs",
  },
  plugins: [
    babel({ babelHelpers: "bundled" }),
    serve("./"),
    livereload(),
    styles(),
    image({
      limit: 100000,
    }),
  ],
};

import typescript from "rollup-plugin-typescript2";
// @ts-ignore
import cjs from "@rollup/plugin-commonjs";

export default {
  input: "packages/project1/index.ts",
  output: {
    name: "index.js",
    file: "dist/index.js",
    format: "umd",
    plugins: [cjs(), typescript({})],
  },
};

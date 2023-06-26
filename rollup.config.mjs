import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "bundle.cjs",
    format: "cjs",
  },
  plugins: [typescript()],
};

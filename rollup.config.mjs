import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "out/bundle.cjs",
    format: "cjs",
  },
  plugins: [typescript()],
};

import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  external: ["pellicola"],
  output: {
    file: "out/bundle.cjs",
    format: "cjs",
  },
  plugins: [
    typescript({
      tsconfig: false,
      target: "ES2020",
      module: "ESNext",
      lib: ["ES2021", "DOM", "DOM.Iterable"],
      allowSyntheticDefaultImports: true,
    }),
  ],
};

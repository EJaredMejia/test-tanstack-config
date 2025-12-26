import { defineConfig, mergeConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackViteConfig } from "@tanstack/vite-config";

// https://vite.dev/config/
const config = defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
});

export default mergeConfig(
  config,
  tanstackViteConfig({
    entry: "./src/index.ts",
    srcDir: "./src",
  })
);

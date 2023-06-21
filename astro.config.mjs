import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  srcDir: "./examples",
  integrations: [tailwind()],
});

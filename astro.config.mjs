import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  srcDir: "./example/src",
  integrations: [tailwind()],
});

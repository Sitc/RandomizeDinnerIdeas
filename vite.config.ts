import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // Set '@' to point to the 'src' directory
    },
  },
  base: "./", // Set the packing path
  server: {
    port: 4000,
    open: true, // The browser opens automatically when the service starts
    cors: true, // Allow cross-origin resource sharing
  },
});

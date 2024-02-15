import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@templates": path.resolve(__dirname, "./src/templates"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@definitions": path.resolve(__dirname, "./src/definitions"),
      "@navigation": path.resolve(__dirname, "./src/navigation"),
      "@providers": path.resolve(__dirname, "./src/providers"),
      "@generated": path.resolve(__dirname, "./src/generated"),
    },
  },
  plugins: [react()],
});

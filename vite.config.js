import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(() => {
  return {
    plugins: [react()],
    build: {
      outDir: "dist",
      assetsDir: "assets",
    },
  };
});

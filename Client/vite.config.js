import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  console.log("Vite Mode:", mode);
  return {
    plugins: [react()],
    base: "/Client",
    build: {
      outDir: "dist",
      assetsDir: "assets",
    },
  };
});

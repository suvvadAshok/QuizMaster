import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  console.log("Vite Mode:", mode); // Check if mode is correctly detected
  return {
    plugins: [react()],
    base: mode === "production" ? "/Client" : "/Client/",
    build: {
      outDir: "dist",
      assetsDir: "assets",
    },
  };
});

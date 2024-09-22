import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  // Load environment variables based on the mode (development or production)
  const env = loadEnv(mode, process.cwd());

  // Use the VITE_BASE_PATH or fallback to "/Client/"
  const basePath = env.VITE_BASE_PATH || "/Client/";

  console.log("Base Path:", basePath); // Check what base path is being set

  return {
    plugins: [react()],
    base: basePath,
    build: {
      outDir: "dist",
      assetsDir: "assets",
    },
  };
});

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  // Load environment variables based on the mode (development or production)
  const env = loadEnv(mode, process.cwd());
  
  const basePath = env.VITE_BASE_PATH || "/Client/dist/";

  console.log("Base Path:", basePath); // Check what base path is being set

  return {
    plugins: [react()],
    base: basePath, 
    publicDir: "public",
    build: {
      outDir: "dist",
      assetsDir: "assets",
    },
  };
});
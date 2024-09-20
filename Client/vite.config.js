import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Set base URL based on environment
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  base: mode === "production" ? "/" : "/Client/", // Use '/' for production (AWS Amplify), '/Client/' for local development
}));

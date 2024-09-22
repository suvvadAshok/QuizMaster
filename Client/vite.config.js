import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  console.log("Vite Mode:", mode);
  const basePath = mode === "production" ? "/Client/" : "/";

  console.log("Vite Mode:", mode, "Base Path:", basePath);

  return {
    plugins: [react()],
    base: basePath,
    build: {
      outDir: "dist",
      assetsDir: "assets",
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name]-[hash][extname]",
        },
      },
    },
  };
});

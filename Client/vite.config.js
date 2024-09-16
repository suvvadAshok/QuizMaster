import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/Client/", // This is correct if your GitHub Pages repo is 'Client'
});

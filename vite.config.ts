import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isProjectPage =
  process.env.GITHUB_ACTIONS === "true" &&
  repositoryName !== undefined &&
  !repositoryName.toLowerCase().endsWith(".github.io");

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: isProjectPage ? `/${repositoryName}/` : "/",
});

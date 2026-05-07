import pkg from "eslint-config-next";
const { defineConfig } = pkg;

export default defineConfig({
  extends: ["next/core-web-vitals", "next/typescript"],
});

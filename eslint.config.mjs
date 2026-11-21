import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  globalIgnores([
    ".next/**",
    "node_modules/**",
    ".agents/**",
    "public/assets/**",
    "next-env.d.ts",
    "out/**",
    "build/**",
  ]),
]);

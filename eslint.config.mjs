import eslint from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "**/out/**",
      "**/dist/**",
      "**/node_modules/**",
      "**/.next/**",
      "**/.contentlayer/**",
      "**/next-env.d.ts",
    ],
  },
  {
    files: ["**/*.{js,jsx,mjs,ts,tsx,mts,d.ts}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      prettierConfig,
    ],
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs["core-web-vitals"].rules,
      "no-console": "error",
      "no-debugger": "error",
      "no-fallthrough": "off",
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"],
        },
        { blankLine: "any", prev: ["case", "default"], next: "break" },
        { blankLine: "any", prev: "case", next: "case" },
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: "block", next: "*" },
        { blankLine: "always", prev: "*", next: "block" },
        { blankLine: "always", prev: "block-like", next: "*" },
        { blankLine: "always", prev: "*", next: "block-like" },
        {
          blankLine: "always",
          prev: ["import"],
          next: ["const", "let", "var", "export"],
        },
        { blankLine: "always", prev: "if", next: "*" },
      ],
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },
);

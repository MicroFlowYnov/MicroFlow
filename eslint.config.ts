import parser from "@typescript-eslint/parser"
import js from "@eslint/js";
import type { Linter } from "eslint";
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: [
      'src/**/*.ts'
    ],
    rules: {
      // Add rules
    },
    languageOptions: {
      parser: parser,
      globals: {
        ...globals.browser
      }
    }
  },
] satisfies Linter.Config[];

import globals from "globals";
import pluginJs from "@eslint/js";
import pluginPrettier from "eslint-plugin-prettier/recommended";
export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  pluginPrettier,
  {
    rules: {
      quotes: [2, "double"],
      semi: [2, "always"],
      "no-underscore-dangle": 0,
      "import/prefer-default-export": 0,
      "no-console": 0,
      "prettier/prettier": [
        2,
        {
          semi: true,
          tabWidth: 2,
          printWidth: 80,
          endOfLine: "auto",
          singleAttributePerLine: true,
          singleQuote: false,
          trailingComma: "all",
        },
      ],
    },
    ignores: [".gitignore", "node_modules"],
  },
];

// export default [
//   { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
//   pluginJs.configs.recommended,
//   plugginPrettier.recommended,
//   {
//     settings: {
//       "import/resolver": {
//         node: {
//           paths: ["src"],
//           extensions: [".js", ".jsx", ".ts", ".tsx"],
//         },
//         alias: {
//           map: [["@", "./src"]],
//           extensions: [".js", ".jsx", ".ts", ".tsx"],
//         },
//       },
//     },
//     overrides: [
//       {
//         files: ["*.js", "*.cjs", "*.mjs", "*.jsx"],
//       },
//     ],
//     parserOptions: {
//       ecmaVersion: "latest",
//       sourceType: "module",
//     },
//     plugins: ["import", "prettier"],
//     rules: {
//       quotes: [2, "double"],
//       semi: [2, "always"],
//       "no-underscore-dangle": 0,
//       "import/prefer-default-export": 0,
//       "no-console": 0,
//       "prettier/prettier": [
//         2,
//         {
//           semi: true,
//           tabWidth: 2,
//           printWidth: 80,
//           endOfLine: "auto",
//           singleAttributePerLine: true,
//           singleQuote: false,
//           trailingComma: "all",
//         },
//       ],
//     },
//   },
// ];

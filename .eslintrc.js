module.exports = {
  root: true,
  ignorePatterns: ['build'],
  extends: ['@antfu'],
  rules: {
    'no-console': 'off',
  },
}
// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     node: true,
//     es2021: true,
//   },
//   extends: [
//     "plugin:vue/vue3-strongly-recommended",
//     "@vue/eslint-config-typescript",
//     "@vue/eslint-config-prettier",
//   ],
//   parserOptions: {
//     ecmaVersion: 13,
//     parser: "@typescript-eslint/parser",
//     sourceType: "module",
//     jsxPragma: "React",
//     ecmaFeatures: {
//       jsx: true,
//       tsx: true,
//     },
//   },
//   rules: {
//     "@typescript-eslint/no-non-null-assertion": "off",
//     "vue/multi-word-component-names": "off",
//   },
// };

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // don't allow console logs (Faraj asked for it)
    "no-console": "on",

    indent: ["error", 2], //this only allow up to 2 spaces
    "no-var": ["error", 2], //this doesn't allow using Var only Let or constant are allowed 
  },
};

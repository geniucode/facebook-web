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
    "indent": ["error", 2], //this only allow up to 2 spaces
    "no-var": ["error", 2], //this doesn't allow using Var only Let or constant are allowed
    "comma-style": ["error", "last"], //adding comma is always direct after sentence and not on the start
    "max-len": [
      //line maximum lenght rules
      "error",
      {
        code: 60,
        tabWidth: 2,
        ignoreComments: true, //"comments": 80
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
};

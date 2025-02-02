module.exports = {
  root: true,
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "airbnb-typescript",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["simple-import-sort"],
  rules: {
    "prettier/prettier": ["warn", { endOfLine: "auto" }],
    "react/require-default-props": "off",
    "react/no-array-index-key": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "simple-import-sort/imports": 1,
    "simple-import-sort/exports": 1,
  },
};

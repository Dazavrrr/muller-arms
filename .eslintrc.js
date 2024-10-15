module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  ignorePatterns: ["next.config.js", './src/__generated__/*', './src/generated/*', 'graphql.ts', 'fragment-masking.ts', 'gql.ts'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  plugins: ["react"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "no-console": "warn",
    "no-console": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "react-hooks/exhaustive-deps": "off",
    "dot-notation": "error",
    "no-else-return": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "no-floating-decimal": "error",
    "no-sequences": "error",
    // Stylistic
    "array-bracket-spacing": "error",
    "computed-property-spacing": ["error", "never"],

    "curly": "off",
    "no-lonely-if": "error",
    "no-unneeded-ternary": "error",
    "one-var-declaration-per-line": "error",
    "react/react-in-jsx-scope": "off",

    "import/prefer-default-export": "error",
  }
}

// Interesting to read
// https://blog.logrocket.com/troubleshooting-next-js-app-eslint/

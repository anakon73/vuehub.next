module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '@antfu',
    './.eslintrc-auto-import.json',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
  },
}

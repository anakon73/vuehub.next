module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '@antfu',
    'plugin:tailwindcss/recommended',
    './.eslintrc-auto-import.json',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.vue'],
      parser: '@typescript-eslint/parser',
    },
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

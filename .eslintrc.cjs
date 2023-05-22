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
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['tailwindcss', 'react'],
  rules: {
    'curly': 'off',
    'arrow-parens': ['error', 'always'],
    'max-len': ['error', { ignoreStrings: true }],
    'operator-linebreak': 'off',
    'import/order': [
      'warn',
      { groups: ['builtin', 'external'], warnOnUnassignedImports: true },
    ],

    // typescript-eslint
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',

    // eslint-plugin-vue
    'vue/component-name-in-template-casing': [
      'warn',
      'PascalCase',
      { registeredComponentsOnly: false },
    ],
    'vue/block-lang': ['error', { script: { lang: 'ts' } }],
    'vue/component-api-style': ['error', ['script-setup', 'composition']],
    // while there are no support of vue-macros
    'vue/no-duplicate-attr-inheritance': 'off',
    'vue/no-restricted-call-after-await': 'error',
    'vue/multi-word-component-names': ['error'],
    'vue/no-ref-object-destructure': ['error'],
    'vue/no-undef-components': ['error', {
      ignorePatterns: [
        '(F|H)[A-Z]+',
        'RouterLink',
        'GetProps',
        'SafeTeleport',
        'TeleportTarget',
        'HasPermission',
      ],
    }],
    'vue/define-macros-order': 'off',
    'vue/define-props-declaration': ['error'],
    'vue/define-emits-declaration': ['error'],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/operator-linebreak': 'off',

    // eslint-plugin-react
    'react/jsx-boolean-value': 'error',
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-spacing': 'error',
    'react/jsx-curly-newline': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': 'error',
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': 'error',
    'react/jsx-newline': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-leaked-render': 'error',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': ['error', { allow: 'literal' }],
    'react/jsx-no-undef': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-fragments': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-sort-default-props': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-tag-spacing': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'error',

    // @antfu
    'antfu/if-newline': 'off',
  },
}

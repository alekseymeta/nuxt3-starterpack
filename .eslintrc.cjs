module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@nuxtjs/eslint-config-typescript' ],
  plugins: [],
  rules: {
    // Common
    semi: [2, 'always'],
    indent: ['error', 4],
    'comma-dangle': ['error', {
      objects: 'always-multiline',
      arrays: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
    }],
    'no-unused-vars': 0,
    curly: 0,
    'space-before-function-paren': 0,
    'brace-style': ['error', 'stroustrup'],

    // Import
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/named': 0,

    // TS
    '@typescript-eslint/no-this-alias': [
      'error', {
        allowedNames: ['that'],
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/ban-types': [
      'error', {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'comma',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],

    // Vue
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
  },
}

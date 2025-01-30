import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    '@react-native-community',
    'airbnb-typescript'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    'react-native',
    'jsx-a11y',
    'import',
    '@typescript-eslint'
  ],
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': [0],
    'react/require-default-props': [0],
    'import/no-extraneous-dependencies': [0],
    'import/no-unresolved': [2, { ignore: ['^react(-native)?$'] }],
    'import/extensions': [2, { js: 'never', json: 'always' }],
    'arrow-parens': ['error', 'as-needed'],
    '@typescript-eslint/no-unused-vars': ['error', {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      ignoreRestSiblings: true
    }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
});

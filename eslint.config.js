const js = require('@eslint/js');
const react = require('eslint-plugin-react');
const reactNative = require('eslint-plugin-react-native');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const importPlugin = require('eslint-plugin-import');
const babelParser = require('@babel/eslint-parser');

module.exports = [
  {
    files: ['*.js', '*.jsx'],
    ignores: ['node_modules/**'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }, // Habilita JSX
        babelOptions: {
          presets: ['module:metro-react-native-babel-preset'], // Usa o preset do React Native
        },
      },
    },
    plugins: {
      react,
      'react-native': reactNative,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      // Regras customizadas
      'react/jsx-filename-extension': [1, { extensions: ['.jsx'] }],
      'react/forbid-prop-types': 'off',
      'react/require-default-props': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-unresolved': [2, { ignore: ['^react(-native)?$'] }],
      'import/extensions': ['error', 'never', { json: 'always' }],
      'arrow-parens': ['error', 'as-needed'],
    },
    settings: {
      react: { version: 'detect' },
    },
  },
];

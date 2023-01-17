module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['react-app', 'plugin:react/recommended', 'airbnb', 'prettier', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    namedComponents: 0,
    'no-useless-escape': 'off',
    'no-script-url': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'spaced-comment': 0,
    'no-template-curly-in-string': 'off',
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};

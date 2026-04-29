module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'google',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {jsx: true},
  },
  settings: {
    react: {version: 'detect'},
  },
  rules: {
    'max-len': ['warn', {code: 80, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true}],
    'require-jsdoc': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['warn', {extensions: ['.js', '.jsx']}],
  },
};

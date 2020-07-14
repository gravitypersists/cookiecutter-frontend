module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'airbnb-typescript',
    'prettier',
  ],
  rules: {
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    'react/prop-types': [0]
  }
};
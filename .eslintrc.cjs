module.exports = {
  extends: ['standard', 'plugin:astro/recommended'],
  rules: {
    'space-before-function-paren': 'off'
  },
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser'
    }
  ],
  parserOptions: {
    extraFileExtensions: ['.astro']
  }
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'no-console': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0
  }
}

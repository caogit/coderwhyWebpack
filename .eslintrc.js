/*
 * @Description: 😎在这里写你的描述
 * @Autor: 曹老板
 * @Date: 2022-04-08 10:09:50
 * @LastEditTime: 2022-04-08 10:38:12
 */
module.exports = {
	parserOptions: { ecmaVersion: 2017, sourceType: 'module' },
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['prettier'],
	rules: { 'prettier/prettier': ['warn'] },
	env: { browser: true, node: true, mocha: false, jest: false },
}

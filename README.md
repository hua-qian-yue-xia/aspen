代码格式化配置
=
eslint配置
-

``` js
module.exports = {
	ignorePatterns: [
		"node_modules",
		"dist",
		"test",
		"jest.config.js",
		"typings",
		".eslintrc.js"
	],
	env: {
		browser: true,
		es2021: true,
		jest: true
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"./node_modules/mwts/"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module"
	},
	plugins: ["@typescript-eslint"],
	rules: {
		// 使用制表符进行缩进
		indent: ["error", "tab"],
		// 使用 Unix 风格的行结束
		"linebreak-style": ["error", "unix"],
		// 使用双引号
		quotes: ["error", "double"],
		// 不使用分号
		semi: ["error", "never"],
		// 当最后一个元素或属性在与结尾的 ] 或 } 不同行时，要求使用尾随逗号；当最后一个元素或属性与结尾的 ] 或 }在同一行时，不允许使用尾随逗号
		"comma-dangle": ["error", "always-multiline"],
		// 未使用的变量要使用_开头
		"no-unused-vars": ["error", {
			"vars": "all",
			"args": "after-used",
			"ignoreRestSiblings": false,
			"argsIgnorePattern": "^_"
		}],
		// 未使用的变量要使用_开头
		"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }]
	}
}
```

prettierrc配置
-

``` js
module.exports = {
  ...require("mwts/.prettierrc.json"),
  // 制表符宽度（用于可读性）
  "tabWidth": 2,
  // 使用制表符进行缩进
  "useTabs": true,
  // 在多行数组和对象的最后一项后添加尾逗号
  "trailingComma": "all",
  // 不使用分号
  "semi": false,
  // 使用双引号
  "singleQuote": false
}

```

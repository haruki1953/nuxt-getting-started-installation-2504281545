// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default withNuxt([
  {
    plugins: {
      unicorn: eslintPluginUnicorn,
      prettier: eslintPluginPrettier
    },
    rules: {
      // Standard 风格核心部分
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      // 'comma-dangle': ['error', 'always-multiline'],
      'space-before-function-paren': ['error', 'always'],
      // 'no-unused-vars': 'warn',
      'no-console': 'warn',
      // 'no-debugger': 'error',

      // 更严格的ESLint
      // 强制使用 ===，但允许 == null（这是一个约定俗成的例外）
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      // 不允许使用隐式类型转换，比如 !!foo、+foo
      'no-implicit-coercion': 'error',
      // 禁止不必要的布尔转换，比如 if (!!foo)
      'no-extra-boolean-cast': 'error',
      // 禁用 alert、confirm、prompt（在生产代码中一般不建议使用）
      'no-alert': 'warn',
      // 禁用未使用的变量（默认已启用）
      // 'no-unused-vars': [
      //   'warn',
      //   { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      // ],
      // 禁止 debugger，避免调试代码遗留
      'no-debugger': 'error',
      // 禁用 with（严格模式中已废弃）
      'no-with': 'error',
      // 禁止使用 arguments.callee 和 arguments.caller（已过时）
      'no-caller': 'error',
      // 禁止将 await 写在非 async 函数中
      'no-return-await': 'error',
      // 禁止混用 tabs 和 spaces（Prettier 会处理，但冗余提示也可以启用）
      'no-mixed-spaces-and-tabs': 'error',
      // 禁止 eval（安全问题）
      'no-eval': 'error',
      // 强制函数参数有明确顺序（如默认参数不能在非默认之后）
      'default-param-last': 'error',
      // 禁止 function 声明出现在嵌套块中（避免提升问题）
      'no-inner-declarations': ['error', 'functions'],

      // 自己习惯的配置
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true, // 单引号
          semi: false, // 无分号
          printWidth: 80, // 每行宽度至多80字符
          trailingComma: 'none', // 不加对象|数组最后逗号
          endOfLine: 'auto' // 换行符号不限制（win mac 不一致）
        }
      ],
      'vue/multi-word-component-names': [
        'warn',
        {
          ignores: ['index'] // vue组件名称多单词组成（忽略index.vue）
        }
      ],
      'vue/no-setup-props-destructure': ['off'], // 关闭 props 解构的校验
      // 未定义变量错误提示
      // 'no-undef': 'error',

      // Nuxt/Vue 常见优化
      'vue/no-v-html': 'off',
      // 组件参数不用连字符命名，用小驼峰命名
      'vue/attribute-hyphenation': ['warn', 'never']
    }
  }
])

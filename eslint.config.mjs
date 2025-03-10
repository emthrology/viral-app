// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // your custom flat configs go here, for example:
  {
    files: ['**/*.ts', '**/*.js', '**/*.vue'],
    rules: {
      // 'no-console': 'off', // allow console.log in TypeScript files
      'vue/no-multiple-template-root': 'off',
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: false,
          ignores: [],
        },
      ],
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
          },
        },
      ],
      'no-console': ['warn'],
      // "prettier/prettier": [
      //   "error",
      //   {
      //     singleQuote: true,
      //     semi: true,
      //     tabWidth: 2,
      //     trailingComma: "all",
      //     printWidth: 80,
      //     bracketSpacing: true,
      //     arrowParens: "avoid",
      //   },
      // ],
    },

  },

)

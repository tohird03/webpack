/* eslint-disable @typescript-eslint/naming-convention */

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-perf/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  settings: {
    react: {
      version: '16.14',
    },
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'import',
    'react',
    'react-hooks',
    '@typescript-eslint',
    'react-perf',
    'simple-import-sort',
  ],
  ignorePatterns: [
    'build/*',
    'public/*',
    'src/assets/*',
  ],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', {'ignoreRestSiblings': true}],
    '@typescript-eslint/brace-style': [
      'error',
    ],
    '@typescript-eslint/comma-dangle': [
      'error',
      {
        imports: 'always-multiline',
        objects: 'always-multiline',
        enums: 'always-multiline',
        arrays: 'always-multiline',
        functions: 'never',
        generics: 'ignore',
      },
    ],
    '@typescript-eslint/comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    '@typescript-eslint/consistent-indexed-object-style': [
      'error',
      'record',
    ],
    '@typescript-eslint/default-param-last': [
      'error',
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/keyword-spacing': 'error',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      {
        exceptAfterSingleLine: true,
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/method-signature-style': [
      'error',
      'property',
    ],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'default',
        format: [
          'camelCase',
          'UPPER_CASE',
          'PascalCase',
        ],
      },
      {
        selector: 'variable',
        format: [
          'camelCase',
          'UPPER_CASE',
          'PascalCase',
        ],
      },
      {
        selector: 'typeLike',
        format: [
          'PascalCase',
        ],
      },
      {
        selector: 'classProperty',
        format: [
          'camelCase',
        ],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'objectLiteralProperty',
        format: null,
      },
      {
        selector: 'typeProperty',
        format: null,
      },
      {
        selector: 'enumMember',
        format: [
          'PascalCase',
        ],
      },
    ],
    '@typescript-eslint/no-dupe-class-members': [
      'error',
    ],
    '@typescript-eslint/no-duplicate-imports': [
      'error',
    ],
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-loop-func': [
      'error',
    ],
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-redeclare': [
      'error',
    ],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/object-curly-spacing': [
      'warn',
    ],
    '@typescript-eslint/quotes': [
      'error',
      'single',
    ],
    '@typescript-eslint/semi': [
      'error',
      'always',
    ],
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    'array-bracket-newline': [
      'error',
      'consistent',
    ],
    'array-element-newline': [
      'error',
      'consistent',
    ],
    'arrow-body-style': 'error',
    'arrow-parens': [
      'off',
      'always',
    ],
    'arrow-spacing': 'error',
    'brace-style': 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'computed-property-spacing': [
      'error',
      'never',
    ],
    // не очень хорошо, но ладно
    'consistent-return': 'off',
    'constructor-super': 'error',
    'default-case-last': 'error',
    'default-param-last': 'off',
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': [
      'error',
      'smart',
    ],
    'function-call-argument-newline': [
      'error',
      'consistent',
    ],
    'function-paren-newline': [
      'error',
      'consistent',
    ],
    'id-blacklist': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-unresolved': 'off',
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        ObjectExpression: 'first',
        FunctionDeclaration: {
          parameters: 'first',
        },
        FunctionExpression: {
          parameters: 'first',
        },
      },
    ],
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'key-spacing': 'error',
    'keyword-spacing': 'off',
    'lines-between-class-members': 'off',
    'max-classes-per-file': [
      'warn',
      2,
    ],
    'max-depth': 'error',
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'max-params': [
      'error',
      5,
    ],
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 4,
      },
    ],
    'no-await-in-loop': 'error',
    'no-cond-assign': 'error',
    'no-console': ['warn', {allow: ['warn', 'error', 'info', 'table']}],
    'no-constructor-return': 'warn',
    'no-debugger': 'warn',
    'no-dupe-class-members': 'off',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'off',
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    'no-empty-function': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-global-assign': 'error',
    'no-irregular-whitespace': 'error',
    'no-loop-func': 'off',
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
      },
    ],
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-prototype-builtins': 'off',
    'no-redeclare': 'off',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-expressions': 'off',
    'no-useless-return': 'error',
    'no-var': 'error',
    'object-curly-spacing': 'off',
    'object-shorthand': 'error',
    'one-var': [
      'error',
      'never',
    ],
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '&&': 'ignore',
          '||': 'ignore',
          '-': 'before',
          '+': 'before',
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: [
          'case',
          'default',
        ],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: [
          'const',
          'let',
          'var',
        ],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: [
          'const',
          'let',
          'var',
        ],
        next: [
          'const',
          'let',
          'var',
        ],
      },
    ],
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'prefer-template': 'error',
    'quotes': 'off',
    'radix': 'error',
    'react-perf/jsx-no-new-object-as-prop': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-boolean-value': [
      'error',
      'never',
    ],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'never',
      },
    ],
    'react/jsx-equals-spacing': [
      'error',
      'never',
    ],
    'react/jsx-first-prop-new-line': [
      'error',
      'multiline',
    ],
    'react/jsx-fragments': [
      'error',
      'syntax',
    ],
    'react/jsx-key': 'error',
    'react/jsx-no-bind': 'off',
    'react/jsx-tag-spacing': [
      'error',
      {
        afterOpening: 'allow',
        closingSlash: 'allow',
      },
    ],
    'react/jsx-wrap-multilines': 'error',
    'react/no-array-index-key': 'warn',
    'react/prop-types': 'off',
    'react/self-closing-comp': 'error',
    'react/state-in-constructor': [
      'error',
      'never',
    ],
    'react-perf/jsx-no-new-function-as-prop': 'off',
    'react-perf/jsx-no-new-array-as-prop': 'off',
    'require-atomic-updates': 'warn',
    'require-await': 'off',
    'semi': 'off',
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'simple-import-sort/imports': ['warn', {
      groups: [
        [
          '^\\u0000',
        ],
        [
          '^react',
          '^mobx',
          '^@mui',
          '^@\\w',
          '^@?\\w',
          '^',
          '^\\.',
        ],
        [
          '^.+\\./styles.tsx$',
        ],
      ],
    }],
    'simple-import-sort/exports': 'error',
    'space-before-function-paren': 'off',
    'space-in-parens': [
      'error',
      'never',
    ],
    'use-isnan': 'error',
  },
};

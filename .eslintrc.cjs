module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
  ],
  plugins: ['react-refresh', 'jsx-a11y', 'prettier', 'deprecation', 'sonarjs'],
  env: { browser: true, es2020: true },
  ignorePatterns: ['dist', 'public', '.eslintrc.cjs', '_variations/', 'vite.*', 'vitest.*', 'tailwind.*'],
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    project: ['tsconfig.src.json'],
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react-hooks/rules-of-hooks': 'error',
    'no-console': ['error', { allow: ['error'] }],
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    '@typescript-eslint/default-param-last': 'error',
    'jsx-a11y/label-has-associated-control': 'error',
    'max-len': [
      'error',
      {
        code: 140,
        ignorePattern: '^import\\W.*',
      },
    ],
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/self-closing-comp': 'error',
    'react/jsx-fragments': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'deprecation/deprecation': 'warn',
  },

  overrides: [
    {
      files: ['**/**/*.test.{ts,tsx}'],
      extends: ['plugin:testing-library/react'],
      parser: '@typescript-eslint/parser',
      rules: {
        'testing-library/no-node-access': 'off',
      },
      parserOptions: {
        project: ['tsconfig.test.json'],
        tsconfigRootDir: __dirname,
      },
    },
    {
      files: ['testing/**/**/*.{ts,tsx}', 'vite.config.ts', 'vitest.config.ts'],
      parserOptions: {
        project: ['tsconfig.node.json'],
        tsconfigRootDir: __dirname,
      },
    },
  ],
};

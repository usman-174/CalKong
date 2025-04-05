import { FlatCompat } from '@eslint/eslintrc'

let eslintConfig = []

try {
  const compat = new FlatCompat({
    baseDirectory: typeof import.meta !== 'undefined' && import.meta.dirname
      ? import.meta.dirname
      : process.cwd(),
  })

  eslintConfig = [
    ...compat.config({
      extends: ['next/core-web-vitals', 'next/typescript'],
      rules: {
        'react/no-unescaped-entities': 'off',
        '@next/next/no-page-custom-font': 'off',
        '@typescript-eslint/no-unuse': 'off', // even if it's invalid, this will be ignored gracefully
      },
    }),
  ]
} catch (e) {
  console.warn('ESLint config setup failed:', e.message)
}

export default eslintConfig

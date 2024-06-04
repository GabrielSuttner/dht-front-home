/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue', '.ts', '.d.ts']
      },
      alias: {
        extensions: ['.vue', '.js', '.ts', '.scss', '.d.ts'],
        map: [
          ['@', 'D:/sites/e-front-admin/src'],
          ['@assets', 'D:/sites/e-front-admin/src/assets'],
          ['@stores', 'D:/sites/e-front-admin/src/stores'],
          ['@shared', 'D:/sites/e-front-admin/src/components/shared'],
          ['@customTypes', 'D:/sites/e-front-admin/ts-types/types'],
          ['@interfaces', 'D:/sites/e-front-admin/ts-types/interfaces'],
          ['@customEnums', 'D:/sites/e-front-admin/ts-types/customEnums']
        ]
      }
    }
  }
};

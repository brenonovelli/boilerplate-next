import type { StorybookConfig } from '@storybook/react/types';

module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  babel: async (options) => ({
    ...options,
    plugins: [...options.plugins]
  }),
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
} as StorybookConfig;

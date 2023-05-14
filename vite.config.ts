import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const path = require(`path`);
const rootDir = path.resolve(__dirname, `src`);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: `@emotion/react`,
      babel: {
        plugins: [`@emotion/babel-plugin`],
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: `@apis`,
        replacement: path.resolve(rootDir, `apis`),
      },
      {
        find: `@assets`,
        replacement: path.resolve(rootDir, `assets`),
      },
      {
        find: `@components`,
        replacement: path.resolve(rootDir, `components`),
      },
      {
        find: `@locales`,
        replacement: path.resolve(rootDir, `locales`),
      },
      {
        find: `@models`,
        replacement: path.resolve(rootDir, `models`),
      },
      {
        find: `@pages`,
        replacement: path.resolve(rootDir, `pages`),
      },
      {
        find: `@routes`,
        replacement: path.resolve(rootDir, `routes`),
      },
      {
        find: `@services`,
        replacement: path.resolve(rootDir, `services`),
      },
      {
        find: `@styles`,
        replacement: path.resolve(rootDir, `styles`),
      },
      {
        find: `@utils`,
        replacement: path.resolve(rootDir, `utils`),
      },
    ],
  },
});

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
  server: {
    proxy: {
      '/api': {
        target: `http://api.dotols.com`,
        changeOrigin: true,
        rewrite: endpoint => endpoint.replace(/^\/api/, ``),
      },
    },
  },
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
        find: `@constants`,
        replacement: path.resolve(rootDir, `constants`),
      },
      {
        find: `@components`,
        replacement: path.resolve(rootDir, `components`),
      },
      {
        find: `@data`,
        replacement: path.resolve(rootDir, `data`),
      },
      {
        find: `@interfaces`,
        replacement: path.resolve(rootDir, `interfaces`),
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
        find: `@states`,
        replacement: path.resolve(rootDir, `states`),
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

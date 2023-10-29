import * as path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const folderNames = [
  `apis`,
  `assets`,
  `components`,
  `constants`,
  `data`,
  `hooks`,
  `interfaces`,
  `locales`,
  `pages`,
  `routes`,
  `states`,
  `styles`,
  `utils`,
];

const aliases = folderNames.map(folder => ({
  find: `@${folder}`,
  replacement: path.resolve(__dirname, `src`, folder),
}));

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
    alias: aliases,
  },
});

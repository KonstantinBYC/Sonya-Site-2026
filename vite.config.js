import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  base: './',  
  root: 'public',
  publicDir: false,   
  build: {
    rollupOptions: {
      input: glob.sync('./public/*.html'),
    },
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [injectHTML(), FullReload(['./public/**/**.html'])],
});


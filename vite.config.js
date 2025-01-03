import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './recommended.js',
      name: '@cabify/eslint-config',
      formats: ['cjs'],
      fileName: () => `eslint.config.cjs`,
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'esnext',
        define: {
          global: 'globalThis',
        },
      },
    },
    rollupOptions: {
      external: [
        'eslint',
        'eslint-plugin-import',
        'path',
        'typescript-eslint',
        '@typescript-eslint/parser',
        '@typescript-eslint/eslint-plugin',
        'eslint-plugin-prettier/recommended',
        'eslint-plugin-lodash',
        'eslint-plugin-jest',
      ],
    },
  },
});

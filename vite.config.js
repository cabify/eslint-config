import { defineConfig } from 'vite';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig((configs) => {
  const buildFormat = process.env.BUILD_FORMAT || 'es';

  return {
    plugins: [
      topLevelAwait({
        // The export name of top-level await promise for each chunk module
        promiseExportName: '__tla',
        // The function to generate import names of top-level await promise in each chunk module
        promiseImportName: (i) => `__tla_${i}`,
      }),
    ],
    build: {
      lib: {
        entry: './recommended.js',
        name: '@cabify/eslint-config',
        formats: [buildFormat],
        fileName: () =>
          buildFormat === 'es' ? 'eslint.config.js' : 'eslint.config.cjs',
      },
      target: 'esnext',
      optimizeDeps: {
        esbuildOptions: {
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
  };
});

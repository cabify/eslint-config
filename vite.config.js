import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';
import topLevelAwait from 'vite-plugin-top-level-await';
import replace from '@rollup/plugin-replace';

export default defineConfig((configs) => {
  const buildFormat = process.env.BUILD_FORMAT || 'es';

  return {
    build: {
      emptyOutDir: false,
      outDir: 'dist',
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
        plugins: [
          replace({
            preventAssignment: true,
            values: {
              'process.env.BUILD_FORMAT': JSON.stringify(buildFormat || 'es'),
            },
          }),
          copy({
            targets: [
              {
                src: 'configs/conditionalPackagesLegacy.js',
                dest: 'dist',
              },
            ],
          }),
        ],
      },
    },
  };
});

import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';
import replace from '@rollup/plugin-replace';

export default defineConfig((configs) => {
  const buildFormat = process.env.BUILD_FORMAT || 'es';

  return {
    build: {
      emptyOutDir: false,
      outDir: 'dist',
      lib: {
        entry: './eslint.config.js',
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
        input: {
          index: './configs/base.js',
          jest: './configs/jest.js',
          ts: './configs/ts.js', // Adjust the paths as per your source files
        },
        output: {
          entryFileNames: (chunk) => {
            const extension = buildFormat === 'es' ? '.js' : '.cjs';
            if (chunk.name === 'index') return `eslint.config${extension}`;
            if (chunk.name === 'jest') return `jest${extension}`;
            if (chunk.name === 'ts') return `ts${extension}`;
            return '[name]-[hash].js'; // Default pattern
          },
        },
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
                src: 'configs/conditionalPackagesLegacy.cjs',
                dest: 'dist',
              },
              {
                src: 'configs/ts.cjs',
                dest: 'dist',
              },
              {
                src: 'configs/jest.cjs',
                dest: 'dist',
              },
            ],
          }),
        ],
      },
    },
  };
});

// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './eslint.config.js', // Your entry file
      name: '@cabify/eslint-config', // Global variable name (for UMD/IIFE)
      formats: ['es', 'cjs'], // Output both ESM and CommonJS
      fileName: (format) =>
        format === 'es' ? 'eslint.config.js' : 'eslint.config.cjs', // Explicit output filenames
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
        'eslint-plugin',
        'typescript-eslint',
      ], // Treat ESLint as an external package
      output: {
        // Customize output if needed
        exports: 'named', // Ensures named exports in CommonJS
      },
    },
    target: 'esnext', // browsers can handle the latest ES features
  },
});

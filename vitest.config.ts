import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    //remove "checker" if you see performance issues. You will rely only on your editor configuration for static typing
    checker({
      typescript: { tsconfigPath: 'tsconfig.test.json' },
    }),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: ['./testing/setup.ts'],
    globals: true,
  },
});

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    logHeapUsage: true,
    setupFiles: './vitest.setup.ts',
  },
});

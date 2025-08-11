import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/vitest.setup.ts'],
    coverage: {
      include: ['src/**/*.{js,ts,vue}'],
      exclude: ['src/main.ts', 'src/router/index.ts'],
    }
  }
})

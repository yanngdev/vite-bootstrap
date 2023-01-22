import { loadEnv, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { checker } from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [
      react(),
      ViteEjsPlugin(),
      svgr(),
      checker({
        typescript: true,
        eslint: {
          lintCommand: 'eslint src',
          dev: {
            overrideConfig: {
              cache: false,
            },
          },
        },
      }),
    ],
    server: {
      port: Number(process.env.VITE_PORT ?? 3000),
      host: process.env.VITE_HOST,
    },
  });
};

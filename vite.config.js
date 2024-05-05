import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.VITE_APP_KEY': JSON.stringify(env.VITE_APP_KEY),
      'process.env.VITE_APP_URL': JSON.stringify(env.VITE_APP_URL)
    },
    plugins: [react()],
  }
})
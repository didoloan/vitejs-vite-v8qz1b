import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export const basePath = '/APP';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/APP',
});

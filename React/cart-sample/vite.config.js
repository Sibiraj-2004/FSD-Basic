import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // The `postcss` option is not needed here as Vite will automatically
  // detect the `postcss.config.js` file created by the init command.
});
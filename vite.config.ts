import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages';

export default defineConfig({
  base: '/job-lists/', // ✅ very important: must match your GitHub repo name
  plugins: [react(), ghPages()]
});

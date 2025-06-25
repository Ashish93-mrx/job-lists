import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/job-lists/',  // ✅ Must match your GitHub repo name
  plugins: [react()]    // ✅ Only Vite plugins go here
});
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 10000, // Port that Render expects
    strictPort: true, // Ensures that Vite will fail if the port is already in use
  },
  build: {
    outDir: 'build', // Ensure this matches your expected output directory
  },
})

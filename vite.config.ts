import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/quant/" // Adjust if necessary for GitHub Pages deployment
})

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages sirve este repositorio bajo esta ruta base.
  base: '/proyecto-react-fs2/',
  plugins: [react()],
})

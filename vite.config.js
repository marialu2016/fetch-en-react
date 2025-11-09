import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/TU_REPO/',   // 👈 exactamente el nombre del repo, con / al inicio y al final
  plugins: [react()],
})

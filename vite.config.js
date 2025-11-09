import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/https://marialu2016.github.io/fetch-en-react/',   // 👈 exactamente el nombre del repo, con / al inicio y al final
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],
  base: process.env.GITHUB_PAGES ? '/caser_official/' : '/',  // Use repository name as base for GitHub Pages deployment, root for local development
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name ? assetInfo.name.split('.').pop() || 'asset' : 'asset'
          if (/png|jpe?g|webp|gif/i.test(extType)) {
            extType = 'img'
          }
          return `${extType || 'asset'}/[name]-[hash][extname]`
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
      }
    }
  }
})

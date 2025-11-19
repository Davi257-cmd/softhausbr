import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    sourcemap: false,
    cssCodeSplit: true,
    minify: 'esbuild',
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
          drei: ['@react-three/drei', '@react-three/fiber', 'three'],
        },
      },
    },
  },
  esbuild: {
    drop: ['console', 'debugger'],
    target: 'es2019',
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'class-variance-authority', '@radix-ui/react-slot'],
  },
})

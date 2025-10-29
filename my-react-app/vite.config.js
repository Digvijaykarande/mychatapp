import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto', // ✅ Ensure the SW registration file is generated
      manifest: {
        name: 'My Chat App',
        short_name: 'ChatApp',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#2196f3',
        icons: [
          { src: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png' }
        ]
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true
      }
    })
  ],
  base: "/mychatapp/" // ✅ Ensure correct base path for GitHub Pages
});

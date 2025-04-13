import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import netlify from '@astrojs/netlify'

export default defineConfig({
  integrations: [react()],
  output: 'server',
  adapter: netlify(),
  ssr: {
    target: 'node',
  },
  server: {
    hrm: {
      port: 3001,
    },
  },
  vite: {
    build: {
      rollupOptions: {
        external: ['@astrojs/netlify/netlify-functions.js'],
      },
    },
  },
})

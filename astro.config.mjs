import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import netlify from '@astrojs/netlify/functions'

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [react()],
  site: 'https://giuliacot.github.io/lotteryGame',
})

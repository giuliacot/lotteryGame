import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [react()],
  site: 'https://giuliacot.github.io',
  base: '/lotteryGame',
});

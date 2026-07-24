// astro.config.mjs
import vercel from '@astrojs/vercel'; // ✨ AQUÍ ESTÁ EL CAMBIO: Quitamos el "/serverless"
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static', // Permite estático por defecto, pero habilita las rutas API
  adapter: vercel(),
});

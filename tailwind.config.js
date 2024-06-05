/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    fontFamily: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'oscuro': 'var(--color-oscuro)',
      'carmesi': 'var(--color-marron)',
      'mandarina': 'var(--color-mandarina)',
      'naranja': 'var(--color-naranja)',
      'crema': 'var(--color-crema)',
      'mapuche': 'var(--color-mapuche)',
      'blanco': '--color-blanco'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


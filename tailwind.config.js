/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'lexend': ['Lexend'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'oscuro': 'var(--color-oscuro)',
      'carmesi': 'var(--color-marron)',
      'mandarina': 'var(--color-mandarina)',
      'naranja': 'var(--color-naranja)',
      'crema': 'var(--color-crema)',
      'mapuche': 'var(--color-mapuche)',
      'blanco': 'var(--color-blanco)',
      'oscuro-blur': 'var(--color-oscuro-blur)',
      'blanco-blur': 'var(--color-blanco-blur)',
      'error': 'var(--color-error)',
      'warning': 'var(--color-warning)',
      'success': 'var(--color-success)'
    },
    extend: {},
  },
  plugins: [],
}


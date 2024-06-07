/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'surt-normal': ['Surt Normal'],
      'surt-light': ['Surt light'],
      'surt-semibold': ['Surt semibold'],
      'surt-bold': ['Surt bold'],
      'surt-ex-normal': ['Surt expanded normal'],
      'surt-ex-bold': ['Surt expanded bold']


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
      'blanco': '--color-blanco'
    },
    extend: {},
  },
  plugins: [],
}


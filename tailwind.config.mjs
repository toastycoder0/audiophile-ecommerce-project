/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: '#000000',
        black: '#101010',
        white: '#FFFFFF',
        orange: '#D87D4A',
        'low-orange': '#FBAF85',
        gray: '#4C4C4C',
        'low-gray': '#F1F1F1'
      },
      maxWidth: {
        container: '1110px'
      }
    }
  }
}

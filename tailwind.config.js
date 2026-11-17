/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0F281B',
        'primary-green': '#153C27',
        'primary-light': '#1E5437',
        'primary-cream': '#FAF7F2',
        'gold-accent': '#C59A3F',
        'gold-light': '#ECC468',
        'gold-cream': '#F4EFE6',
        'cream-bg': '#FAF7F2',
        'cream-card': '#FFFFFF',
        'cream-border': '#E8DEC9',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

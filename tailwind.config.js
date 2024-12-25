/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundBlendMode: {
        overlay: 'overlay',
      },
      colors: {
        'soa-primary': '#0572bc',
        'soa-link': '#0072BC',
        'soa-highlight-prefix': '#F4781C',
        'soa-bg-blue': '#e0ebf6'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        tertiay: 'rgb(var(--color-tertiay) / <alpha-value>)',
        quarternary: 'rgb(var(--color-quarternary) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};

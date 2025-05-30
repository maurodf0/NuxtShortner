/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,vue,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
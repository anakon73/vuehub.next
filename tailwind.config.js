/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
        robotomono: ['Roboto Mono'],
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
}

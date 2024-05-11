/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ssm': '425px',
        'sssm': '375px'
      }
    },
  },
  plugins: [],
}


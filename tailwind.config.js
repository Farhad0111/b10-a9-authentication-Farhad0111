/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  /*languageOption:{
    ecmaVersion:2020,
    globals:{
      ...globals.browser,
      ...globals.node,
    },
  },*/
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}


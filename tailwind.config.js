/** @type {import('tailwindcss').Config} */
module.exports = {
  mode : "jit",
  content: ['./src/index.html', ],
  theme: {
    extend: {
      margin: {
        '10px': '10px',
      }
    },
  },
  plugins: [],
  
}


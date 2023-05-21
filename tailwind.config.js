/** @type {import('tailwindcss').Config} */
module.exports = {
  mode : "jit",
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      margin: {
        '10px': '10px',
      }
    },
  },
  plugins: [],
  
}


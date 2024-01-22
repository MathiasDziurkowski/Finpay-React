/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'primaria': '#002E33',
        'secundaria': '#A3DC2F',
        'terciaria': '#F4F6F6',
      },
      fontFamily:{
        'barlow': ['Barlow', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
      height:{
        'phone': '1144px',
        'card': '260px',
        'phone': '967.37px',
        'cards': '445px',
        'ceo': '540px',
        'join': '760px',
        'mockup': '868.504px',
      },
      width:{
        'card': '807px',
        'card-p': '716px',
        'phone': '633.53px',
        'p': '806px',
        'cards': '360px',
        'h1': '497px',
        'ceo': '525px',
        'join': '594px',
        'link': '1213px',
      }
    },
  },
  plugins: [],
}


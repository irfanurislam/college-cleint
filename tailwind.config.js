/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
"primary": "#e5c392",
      
"secondary": "#eddf78",
      
"accent": "#828de0",
      
"neutral": "#32243d",
      
"base-100": "#c7d2fe",
      
"info": "#49c1e9",
      
"success": "#17d3a7",
      
"warning": "#f2ae31",
      
"error": "#e5786c",
      },
    },
  ],
  plugins: [require("daisyui")],
}


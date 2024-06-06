/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'TourTypeBG': "url('https://i.ibb.co/wR2CfS0/holly-mandarich-UVy-Of-X3v0-Ls-unsplash.jpg')",
        
      },
    },
  },
  plugins: [require('daisyui'),],
}

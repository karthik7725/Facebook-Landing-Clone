/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        "facebook-blue": "#1877f2",
        "facebook-gray": "#f0f2f5",
        'facebook-green': '#42b72a',
        "facebook-dark-blue": "#0a325f",
        "facebook-white": "#fff",
      }
    },
  },
  plugins: [],
}


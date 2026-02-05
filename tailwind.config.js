/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro Text", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        "surface": {
          light: "#f6f7fb",
          dark: "#0f1115"
        },
        "card": {
          light: "#ffffff",
          dark: "#171a21"
        },
        "accent": "#5b7cfa"
      },
      boxShadow: {
        "soft": "0 20px 50px -30px rgba(15, 20, 40, 0.25)"
      }
    }
  },
  plugins: []
};

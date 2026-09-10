/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: "#08080a",
          900: "#0c0c0f",
          850: "#111114",
          800: "#17171b",
          700: "#212126",
        },
        gold: {
          50: "#faf6ea",
          100: "#f3ead0",
          200: "#e6d3a1",
          300: "#d8bb72",
          400: "#cca64c",
          500: "#c9a227",
          600: "#a9831f",
          700: "#87661a",
          800: "#6b5115",
          900: "#584311",
        },
      },
      fontFamily: {
        display: ["'Assistant'", "sans-serif"],
        body: ["'Heebo'", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #f3ead0 0%, #c9a227 45%, #87661a 100%)",
        "noise-fade":
          "radial-gradient(ellipse at center, rgba(8,8,10,0) 0%, rgba(8,8,10,0.9) 80%)",
      },
      boxShadow: {
        gold: "0 0 40px -8px rgba(201,162,39,0.45)",
        "gold-lg": "0 20px 60px -15px rgba(201,162,39,0.35)",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};

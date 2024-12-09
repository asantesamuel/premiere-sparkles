/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mygold: "#FFEC9E",
        mylightpurple: "#FDDAFF",
        mypurple: "#9C049E",
        mylightgold:"#FBF8EF"
      },
    },
    keyframes: {
      appear: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
    },
    animation: {
      appear: "appear 1s linear",
    },
  },
  plugins: [],
};

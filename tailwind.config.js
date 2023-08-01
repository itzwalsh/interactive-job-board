/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    colors: {
      "primary-cyan": "hsl(180, 29%, 50%)",
      "neutral-cyan-background": "hsl(180, 52%, 96%)",
      "neutral-cyan-card": "hsl(180, 31%, 95%)",
      "neutral-dark-blue": "hsl(180, 8%, 52%)",
      "neutral-dark-blue-text": "hsl(180, 14%, 20%)",
    },
    fontFamily: {
      spartan: ["Spartan", "sans-serif"],
    },
    extend: {
      fontSize: {
        title: "15px;",
      },
      backgroundImage: {
        "header-mobile": "url('/src/assets/bg-header-mobile.svg')",
        "header-desktop": "url('/src/assets/bg-header-desktop.svg')",
      },
    },
  },
  plugins: [],
}

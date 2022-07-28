/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        firebasetheme: {
          primary: "#e298cd",

          secondary: "#7facd8",

          accent: "#f2a7b6",

          neutral: "#2D2C3A",

          "base-100": "#FDFBFD",

          info: "#477BDC",

          success: "#18776A",

          warning: "#BB6D07",

          error: "#F82912",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lgcyan: "hsl(180, 52%, 96%)",
        lgcyanf: "hsl(180, 31%, 95%)",
        ddcyan: "hsl(180, 29%, 50%)",
        dgcyan: "hsl(180, 8%, 52%)",
        vdcyan: "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};

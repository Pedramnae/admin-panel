module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        interb: ["interb"],
        interm: ["interm"],
        interl: ["interl"],
        interr: ["interr"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};

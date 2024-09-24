/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(121.25deg, #FFFFFF -3.14%, rgba(255, 250, 245, 0.91) 4.65%, rgba(255, 245, 235, 0.83) 12.44%, rgba(255, 240, 225, 0.74) 20.23%, rgba(255, 235, 215, 0.65) 28.02%, rgba(255, 230, 205, 0.57) 35.81%, rgba(255, 234, 201, 0.57) 43.6%, rgba(255, 238, 197, 0.58) 51.39%, rgba(254, 243, 193, 0.58) 59.18%, rgba(250, 248, 191, 0.58) 66.97%, rgba(243, 254, 190, 0.59) 74.76%, rgba(225, 253, 179, 0.56) 82.55%, rgba(202, 253, 171, 0.53) 90.34%, rgba(174, 252, 166, 0.49) 98.13%, rgba(138, 252, 166, 0.46) 105.92%, rgba(86, 251, 171, 0.43) 113.71%)",
      },
    },
  },
  plugins: [],
};

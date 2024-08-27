/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      margin: {
        '10p': '10%', // 10% margin
        '15p': '15%', // 15% margin
        '70p': '70%', // 15% margin
        // Add more as needed
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20)  alternate, blink .7s infinite"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        india: {
          saffron: "#FF9933",
          white: "#FFFFFF",
          green: "#138808",
        },
        germany: {
          black: "#000000",
          red: "#D00000",
          gold: "#FFCE00",
        },
        primary: {
          dark: "#1a1a2e",
          light: "#0f3460",
        },
        text: {
          primary: "#1f2937",
          secondary: "#6b7280",
          muted: "#9ca3af",
          light: "#d1d5db",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          '"Roboto"',
          '"Oxygen"',
          '"Ubuntu"',
          '"Cantarell"',
          '"Fira Sans"',
          '"Droid Sans"',
          '"Helvetica Neue"',
          "sans-serif",
        ],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.08)",
        medium: "0 4px 12px rgba(0, 0, 0, 0.12)",
        "lg-custom": "0 10px 25px rgba(0, 0, 0, 0.15)",
      },
      transitionDuration: {
        300: "300ms",
      },
      backgroundImage: {
        "gradient-india":
          "linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)",
        "gradient-germany":
          "linear-gradient(90deg, #000000 0%, #D00000 50%, #FFCE00 100%)",
        "gradient-hero":
          "linear-gradient(135deg, rgba(26, 26, 46, 0.9) 0%, rgba(15, 52, 96, 0.9) 100%)",
      },
    },
  },
  plugins: [],
};

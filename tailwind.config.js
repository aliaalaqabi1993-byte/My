/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#1976D2" },
      fontFamily: { sans: ["Tajawal, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};

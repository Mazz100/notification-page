/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Plus-Jakara": ["Plus Jakarta Sans", "sans-serif"],
      },
      backgroundColor: {
        "notification-count": "#0a317b",
        "body-bg": "#f7fafd",
        "unread-bg": "#e5effa",
      },
      colors: {
        "notificaction-type-hover": "#0a317b",
        "unread-color": "#f65351",
      },
    },
  },
  plugins: [],
};

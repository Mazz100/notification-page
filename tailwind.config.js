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
        "body-bg": "#f9fafe",
        "message-bg-hover": "#e5eff9",
        "isRead-color": "#f65351",
      },
      colors: {
        "notificaction-hover": "#0a317b",
      },
    },
  },
  plugins: [],
};

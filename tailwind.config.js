/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDark: "#020617",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        stagger: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" },
          "50%": { boxShadow: "0 0 30px rgba(59, 130, 246, 0.8)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
        stagger: "stagger 0.6s ease-out forwards",
        glow: "glow 3s ease-in-out infinite",
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(59, 130, 246, 0.15)",
        "glow-md": "0 0 25px rgba(59, 130, 246, 0.2)",
        "glow-lg": "0 0 40px rgba(59, 130, 246, 0.25)",
        "glow-purple": "0 0 30px rgba(147, 51, 234, 0.3)",
        "glow-purple-lg": "0 0 50px rgba(147, 51, 234, 0.4)",
      },
    },
  },
  plugins: [],
}

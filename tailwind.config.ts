import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#fffaf4",
        mist: "#f6efe7",
        sand: "#ecdccd",
        latte: "#d7bea6",
        clay: "#9d7558",
        ink: "#2c2019",
        rose: "#f5d8cd",
        sage: "#d7e6d8",
        sky: "#d8e8f2",
        peach: "#f3e5d8",
        gold: "#c79d6d",
      },
      boxShadow: {
        soft: "0 22px 60px rgba(126, 96, 69, 0.12)",
        float: "0 28px 90px rgba(102, 76, 53, 0.16)",
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        tilt: {
          "0%, 100%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(-2deg) scale(1.02)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(199, 157, 109, 0.0)" },
          "50%": { boxShadow: "0 0 40px rgba(199, 157, 109, 0.18)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 10s linear infinite",
        rise: "rise 900ms ease forwards",
        tilt: "tilt 10s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at top, rgba(255,255,255,0.97), rgba(255,250,244,0.9) 42%, rgba(246,239,231,0.76)), linear-gradient(135deg, rgba(245,216,205,0.5), rgba(216,232,242,0.4) 42%, rgba(215,230,216,0.46))",
      },
    },
  },
  plugins: [],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- TNX BRAND COLORS ---
        primary: {
          DEFAULT: "#1A1A1A",        // Dark charcoal / topbar background
        },
        accent: {
          DEFAULT: "#D0252C",        // TNX Red (hover, icons, buttons)
          light: "#E74A53",          // Lighter red for gradients or highlights
        },

        // --- SUPPORTING COLORS ---
        textPrimary: "#1A1A1A",      // Main text color
        borderLight: "#E5E5E5",      // Light gray borders
        white: "#FFFFFF",            // Clean white
        grayBg: "#F8F8F8",           // Optional page background
      },

      fontFamily: {
        heading: ["Poppins", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"],
      },

      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.1)",
        soft: "0 4px 14px rgba(0,0,0,0.12)",
        redGlow: "0 4px 15px rgba(208,37,44,0.25)",  // TNX Red glow
      }
    },
  },
  plugins: [],
};

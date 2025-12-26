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
        // --- Medical Manufacturer Brand Colors ---
        primary: {
          DEFAULT: "#0F2A44",        // Navy blue / primary brand
        },
        accent: {
          DEFAULT: "#E11D2E",        // Medical red (buttons, highlights)
          light: "#F5E9E8",          // Light red tint for backgrounds
        },
        medicalNavy: "#0F2A44",      // Navy blue
        medicalRed: "#E11D2E",       // Medical red
        // --- SUPPORTING COLORS ---
        textPrimary: "#0F2A44",      // Navy text for main content
        textSecondary: "#4A5568",    // Gray-blue for secondary text
        borderLight: "#E0E7FF",      // Subtle blue-tinted borders
        white: "#FFFFFF",            // Clean white
        grayBg: "#F8FAFC",           // Soft blue-white background
      },

      fontFamily: {
        heading: ["Poppins", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"],
      },

      boxShadow: {
        card: "0 2px 12px rgba(15,42,68,0.08)",
        soft: "0 6px 20px rgba(15,42,68,0.12)",
        premium: "0 10px 30px rgba(15,42,68,0.15)",
        redGlow: "0 4px 15px rgba(225,29,46,0.2)",  // Medical red glow
      }
    },
  },
  plugins: [],
};

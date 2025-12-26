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
                    DEFAULT: "#0F2A44",        // Navy blue
                },
                accent: {
                    DEFAULT: "#D0252C",        // Medical red
                    light: "#F5E9E8",          // Light red tint
                },
                "medical-navy": "#0c2534",
                "medical-navy-light": "#153a50",
                "medical-red": "#D0252C",
                "medical-red-dark": "#b81d23",
                "medical-red-light": "#e6363d",

                // --- SUPPORTING COLORS ---
                textPrimary: "#0F2A44",
                textSecondary: "#4A5568",
                borderLight: "#E0E7FF",
                white: "#FFFFFF",
                grayBg: "#F8FAFC",
            },
            fontFamily: {
                heading: ["var(--font-heading)", "ui-sans-serif", "system-ui"],
                body: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
            },
            boxShadow: {
                card: "0 2px 12px rgba(15,42,68,0.08)",
                soft: "0 6px 20px rgba(15,42,68,0.12)",
                premium: "0 10px 30px rgba(15,42,68,0.15)",
                redGlow: "0 4px 15px rgba(225,29,46,0.2)",
            }
        },
    },
    plugins: [],
};

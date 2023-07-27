/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#5138ee",
                    dark: "#1c0b87",
                    light: "#7c69f2",
                    text: "#22262a",
                },
                secondary: {
                    DEFAULT: "#090524",
                    light: "#16122f",
                },
                heading: {
                    DEFAULT: "#111111",
                    light: "#333333",
                },
                body: "#555555",
                white: {
                    DEFAULT: "#FFFFFF",
                    light: "#f9f9f9",
                    lighter: "#fafafa",
                    deep: "#EDEBF5",
                },
                gray: {
                    light: "#f7f7f7",
                },
                blue: {
                    dark: "#0f0054",
                },
            },
            spacing: {
                30: "30px",
                15: "60px",
                50: "50px",
            },
            keyframes: {
                waves: {
                    "0%": {
                        transform: "scale(0)",
                    },
                    "100%": {
                        opacity: "0",
                        transform: "scale(1.0)",
                    },
                },

                fadeInDown: {
                    from: {
                        opacity: "0",
                        transform: "translate3d(0, -100%, 0)",
                    },

                    to: {
                        opacity: "1",
                        transform: "none",
                    },
                },
            },
            animation: {
                spinner: "waves 1.0s infinite ease-in-out",
                fadeInDown:
                    "fadeInDown .7s ease-in-out 0s 1 normal none running",
            },
        },

        fontSize: {
            base: ["15px"],
            normal: "16px",
            sm: ["0.875rem"],
            lg: ["1.125rem"],
            xl: ["1.25rem"],
            "2xl": ["1.5rem"],
            "3xl": ["1.875rem"],
            "4xl": ["2.25rem"],
            "6xl": [
                "3.75rem",
                {
                    lineHeight: "1.2",
                },
            ],
        },
        fontFamily: {
            base: ["Poppins", "sans-serif"],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "15px",
            },
        },
        gridColumnEnd: {
            "-1": "-1",
        },
        screens: {
            xs: "480px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1200px",
        },
    },
};

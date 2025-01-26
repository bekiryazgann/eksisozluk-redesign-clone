/** @type {import('tailwindcss').Config} */
export default {
    presets: [require("@medusajs/ui-preset")],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@netist/ui/dist/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: "#81c14b",
                    50: '#f3faeb',
                    100: '#e4f3d4',
                    200: '#cae8ae',
                    300: '#a9d77f',
                    400: '#81c14b',
                    500: '#6aaa38',
                    600: '#518729',
                    700: '#3f6823',
                    800: '#355321',
                    900: '#2f4720',
                    950: '#16260d',
                },
            },
            container: {
                center: true,
                padding: '2rem',
                screens: {
                    sm: '480px',
                    md: '600px',
                    lg: '800px',
                    xl: '1024px',
                    '2xl': '1240px',
                },
            },
        },
    },
    plugins: [],
    darkMode: ["class"]
}


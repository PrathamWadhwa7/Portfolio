/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                primary: '#ededed',
                secondary: '#a1a1aa',
                accent: '#eab308', // Gold/Yellow accent
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}

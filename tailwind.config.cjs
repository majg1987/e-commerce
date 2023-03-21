/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            color1: '#db82e7',
            color2: '#20bcd8',
            color3: '#20db94',
            color4: '#f2ea8a',
            color5: '#f8ebed',
        },
        fontFamily: {
            titulo: ['Righteous, cursive'],

        }
    },
    plugins: [],
}
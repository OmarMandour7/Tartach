/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'tartash-green': '#4d7d4a',
                'tartash-gold': '#a7802c',
                'tartash-yellow': '#f2c12d',
                'tartash-cream': '#f5e6d3',
                'tartash-dark': '#2c3e2f',
            },
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                lato: 'var(--font-lato)',
                cevicheOne: 'var(--font-ceviche-one)',
                cormorantSC: 'var(--font-cormorant-sc)',
                eczar: 'var(--font-eczat)',
                arizonia: 'var(--font-arizonia)',
                kavoon: 'var(--font-kavoon)',
                playfairDisplay: 'var(--font-playfairDisplay)',
                shrikhand: 'var(--font-shrikhand)',
            },
            colors: {
                'nav-border': '#EBEAEA',
                'light-white': '#FAFAFB',
                'light-white-100': '#F1F4F5',
                'light-white-200': '#d7d7d7',
                'light-white-300': '#F3F3F4',
                'light-white-400': '#E2E5F1',
                'light-white-500': '#E4E4E4',
                gray: '#4D4A4A',
                'gray-100': '#3d3d4e',
                'black-100': '#252525',
                'gray-50': '#D9D9D9',

                'primary-blue': '#123C69',

                'primary-purple': '#772943',
                'primary-purple-750': '#9D3658',
                'primary-purple-500': '#d689a3',

                'primary-grey': '#b8b8c0',
                'primary-grey-500': '#d8d8dd',
                'primary-grey-250': '#e6e6e9',
            },
            boxShadow: {
                menu: '0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)',
            },
        },
    },
    plugins: [],
}

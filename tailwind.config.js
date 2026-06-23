module.exports = {
    content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
          secular: ['Secular One', 'Arial', 'sans-serif'],
        },
        colors: {
          primary: {
            DEFAULT: 'var(--primary)',
            100: 'var(--primary-100)',
            200: 'var(--primary-200)',
            300: 'var(--primary-300)',
            400: 'var(--primary-400)',
            500: 'var(--primary-500)',
            600: 'var(--primary-600)',
            700: 'var(--primary-700)',
            800: 'var(--primary-800)',
            900: 'var(--primary-900)',
          },
        },
      },
    },
    daisyui: {
      themes: [],
    },
    plugins: [require('daisyui')],
}

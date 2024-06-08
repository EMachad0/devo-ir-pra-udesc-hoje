/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Oxygen-Sans"',
        'Ubuntu',
        'Cantarell',
        '"Helvetica Neue"',
        'sans-serif',
      ],
      mono: [
        '"JetBrains Mono"',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace'
      ],
    },
  },
  plugins: [],
};

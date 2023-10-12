import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        nor: '4px',
      },
      colors: {
        todo_blue: {
          500: '#273FAD',
        },
        todo_green: {
          500: '#3FAD27',
        },
        todo_red: {
          500: '#AD273f',
        },
        todo_gray: {
          100: '#EBEBEB',
          500: '#A09CB1',
          600: '#3D3D4D',
          900: '#1C1C29',
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.animate-opacity': {
          'animation-duration': '400ms',
          'animation-timing-function': 'cubic-bezier(0.16, 1, 0.3, 1)',
          'will-change': 'transform, opacity',
        },
        '.box-shadow-tooltip': {
          'box-shadow':
            'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
          'user-select': 'none',
        },
        '.box-shadow-focus': {
          'box-shadow': '0 0 0 2px #FFFFFF',
        },
        '.transition-md': {
          transition: 'all 0.4s',
        },
      })
    }),
  ],
}

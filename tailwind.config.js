import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        normal: '4px',
      },
      height: {
        height: 'calc(100vh - 17.75rem - 3.5rem)',
      },
      boxShadow: {
        boxShadow: '0 2px 10px text-black',
      },
      maxWidth: {
        app: '70rem',
      },

      screens: {
        xs: '420px',
      },
      transitionDuration: {
        400: '400ms',
      },
      colors: {
        todo_blue: {
          50: '#E8EBFD',
          300: '#748DFB',
          400: '#3853FF',
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
          800: '#1C1C29',
          900: '#121214',
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.animate-tooltip': {
          'animation-duration': '400ms',
          'animation-timing-function': 'cubic-bezier(0.16, 1, 0.3, 1)',
          'will-change': 'transform, opacity',
        },
        '.box-shadow-tooltip': {
          'box-shadow':
            'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
          'user-select': 'none',
        },
        '.filter-dropShadow': {
          filter: `drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.06))`,
        },
        '.filter-brightness': {
          filter: 'brightness(1.15)',
        },
      })
    }),
  ],
}

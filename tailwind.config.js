/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class',
  content: [
    './public/**/*.html',
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
    './dht-site-editor/**/*.{vue,js,ts,jsx,tsx}',
    './dht-analytics/**/*.{vue,js,ts,jsx,tsx}'
  ],
  media: false,
  theme: {
    fontFamily: {
      main: ['Montserrat', 'sans-serif']
    },
    screens: {
      sm: '600px',
      // => @media (min-width: 600px) { ... }
      md: '900px',
      // => @media (min-width: 900px) { ... }
      lg: '1200px',
      // => @media (min-width: 1200px) { ... }
      xl: '1500px',
      '2xl': '1800px'
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '3rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }]
    },
    extend: {
      animation: {
        'fade-in': 'fade-in 0.5s linear forwards',
        marquee: 'marquee var(--marquee-duration) linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'spin-reverse': 'spin-reverse 1s linear infinite',
        'spin-reverse-slow': 'spin-reverse 4s linear infinite',
        'spin-reverse-slower': 'spin-reverse 6s linear infinite'
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: '0'
          },
          to: {
            opacity: '1'
          }
        },
        marquee: {
          '100%': {
            transform: 'translateY(-50%)'
          }
        },
        'spin-reverse': {
          to: {
            transform: 'rotate(-360deg)'
          }
        }
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      zIndex: {
        '-10': '-10',
        '-2': '-2',
        '-1': '-1',
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        10: '10',
        100: '100'
      },
      colors: {
        'primary-lighter': 'var(--color-primary-lighter)',
        'primary-light': 'var(--color-primary-light)',
        primary: 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
        'primary-darker': 'var(--color-primary-darker)',
        'primary-border': 'var(--color-primary-border)',
        'primary-button': 'var(--color-primary-button)',
        'primary-input': 'var(--color-primary-input)',
        'secondary-lighter': 'var(--color-secondary-lighter)',
        'secondary-light': 'var(--color-secondary-light)',
        secondary: 'var(--color-secondary)',
        'secondary-dark': 'var(--color-secondary-dark)',
        'secondary-darker': 'var(--color-secondary-darker)',
        'secondary-border': 'var(--color-secondary-border)',
        'secondary-button': 'var(--color-secondary-button)',
        action: 'rgb(var(--color-action))',
        'action-button': 'rgb(var(--color-action-button))'
      },
      boxShadow: {
        default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
        md: ' 0 3px 15px -1px rgba(0, 0, 0, .2), 0 4px 6px -2px rgba(0, 0, 0, .05)',
        lg: ' 0 8px 15px -3px rgba(0, 0, 0, .2), 0 4px 6px -2px rgba(0, 0, 0, .05)',
        xl: ' 0 20px 25px -5px rgba(0, 0, 0, .3), 0 10px 10px -5px rgba(0, 0, 0, .04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, .25)',
        inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
        'primary-glow': '0 0 8px 7px #cce4f1',
        'action-glow': '0 0 6px #00A0B1',
        'yellow-glow': '0 0 6px #DBD53B',
        'blur-glow': '0 0 15px rgba(0,0,0,0.2)',
        'green-soft': '0 0 6px #3BDB5E',
        none: 'none'
      },
      opacity: {
        0: '0',
        50: '.5',
        60: '.6',
        70: '.7',
        80: '.8',
        90: '.9',
        100: '1'
      },
      borderRadius: {
        xl: '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem'
      },
      height: {
        14: '3.5rem;',
        36: '9rem',
        72: '18rem;',
        80: '22rem;',
        96: '24rem;',
        128: '32rem;',
        '1/3-screen': '33vh',
        '1/3': '33%',
        '1/2-screen': '50vh',
        '1/2': '50%',
        '2/3-screen': '66vh',
        '2/3': '66%',
        '3/4-screen': '75vh',
        '3/4': '75%',
        '11/12-screen': '91.666667vh'
      },
      width: {
        36: '9rem;',
        72: '18rem;',
        76: '20rem;',
        80: '22rem;',
        96: '24rem;',
        128: '32rem;',
        160: '40rem;',
        256: '64rem;',
        320: '80rem;',
        '1/3-screen': '33vw',
        '1/2-screen': '50vw',
        '3/4-screen': '75vw'
      },
      maxHeight: {
        0: '0px',
        8: '2rem',
        32: '8rem;',
        52: '12rem;',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%'
      },
      minHeight: {
        32: '8rem;',
        52: '12rem;',
        72: '18rem;',
        96: '24rem;',
        '1/2-screen': '50vh',
        '2/3-screen': '68vh'
      },
      minWidth: {
        16: '4rem;',
        32: '8rem;'
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem'
      }
    },
    inset: {
      '-6': '-6rem',
      '-5': '-5rem',
      '-4': '-4rem',
      '-3': '-3rem',
      '-2': '-2rem',
      '-1': '-1rem',
      0: 0,
      auto: 'auto',
      '05': '.5rem',
      1: '1rem',
      2: '2rem',
      3: '3rem',
      4: '4rem',
      5: '5rem',
      6: '6rem',
      7: '7rem',
      8: '8rem',
      10: '10rem',
      12: '12rem',
      14: '14rem',
      16: '16rem',
      17: '17rem',
      18: '18rem',
      '1/6': '15%',
      '1/5': '20%',
      '1/4': '25%',
      '1/3': '33%',
      '1/2': '50%'
    }
  },
  variants: {
    visibility: ['hover', 'responsive', 'focus'],
    borderColor: ['focus', 'hover']
  },
  plugins: [import('@tailwindcss/forms')]
};

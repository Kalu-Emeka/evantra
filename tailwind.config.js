/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      customScrn: '700px',
      md: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      boxShadow: {
        custom: '1.41px 1.41px 14.1px 0px #001B3633',
      },
      fontFamily: {
        neuzeit: ['"Neuzeit Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(286.8deg, #974E9F 7.82%, #794C9F 86.97%)',
      },
      animation: {
        flipFade: 'flipFade 22s ease-in-out infinite',
      },
      keyframes: {
        flipFade: {
          '0%, 100%': { transform: 'rotateY(0deg) rotateX(0deg)', opacity: 1 },
          '25%': { transform: 'rotateY(180deg) rotateX(5deg)', opacity: 0.5 },
          '50%': { transform: 'rotateY(0deg) rotateX(-5deg)', opacity: 0.1 },
          '75%': { transform: 'rotateY(-180deg) rotateX(5deg)', opacity: 0.5 },
        },
      },
    },
  },
  plugins: [],
};

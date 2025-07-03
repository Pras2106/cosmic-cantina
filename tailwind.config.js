/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'vibrant': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        'electric': {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        'neon': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        }
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      animation: {
        'float-complex': 'floatComplex 8s ease-in-out infinite',
        'vibrant-shift': 'vibrantShift 3s ease-in-out infinite',
        'background-shift': 'backgroundShift 20s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        floatComplex: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) translateX(5px) rotate(1deg)' },
          '50%': { transform: 'translateY(-5px) translateX(-5px) rotate(-1deg)' },
          '75%': { transform: 'translateY(-15px) translateX(3px) rotate(0.5deg)' },
        },
        vibrantShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        backgroundShift: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1) rotate(0deg)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1) rotate(180deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.6)' },
        },
      },
      boxShadow: {
        'vibrant': '0 0 20px rgba(99, 102, 241, 0.4), 0 0 40px rgba(99, 102, 241, 0.2)',
        'vibrant-strong': '0 0 30px rgba(99, 102, 241, 0.6), 0 0 60px rgba(99, 102, 241, 0.3)',
        'neon': '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(34, 197, 94, 0.2)',
        'electric': '0 0 20px rgba(251, 191, 36, 0.4), 0 0 40px rgba(251, 191, 36, 0.2)',
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#030509',
          900: '#060a12',
          850: '#0b1120',
          800: '#10182b',
          750: '#182442',
          700: '#203056',
        },
        electric: {
          cyan: '#38bdf8',
          blue: '#60a5fa',
          deep: '#0ea5e9',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cyan-sm': '0 0 20px rgba(56, 189, 248, 0.25)',
        'glow-cyan-md': '0 0 35px rgba(56, 189, 248, 0.45)',
        'glow-cyan-lg': '0 0 60px rgba(14, 165, 233, 0.55)',
        'sculpted-ribbon': '0 25px 60px -15px rgba(0, 0, 0, 0.4), 0 0 25px rgba(56, 189, 248, 0.1)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'spin-slower': 'spin 24s linear infinite',
        'float': 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.08)' },
        }
      }
    },
  },
  plugins: [],
}

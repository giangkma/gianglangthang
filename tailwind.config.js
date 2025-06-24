const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {},
      keyframes: {
        crazyWiggle: {
          '0%, 100%': { transform: 'rotate(-12deg) scale(1.05)' },
          '25%': { transform: 'rotate(12deg) scale(1.07)' },
          '50%': { transform: 'rotate(-8deg) scale(1.04)' },
          '75%': { transform: 'rotate(8deg) scale(1.06)' }
        },
        ripple: {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(2)', opacity: '0.2' },
          '100%': { opacity: '0' }
        }
      },
      animation: {
        crazy: 'crazyWiggle 0.8s infinite ease-in-out',
        ripple: 'ripple 1.2s ease-out infinite'
      }
    }
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) =>
            `.sidebar-expanded .${e(
              `sidebar-expanded${separator}${className}`
            )}`
        )
      })
    })
  ]
}

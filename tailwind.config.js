/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'quick-nav': '#282828',
        'quick-nav-overlay': '#00000066',
        'quick-nav-shortcut-header': '#393a3d',
        'quick-nav-shortcut-ul-li': '#393a3d',
        'quick-nav-shortcut-ul-li-hover': '#e8e8e8',
        'quick-nav-customise-menu': '#e3e5e8',
        'quick-nav-border': '#2ca01c'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

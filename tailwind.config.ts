import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#1a1a1a',
      'vpblue': '#F1F5FE',
      'dgreenblue': '#00264d',
      'cyan':'#293356',
      'lightgrey':'#848EAD',
      'grayblue':'#CFD8EF',
      'orange':'#FF8D68',
      'greyred':'#FEEDE8',
      'neongreen':'#10D8C4',
      'lightpurple':'#BECDFF'
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '191.5px',
      'large': '12px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        '100': '25rem',
        '112.5':'28.125rem',
         '119.5':'29.875rem'
      },
      translate: {
        '100': '25rem',
      },
      fontFamily: {
        manrope: ['var(--font-manrope)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

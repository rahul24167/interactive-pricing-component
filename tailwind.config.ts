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
      // background: {
      //   DEFAULT: '#FFFFFF',
      //   dark: '#000000',
      // },
      // greytext:{
      //   DEFAULT: '#848EAD',
      //   dark: '#848EAD',
      // },
      'white': '#FFFFFF',
      'back':'#F2F2F2',
      'hero':'#D9D2E9',
      'cyan':'#293356',
      'lightgrey':'#848EAD',
      'circle':'#CFD8EF',
      'orange':'#FF8D68',
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
      }
    },
  },
  plugins: [],
} satisfies Config;

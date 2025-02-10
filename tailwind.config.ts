import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { top: '-100%' },
          '100%': { top: '100%' },
        },
      },
      animation: {
        shine: 'shine 1.2s forwards',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      screens: {
        sm: '886px', // Custom breakpoint for screens under 886px
      },
    },
  },

  plugins: [],
} satisfies Config;

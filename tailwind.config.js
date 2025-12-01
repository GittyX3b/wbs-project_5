import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        gabarito: ['Gabarito', 'sans-serif'],
      },
    },
  },
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
});

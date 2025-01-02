import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 스크롤바 숨기기 유틸리티 추가
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1A2B4A',
          deep: '#0F1B30',
          soft: '#243757',
        },
        amber: {
          DEFAULT: '#F5A623',
          deep: '#D88A0A',
        },
        charcoal: '#2C3E50',
        'gray-light': '#F4F6F8',
        'gray-line': '#E5E8ED',
        'gray-medium': '#6B7280',
        'gray-soft': '#9AA3AE',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans Arabic"', '"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        latin: ['"IBM Plex Sans"', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        DEFAULT: '2px',
        sm: '2px',
      },
      letterSpacing: {
        wider2: '0.14em',
        widest2: '0.16em',
      },
    },
  },
  plugins: [],
};

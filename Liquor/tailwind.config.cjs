/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1f6feb',
          50: '#eef6ff',
          100: '#d9eaff',
          200: '#b3d4ff',
          300: '#8bbfff',
          400: '#66a9ff',
          500: '#1f6feb',
          600: '#1558d1',
          700: '#0f419f',
          800: '#0a2f73',
          900: '#071b42'
        },
        secondary: '#ff7aa2',
        accent: '#ffd166',
        neutral: {
          900: '#0f1724',
          700: '#374151',
          500: '#6b7280',
          300: '#d1d5db',
          100: '#f3f4f6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial'],
        display: ['Poppins', 'Inter', 'ui-sans-serif']
      },
      spacing: {
        '15': '3.75rem'
      },
      screens: {
        sm: '640px',
        md: '641px',
        lg: '1024px'
      }
    }
  },
  plugins: [],
}

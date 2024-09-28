/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5722',
        secondary: '#4CAF50',
        accent: '#FFC107',
        background: '#F5F5F5',
        textPrimary: '#212121',
        textSecondary: '#757575',
        google: '#DB4437',
        facebook: '#3B5998',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        custom: '0 4px 14px 0 rgba(0, 0, 0, 0.10)',
      },
      backgroundImage: {
        'login-bg': "url('/images/login-bg.jpg')", // Path for login background image
        'register-bg': "url('/images/register-bg.jpg')", // Path for register background image
      },
    },
  },
  plugins: [],
}

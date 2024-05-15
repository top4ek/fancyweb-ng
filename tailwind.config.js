export default {
  relative: true,
  content: [
    "./src/**/*.html",
    "./src/**/*.{js,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      'sans': ['"IBM Plex Sans"', 'sans-serif'],
      'mono': ['"Share Tech Mono"', 'mono'], 
    },
    extend: {
      colors: {
        'brand-blue': '#4c60d8',
        'btn-blue-hover': '#3949ab',
        'btn-blue-click': '#283593',
        'light-blue': '#b7bfef',
        'grey': '#9e9e9e',
        'grey-bg': '#f8f9fa',
        'white': '#fff',
        'black': '#000',
        'crimson': '#ff4785',
      },
    },
  },
  plugins: [],
}

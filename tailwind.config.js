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
        'gray': '#9e9e9e',
        'white': '#eeeeee',
        'crimson': '#ff4785',
      },
    },
  },
  plugins: [],
}

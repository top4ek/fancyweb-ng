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
        'action-blue': '#052c65',
        'text-blue': '#0e6efd',
        'grey': '#9e9e9e',
        'grey-bg': '#f8f9fa',
        'white': '#fff',
        'black': '#000',
        'donban-bg': '#cfe2ff',
        'opencol-donban-bg-from': '#3385ff',
        'opencol-donban-bg-to': '#52bcfa',
        'wallet-bg': '#f8f9fa',
        'wallet-border': '#d2d2d2',
        'crimson': '#ff4785',
        'stages-bg': '#cff4fc',
        'stages-border': '#9eeaf9',
      },
    },
  },
  plugins: [],
}

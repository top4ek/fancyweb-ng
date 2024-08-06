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
        'input-bg-blue': '#BBDFF0',
        'dark-grey': '#555555',
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
        'red': '#d92839',
        'input-bg-red': '#d7939a',
        'input-focus-bg-red': '#d27e87',
        'stages-bg': '#cff4fc',
        'stages-border': '#9eeaf9',
        'info-text': '#055160',
        'warning-bg': '#f8d7da',
        'warning-border': '#f1aeb5',
        'warning-text': '#58151c',
        'green': '#138350',
        'input-bg-green': '#c3dbc9',
        'input-focus-bg-green': '#a9e0b8',
        'partition0': '#ff6961',
        'partition1': '#ffb480',
        'partition2': '#f8f38d',
        'partition3': '#42d6a4',
        'partition4': '#08cad1',
        'partition5': '#59adf6',
        'partition6': '#9d94ff',
        'partition7': '#c780e8',
      },
    },
  },
  plugins: [],
}

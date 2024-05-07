import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig((args) => {
  const { command, mode } = args;
  console.log(command, mode);
  const config = {
    serve: {
      main: () => {
        return {
          root: "./src/sites/main",
          plugins: [preact()],
        }
      },
      camera: () => {
        return {
          root: "./src/sites/camera",
          plugins: [preact()],
        }
      },
      development: () => {
        return {
          plugins: [preact()],
        }
      },
    },
    build: {
      main: () => {
        return {
          root: "./src/sites/main",
          build: {
            outDir: '../dist/main',
            emptyOutDir: true,
          },
          plugins: [preact()],
        }
      },
      camera: () => {
        return {
          root: "./src/sites/camera",
          build: {
            outDir: '../dist/camera',
            emptyOutDir: true,
          },
          plugins: [preact()],
        }
      },
      production: () => {
        return {
          plugins: [preact()],
        }
      },
    },
  };
  if (command === 'serve' && (mode === 'main' || mode === 'camera' || mode === 'development')) return config[command][mode]();
  if (command === 'build' && (mode === 'main' || mode === 'camera' || mode === 'production')) return config[command][mode]();
  throw new Error('Unknown config modifiers');
});

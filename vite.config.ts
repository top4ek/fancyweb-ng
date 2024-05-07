import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import svgr from 'vite-plugin-svgr';

const svgrOpts = {
  include: '**/*.svg?react',
  exclude: '',
}

// https://vitejs.dev/config/
export default defineConfig((args) => {
  const { command, mode } = args;
  console.log(command, mode);
  const config = {
    serve: {
      main: () => {
        return {
          root: "./src/sites/main",
          plugins: [preact(), svgr(svgrOpts)],
        }
      },
      camera: () => {
        return {
          root: "./src/sites/camera",
          plugins: [preact(), svgr(svgrOpts)],
        }
      },
      development: () => {
        return {
          plugins: [preact(), svgr(svgrOpts)],
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
          plugins: [preact(), svgr(svgrOpts)],
        }
      },
      camera: () => {
        return {
          root: "./src/sites/camera",
          build: {
            outDir: '../dist/camera',
            emptyOutDir: true,
          },
          plugins: [preact(), svgr(svgrOpts)],
        }
      },
      production: () => {
        return {
          plugins: [preact(), svgr(svgrOpts)],
        }
      },
    },
  };
  if (command === 'serve' && (mode === 'main' || mode === 'camera' || mode === 'development')) return config[command][mode]();
  if (command === 'build' && (mode === 'main' || mode === 'camera' || mode === 'production')) return config[command][mode]();
  throw new Error('Unknown config modifiers');
});

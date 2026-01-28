import { defineConfig } from 'vite';

export default defineConfig({
  base: '/phaser-test/',
  build: {
    outDir: 'dist',
  },
  rollupOptions: {
    output: {
      assetFileNames: (assetInfo) => {
        let extType = assetInfo.name.split('.').at(1);
        if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
          extType = 'img';
        }
        return `assets/[name]-[hash][extname]`;
      },
      chunkFileNames: 'assets/[name]-[hash].js',
      entryFileNames: 'assets/[name]-[hash].js',
    }
  },
});

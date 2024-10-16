import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import libCss from 'vite-plugin-libcss';
export default defineConfig({
  plugins: [react(),libCss()],
  build: {
    lib: {
      // 打包入口
      entry: path.resolve('src', 'main.tsx'),
      name: 'x-button',
      // 文件名称
      fileName: 'index',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
            react: 'React',
        },
      },
    },
    // 打包输出目录
    outDir: 'lib/dist', 
  },
})

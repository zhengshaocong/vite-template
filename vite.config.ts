import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Component from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Component({
            resolvers: [VantResolver()],
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/styles/variables.scss";',
            },
        },
    },
    server: {
        port: 3001,
        host: '0.0.0.0', // 允许通过IP地址访问
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
});

import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') }
        ]
    },
    server: {
        proxy: {
            '/api/insult': {
                target: 'https://evilinsult.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/insult/, '/generate_insult.php')
            }
        }
    },
});

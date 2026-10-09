import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base '/' vale para o repositório <usuario>.github.io (site na raiz do domínio).
export default defineConfig({ plugins: [vue()] })

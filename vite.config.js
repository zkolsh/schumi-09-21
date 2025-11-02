import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				admin: resolve(__dirname, 'admin.html')
			}
		}
	},
	plugins: [
		tailwindcss(),
	],
	base: '/~veinticinco/',
})

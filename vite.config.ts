import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

const manifestPlugin: Partial<VitePWAOptions> = {
	registerType: 'prompt',
	includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
	manifest: {
		name: 'Ed base',
		short_name: 'EdBase',
		start_url: '/',
		scope: '/',
		display: 'standalone',
		background_color: '#000',
		theme_color: '#171717',
		lang: 'ru',
		icons: [
			{
				src: './icons/icon192.png',
				type: 'image/png',
				sizes: '192x192',
				purpose: 'monochrome'
			},
			{
				src: './icons/icon512.png',
				type: 'image/png',
				sizes: '512x512',
				purpose: 'any'
			},
			{
				src: './icons/icon180.png',
				type: 'image/png',
				sizes: '180x180',
				purpose: 'any'
			},
			{
				src: './icons/icon225.png',
				type: 'image/png',
				sizes: '225x225',
				purpose: 'maskable'
			}
		]
	}
}

// https://vitejs.dev/config/

export default defineConfig({
	plugins: [react(), VitePWA(manifestPlugin)],
	resolve: {
		alias: {
			src: '/src'
		}
	}
})

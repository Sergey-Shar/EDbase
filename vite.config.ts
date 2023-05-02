import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'


const manifestPlugin: Partial<VitePWAOptions> = {
	registerType: 'prompt',
	includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.png'],
	manifest: {
		name: 'Simplase',
		short_name: 'Simplase',
		lang: 'ru',
		icons: [
			{
				src: 'icon192x192.png',
				type: 'image/png',
				sizes: '192x192',
				purpose: 'monochrome'
			},
			{
				src: 'icon512x512.png',
				type: 'image/png',
				sizes: '512x512',
				purpose: 'any'
			},
			{
				src: 'icon180x180.png',
				type: 'image/png',
				sizes: '180x180',
				purpose: 'any'
			},
			{
				src: 'maskable_icon.png',
				type: 'image/png',
				sizes: '192x192',
				purpose: 'maskable'
			}
		],
		theme_color: '#171717',
		background_color: '#e8ebf2',
		display: 'standalone',
		scope: '/',
		start_url: '/src'
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

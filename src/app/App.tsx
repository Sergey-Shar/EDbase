import { MantineProvider } from '@mantine/core'
import { useMemo, useState } from 'react'
import { ColorModeContext } from 'src/context/theme.context'
import { useLocalStorage } from 'src/hooks'
import { MainPage } from '../pages'
import './index.css'

export const App = () => {
	
	const { value, setValue } = useLocalStorage<'light' | 'dark'>('light', 'theme')

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setValue((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
			},
		}),
		[]
	)

	return (
		<ColorModeContext.Provider value={colorMode}>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{ colorScheme: `${value}` }}
			>
				<MainPage />
			</MantineProvider>
		</ColorModeContext.Provider>
	)
}

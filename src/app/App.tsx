import { MantineProvider } from '@mantine/core'
import { useTheme } from 'src/context/theme/theme.context'
import { MainPage } from '../pages'

import './index.css'
import { Notifications } from '@mantine/notifications'
import { useEffect } from 'react'
import { TranslationProvider } from 'src/context/language/translation.context'

export const App = () => {
	const value = useTheme()
	return (

			<TranslationProvider>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{ colorScheme: `${value}` }}
				>
					<Notifications
						id="notification"
						position="top-center"
						limit={2}
						zIndex={2077}
					/>
					<MainPage />
				</MantineProvider>
			</TranslationProvider>
	)
}

import { MantineProvider } from '@mantine/core'
import { useTheme } from 'src/context/theme.context'
import { MainPage } from '../pages'
import './index.css'

export const App = () => {
const value = useTheme()
	return (
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{ colorScheme: `${value}` }}
			>
				<MainPage />
			</MantineProvider>
	)
}

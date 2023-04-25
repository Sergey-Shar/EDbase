import ReactDOM from 'react-dom/client'
import { App } from './app/App'
import { ThemeProvider } from './context/theme/theme.context'
import { TranslationProvider } from './context/language/translation.context'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ThemeProvider>
		<TranslationProvider>
			<App />
		</TranslationProvider>
	</ThemeProvider>
)

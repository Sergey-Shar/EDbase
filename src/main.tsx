import ReactDOM from 'react-dom/client'
import { App } from './app/App'
import { ThemeProvider } from './context/theme/theme.context'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ThemeProvider>
		<App />
	</ThemeProvider>
)

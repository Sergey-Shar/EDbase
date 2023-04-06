import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { createContext, useContext, useMemo } from 'react'
import { useLocalStorage } from 'src/hooks'

type ThemeModeType = 'dark' | 'light'
type ChangeThemeModeType = { toggleColorMode: () => void }

const ThemeMode = createContext<ThemeModeType>('light')
const ChangeThemeMode = createContext<ChangeThemeModeType>({
	toggleColorMode: () => {}
})

export const useTheme = () => {
	return useContext(ThemeMode)
}

export const useChangeTheme = () => {
	return useContext(ChangeThemeMode)
}

export const ThemeProvider = ({ children }: { children: ReactJSXElement }) => {
	const { value, setValue } = useLocalStorage<'light' | 'dark'>('light', 'theme')

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setValue((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
			}
		}),
		[]
	)

	return (
		<ThemeMode.Provider value={value}>
			<ChangeThemeMode.Provider value={colorMode}>
				{children}
			</ChangeThemeMode.Provider>
		</ThemeMode.Provider>
	)
}

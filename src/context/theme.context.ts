import { createContext } from "react"

type ThemeContextType = { toggleColorMode: () => void }

export const ColorModeContext = createContext<ThemeContextType>({
	toggleColorMode: () => {},
})

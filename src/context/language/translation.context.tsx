import { createContext, useContext, useMemo, useState } from 'react'
import { dictionary } from './dictionary'
import { LanguageTypes, TranslationContextType } from './translation.types'
import { useLocalStorage } from 'src/hooks'

const TranslationContext = createContext<TranslationContextType>({
	language: 'ru',
	dictionary: dictionary,
	setLanguage: () => {},
	t: (key: string) => key
})

export const useTranslation = () => useContext(TranslationContext)

type Props = {
	children: React.ReactNode
}

export const TranslationProvider = ({ children }: Props) => {
	const { value: language, setValue: setLanguage } =
		useLocalStorage<LanguageTypes>('ru', 'language')

	const providerValue = useMemo(() => {
		const t: (key: string) => string = (key: string) => {
			return dictionary[language][key] || key
		}
		return {
			language,
			dictionary,
			setLanguage,
			t
		}
	}, [language])

	return (
		<TranslationContext.Provider value={providerValue}>
			{children}
		</TranslationContext.Provider>
	)
}

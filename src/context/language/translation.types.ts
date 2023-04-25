type Translation = {
	[key: string]: string
}
export type LanguageTypes = 'ru' | 'en'

export type LanguageTranslation = {
	[key: string]: Translation
}

export type TranslationContextType = {
	language: LanguageTypes
	dictionary: LanguageTranslation
	setLanguage: (language: LanguageTypes) => void
	t: (key: string) => string
}

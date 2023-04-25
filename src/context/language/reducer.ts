import { State, Action } from './translation.types'
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from './dictionary'

const initialState: State = {
	language: DEFAULT_LANGUAGE,
	translations: {
		en: {},
		ru: {}
	}
}

export const translationReducer = (
	state = initialState,
	action: Action
): State => {
	switch (action.type) {
		case 'SET_LANGUAGE': {
			const language = SUPPORTED_LANGUAGES.includes(action.payload)
				? action.payload
				: DEFAULT_LANGUAGE
			return { ...state, language }
		}
		default: {
			return state
		}
	}
}

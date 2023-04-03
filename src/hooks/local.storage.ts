import { useEffect, useLayoutEffect, useState } from 'react'

const getValue = <T>(initialValue: T, key: string): T => {
	const storage = localStorage.getItem(key)

	if (storage !== null) {
		return JSON.parse(storage)
	}
	if (initialValue instanceof Function) {
		return initialValue()
	}
	return initialValue
}

export function useLocalStorage<T>(initialValue: T, key: string) {
	const [value, setValue] = useState(() => getValue(initialValue, key))

	useLayoutEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [value])

	return { value, setValue }
}

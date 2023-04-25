import { AxiosError, isAxiosError } from 'axios'
import { showNotification } from './showNotification'

export const errorHandler = (error: AxiosError | Error) => {
	if (isAxiosError(error)) {
		if (error.response) {
			showNotification(
				'red',
				'Error',
				`${error.response.status} ${error.response.statusText}`,
				false
			)
		} else if (error.request) {
			showNotification('red', 'Error', error.request, false)
		} else {
			showNotification('red', 'Error', error.message, false)
		}
	} else {
		showNotification('red', 'Error', error.message, false)
	}
}

import { notifications } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons-react'

const messageNotification = 'Спасибо, вы добавлены в лист ожидания!'
export const showNotification = (
	color: string,
	title: string,
	message = messageNotification,
	isIcon = true
) =>
	notifications.show({
		color: color,
		autoClose: true,
		title: title,
		message: message,
		icon: isIcon && <IconCheck size="1rem" />
	})

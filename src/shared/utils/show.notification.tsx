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
		styles: (theme) => ({
			root: {
				backgroundColor:
					theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
			}
		}),
		color: color,
		autoClose:true,
		title: title,
		message: message,
		icon: isIcon && <IconCheck size="1rem" />
	})

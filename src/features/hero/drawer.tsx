import {
	Drawer,
	Group,
	Button,
	TextInput,
	Text,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { randomId } from '@mantine/hooks'

import { isAxiosError } from 'axios'
import api from 'src/app/services/api'
import { showNotification } from 'src/shared/utils/showNotification'



export const DrawerReviews = ({
	opened,
	close
}: {
	opened: boolean
	close: () => void
}) => {

const form = useForm({
	initialValues: {
		name: '',
		telegram: ''
	},
	validate: {
		name: (value) => value.trim().length < 2,
		telegram: (value) => value.trim().length < 2
	}
})

 const handleSubmit  =  form.onSubmit((userData) => {
		try {
			api.submitNicknameTelegram('user.json', {
				...userData,
				_id: randomId()
			})
			close()
			form.reset()
			showNotification('teal', userData.name)
		} catch (error) {
			if (isAxiosError(error)) {
				showNotification('red', 'Error', error?.message, false)
			} else {
				console.log(error)
			}
		}
	})


	return (
		<>
			<Drawer
				zIndex={50000}
				opened={opened}
				onClose={close}
				title="Лист ожидания"
				overlayProps={{ opacity: 0.5, blur: 4 }}
			>
				<form onSubmit={handleSubmit}>
					<TextInput
						data-autofocus
						label="Имя"
						placeholder="Ваше имя"
						name="name"
						variant="filled"
						{...form.getInputProps('name')}
					/>
					<TextInput
						label="Никнейм"
						placeholder="Ваш никнейм в телеграм"
						name="telegram"
						variant="filled"
						{...form.getInputProps('telegram')}
					/>
					<Group mt="xl">
						<Button type="submit" size="md">
							Отправить
						</Button>
					</Group>
				</form>
				<Text style={{ marginTop: '2rem' }}>
					Спасибо, что заинтересовались нашим приложением! Мы все еще работаем над
					ним, чтобы сделать его максимально полезным и удобным для вас. Оставьте
					свой контакт в листе ожидания и получите одним из первых рабочую версию
					нашего продукта.
				</Text>
			</Drawer>
		</>
	)
}

import {
	TextInput,
	Textarea,
	SimpleGrid,
	Group,
	Title,
	Button,
	Container
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useStyles } from './styles'
import { IconAt, IconUser, IconMessage2Check } from '@tabler/icons-react'
import { randomId } from '@mantine/hooks'

import { isAxiosError } from 'axios'
import { showNotification } from 'src/shared/utils/showNotification'
import api from 'src/app/services/api'
import { useState } from 'react'

export const Contacts = () => {
	const [isDisable, setDisable ] = useState(false)
	const formMessage = useForm({
		initialValues: {
			name: '',
			email: '',
			message: ''
		},
		validate: {
			name: (value) => value.length < 2 ? 'Поле не должно быть пустым' : null,
			email: (value) =>
				!/^\S+@\S+$/.test(value) ? 'Email введен не корректно' : null,

		}
	})

	const { classes } = useStyles()

	const handleSubmit = formMessage.onSubmit(async (userData) => {
		setDisable(true)
		//@ts-ignore
		window.ym(93141352, 'reachGoal', 'submit')
		try {
			api.sendMessage('message.json', {
				...userData,
				_id: randomId()
			})
			formMessage.reset()
			showNotification(
				'teal',
				userData.name,
				'Сообщение успешно отправлено, спасибо за ваш отзыв!'
			)
		} catch (error) {
			if (isAxiosError(error)) {
				showNotification('red', 'Error', error?.message, false)
			} else if (error instanceof Error) {
				showNotification('red', 'Error', error?.message, false)
			}
		} finally {
			setDisable(false)
		}
	})

	return (
		<div id="contacts" className={classes.wrapper}>
			<Container size="md">
				<Title
					order={2}
					size="h1"
					sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
					align="center"
				>
					Связаться
				</Title>
				<form onSubmit={handleSubmit}>
					<SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
						<TextInput
							data-autofocus
							icon={<IconUser size={'1rem'} />}
							label="Имя"
							placeholder="Ваше имя"
							name="name"
							variant="filled"
							{...formMessage.getInputProps('name')}
						/>
						<TextInput
							icon={<IconAt size="1rem" />}
							label="Почта"
							placeholder="Ваша почта"
							name="email"
							variant="filled"
							{...formMessage.getInputProps('email')}
						/>
					</SimpleGrid>
					<Textarea
						mt="md"
						label="Сообщение "
						placeholder="Ваше сообщение "
						maxRows={10}
						minRows={5}
						autosize
						name="message"
						variant="filled"
						{...formMessage.getInputProps('message')}
					/>
					<Group position="center" mt="xl">
						<Button disabled={isDisable} type="submit" size="md">
							Отправить сообщение
						</Button>
					</Group>
				</form>
			</Container>
		</div>
	)
}

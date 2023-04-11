import {
	TextInput,
	SimpleGrid,
	Group,
	Title,
	Button,
	Container
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useStyles } from './styles'
import { randomId } from '@mantine/hooks'
import api from 'src/app/services/api'
import { showNotification } from 'src/shared/utils/showNotification'
import { isAxiosError } from 'axios'
import { IconBrandTelegram, IconUser } from '@tabler/icons-react'
import { useState } from 'react'

export const WaitingList = () => {
		//const [isDisable, setDisable] = useState(false)
	// const form = useForm({
	// 	initialValues: {
	// 		name: '',
	// 		telegram: ''
	// 	},
	// 	validate: {
	// 		name: (value) => (value.length < 2 ? 'Поле не должно быть пустым' : null),
	// 		telegram: (value) => {
	// 			if (value.length < 2) {
	// 				return 'Поле не должно быть пустым'
	// 			} else if (!/@/g.test(value)) {
	// 				return 'Укажите символ @ перед вашим ником'
	// 			}
	// 		}
	// 	}
	// })

	const { classes } = useStyles()

	// const handleSubmit = form.onSubmit(async (userData) => {
	// 	setDisable(true)
	// 	//@ts-ignore
	// 	window.ym(93141352, 'reachGoal', 'submit')
	// 	try {
	// 		api.submitNicknameTelegram('user.json', {
	// 			...userData,
	// 			_id: randomId()
	// 		})
	// 		form.reset()
	// 		showNotification('teal', userData.name)
	// 	} catch (error) {
	// 		if (isAxiosError(error)) {
	// 			showNotification('red', 'Error', error?.message, false)
	// 		} else if (error instanceof Error) {
	// 			showNotification('red', 'Error', error?.message, false)
	// 		}
	// 	} finally {
	// 		setDisable(false)
	// 	}
	// })

	return (
		<>
			<div id="waiting" className={classes.wrapper}>
				<Container size="xs">
					<Title
						order={2}
						size="h1"
						sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
						align="center"
					>
						Возьми под контроль хаос в своих знаниях!
					</Title>
					<Container size={640}></Container>
					{/* <form onSubmit={handleSubmit}>
						<SimpleGrid cols={1} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
							<TextInput
								required
								data-autofocus
								icon={<IconUser size={'1rem'} />}
								label="Имя"
								placeholder="Ваше имя"
								name="name"
								variant="filled"
								{...form.getInputProps('name')}
							/>
							<TextInput
								required
								icon={<IconBrandTelegram size={'1rem'} />}
								label="Телеграм"
								placeholder="Ваш телеграм"
								name="telegram"
								variant="filled"
								description="Введите ваш ник в телеграм в формате @nickname"
								inputWrapperOrder={['label', 'error', 'input', 'description']}
								{...form.getInputProps('telegram')}
							/>
						</SimpleGrid>
					</form> */}
					<Group position="center" mt="xl">
						<a
							href="https://t.me/EdBase_bot"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button type="button" size="md">
								Пробовать
							</Button>
						</a>
					</Group>
				</Container>
			</div>
		</>
	)
}

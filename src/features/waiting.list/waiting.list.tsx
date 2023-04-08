import {
	TextInput,
	SimpleGrid,
	Group,
	Title,
	Button,
	Container,
	Text,
	Notification,
	Alert
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useStyles } from './styles'
import axios from 'axios'
import { randomId } from '@mantine/hooks'
import { BASE_URL } from '../hero/drawer'
import { useState } from 'react'
import { IconAlertCircle, IconCheck } from '@tabler/icons-react'

export const WaitingList = () => {
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

	const { classes } = useStyles()
	const [isShowNotic, setIsShowNotic] = useState(false)
	const [name, setName] = useState('')

	const handleSubmit = form.onSubmit((userName) => {
		axios
			.post(BASE_URL, {
				userName: {
					...userName,
					_id: randomId()
				}
			})
			.then((res) => console.log(res))
			.then(() => {
				setName(userName.name)
				setIsShowNotic(true)
			})
			.finally(() => {
				form.reset()
				setTimeout(() => {
					setIsShowNotic(false)
					setName('')
				}, 2500)
			})
	})

	return (
		<>
			<div id="contacts" className={classes.wrapper}>
				<Container size="xs" style={{ position: 'relative' }}>
					{isShowNotic && (
						<Notification
							top={-90}
							style={{ position: 'absolute'}}
							withCloseButton={false}
							icon={<IconCheck size="1.2rem" />}
							title={name}
						>
							Спасибо! Вы добавлены в лист ожидания.
						</Notification>
					)}
					<Title
						order={2}
						size="h1"
						sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
						align="center"
					>
						Пробовать
					</Title>
					<Container size={640}>
						<Text color="dimmed" size="md" className={classes.description}>
							Возьми под контроль хаос в своих знаниях уже сегодня!
						</Text>
					</Container>
					<form onSubmit={handleSubmit}>
						<SimpleGrid cols={1} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
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
						</SimpleGrid>
						<Group position="center" mt="xl">
							<Button type="submit" size="md">
								Отправить
							</Button>
						</Group>
					</form>
				</Container>
			</div>
		</>
	)
}

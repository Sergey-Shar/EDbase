import {
	TextInput,
	SimpleGrid,
	Group,
	Title,
	Button,
	Container,
	Text
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useStyles } from './styles'
import { randomId } from '@mantine/hooks'
import api from 'src/app/services/api'
import { showNotification } from 'src/shared/utils/showNotification'
import { isAxiosError }  from 'axios'

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

	const handleSubmit = form.onSubmit(async (userData) => {
		try {
			api.submitNicknameTelegram('user.json', {
				...userData,
				_id: randomId()
			})
			form.reset()
			showNotification(
				'teal',
				userData.name,
			)
		} catch (error) {
			 if(isAxiosError(error)){
   showNotification('red', 'Error', error?.message, false)
				} 
				else if( error instanceof Error){
					showNotification('red', 'Error', error?.message, false)
				}
		}
	})

	return (
		<>
			<div id="contacts" className={classes.wrapper}>
				<Container size="xs">
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

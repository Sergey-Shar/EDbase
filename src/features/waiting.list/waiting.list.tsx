import {
	TextInput,
	Textarea,
	SimpleGrid,
	Group,
	Title,
	Button,
	Container,
 Text 
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useStyles } from './styles'

export const WaitingList = () => {
	const form = useForm({
		initialValues: {
			name: '',
			email: '',
			subject: '',
			message: ''
		},
		validate: {
			name: (value) => value.trim().length < 2,
			email: (value) => !/^\S+@\S+$/.test(value),
			subject: (value) => value.trim().length === 0
		}
	})

	const { classes } = useStyles()

	return (
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
					<Text size="md" className={classes.description}>
						Спасибо, что заинтересовались нашим приложением! Мы все еще работаем над
						ним, чтобы сделать его максимально полезным и удобным для вас. Оставьте
						свой контакт в листе ожидания и получите одним из первых рабочую версию
						нашего продукта.
					</Text>
				</Container>
				<form onSubmit={form.onSubmit(() => {})}>
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
							label="Почта"
							placeholder="Ваша почта"
							name="email"
							variant="filled"
							{...form.getInputProps('email')}
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
	)
}

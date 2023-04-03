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

export const Contacts = () => {
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
		<Container size="md" className={classes.wrapper}>
			<form onSubmit={form.onSubmit(() => {})}>
				<Title
					order={2}
					size="h1"
					sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
					weight={900}
					align="center"
				>
					Связаться 
				</Title>

				<SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
					<TextInput
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

				<Textarea
					mt="md"
					label="Сообщение "
					placeholder="Ваше сообщение "
					maxRows={10}
					minRows={5}
					autosize
					name="message"
					variant="filled"
					{...form.getInputProps('message')}
				/>

				<Group position="center" mt="xl">
					<Button type="submit" size="md">
					Отправить сообщение
					</Button>
				</Group>
			</form>
		</Container>
	)
}

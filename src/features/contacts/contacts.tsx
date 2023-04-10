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

export const Contacts = () => {
	const form = useForm({
		initialValues: {
			name: '',
			email: '',
			subject: '',
			message: ''
		},
		validate: {
			name: (value) => (value.length < 2 ? 'Поле не должно быть пустым' : null),
			email: (value) => !/^\S+@\S+$/.test(value) ?  'Email введен не корректно' : null,
			subject: (value) => value.trim().length === 0 ? 'Поле не должно быть пустым' : null
		}
	})

const { classes } = useStyles() 

	return (
		<div id="contacts" className={classes.wrapper}>
			<Container size="md">
				<form onSubmit={form.onSubmit(() => {})}>
					<Title
						order={2}
						size="h1"
						sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
						align="center"
					>
						Связаться
					</Title>

					<SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
						<TextInput
							data-autofocus
							icon={<IconUser size={'1rem'} />}
							label="Имя"
							placeholder="Ваше имя"
							name="name"
							variant="filled"
							{...form.getInputProps('name')}
						/>
						<TextInput
							icon={<IconAt size="1rem" />}
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
		</div>
	)
}

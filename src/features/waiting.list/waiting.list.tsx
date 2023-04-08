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
		telegram: ''
	},
	validate: {
		telegram: (value) => value.trim().length < 2
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
					<Text color="dimmed" size="md" className={classes.description}>
						Возьми под контроль хаос в своих знаниях уже сегодня!
					</Text>
				</Container>
				<form onSubmit={form.onSubmit(() => {})}>
					<SimpleGrid cols={1} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
						<TextInput
							data-autofocus
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
	)
}

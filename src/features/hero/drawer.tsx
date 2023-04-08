
import { Drawer, Group, Button, TextInput, Text } from '@mantine/core'
import { useForm } from '@mantine/form'

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
			email: '',
		},
		validate: {
			name: (value) => value.trim().length < 2,
			email: (value) => !/^\S+@\S+$/.test(value),
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
				<form onSubmit={form.onSubmit(() => {})}>
					<TextInput data-autofocus label="Имя" placeholder="Ваше имя" />
					<TextInput label="Почта" placeholder="Ваша почта" mt="md" />
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

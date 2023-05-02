import {
	TextInput,
	Textarea,
	SimpleGrid,
	Group,
	Title,
	Button,
	Container,
	LoadingOverlay,
	Box
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useStyles } from './styles'
import { IconAt, IconUser } from '@tabler/icons-react'
import { randomId } from '@mantine/hooks'
import { showNotification } from 'src/shared/utils/showNotification'
import api from 'src/app/services/api'
import { useState } from 'react'
import { errorHandler } from 'src/shared/utils/handle.errors'
import { AxiosError } from 'axios'
import { useTranslation } from 'src/context/language/translation.context'

export const Contacts = () => {
	const [isLoading, setLoading] = useState(false)
	const formMessage = useForm({
		initialValues: {
			name: '',
			email: '',
			message: ''
		},
		validate: {
			email: (value) =>
				!/^\S+@\S+$/.test(value) ? 'Email введен не корректно' : null,
			message: (value) =>
				value.trim() === '' || value.trim().length < 5
					? 'Поле не может быть пустым'
					: null
		}
	})

	const { classes } = useStyles()
 const { t } = useTranslation() 

	const handleSubmit = formMessage.onSubmit(async (userData) => {
		setLoading(true)
		try {
			if (!userData) {
				throw new Error('userData is undefined')
			}
			await api.sendMessage('message.json', {
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
			errorHandler(error as AxiosError | Error)
		} finally {
			setLoading(false)
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
					{t('contactsTitle')}
				</Title>
				<Box pos="relative">
					<LoadingOverlay
						loaderProps={{ color: '#FFD200', variant: 'dots' }}
						visible={isLoading}
						overlayBlur={2}
					/>
					<form noValidate onSubmit={handleSubmit}>
						<SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
							<TextInput
								data-autofocus
								icon={<IconUser aria-hidden="true" size={'1rem'} />}
								label={t('contactFormLabelName')}
								placeholder={t('contactFormPlaceholderName')}
								name="name"
								variant="filled"
								{...formMessage.getInputProps('name')}
							/>
							<TextInput
								required
								icon={<IconAt aria-hidden="true" size="1rem" />}
								label={t('contactFormLabelMail')}
								placeholder={t('contactFormPlaceholderMail')}
								name="email"
								variant="filled"
								{...formMessage.getInputProps('email')}
							/>
						</SimpleGrid>
						<Textarea
							minLength={10}
							required
							mt="md"
							label={t('contactFormLabelMessage')}
							placeholder={t('contactFormPlaceholderMessage')}
							maxRows={10}
							minRows={5}
							autosize
							name="message"
							variant="filled"
							{...formMessage.getInputProps('message')}
						/>
						<Group position="center" mt="xl">
							<Button
								mt={15}
								className={classes.button}
								type="submit"
								radius="xl"
								size="md"
							>
								{t('contactsSubmitBtn')}
							</Button>
						</Group>
					</form>
				</Box>
			</Container>
		</div>
	)
}

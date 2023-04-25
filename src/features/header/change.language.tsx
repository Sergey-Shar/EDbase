import { useTranslation } from 'src/context/language/translation.context'
import { IconLanguage } from '@tabler/icons-react'
import { Button, Menu } from '@mantine/core'

export const LanguageMenu = () => {
	const { setLanguage } = useTranslation()

	return (
		<Menu shadow="md" width={50}>
			<Menu.Target>
				<Button
					aria-label="кнопка переключения языка приложения"
					size="xs"
					variant="subtle"
					color="gray"
				>
					<IconLanguage />
				</Button>
			</Menu.Target>
			<Menu.Dropdown>
				<Menu.Item onClick={() => setLanguage('ru')}>RU</Menu.Item>
				<Menu.Item onClick={() => setLanguage('en')}>EN</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	)
}

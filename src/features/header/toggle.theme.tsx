import { Switch } from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons-react'
import { useChangeTheme } from 'src/context/theme/theme.context'
import { useLocalStorage } from 'src/hooks'
import { useStyles } from './styles'

export const ButtonToggleTheme = ({className = ''}) => {
	const { theme } = useStyles()
	const { value: checked, setValue: setChecked } = useLocalStorage<boolean>(
		false,
		'isChecked'
	)

	const toggleChecked = () => {
		setChecked((prev) => !prev)
		toggleColorMode()
	}

	const { toggleColorMode } = useChangeTheme()

	return (
		<Switch
		className={className}
			aria-label="Переключение темы приложения"
			role="radio"
			aria-checked="false"
			checked={checked}
			onChange={toggleChecked}
			size="md"
			color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
			onLabel={
				<IconSun
					aria-hidden="true"
					size="1rem"
					stroke={2.5}
					color={theme.colors.yellow[4]}
				/>
			}
			offLabel={
				<IconMoonStars
					aria-hidden="true"
					size="1rem"
					stroke={2.5}
					color={theme.colors.dark[3]}
				/>
			}
		/>
	)
}

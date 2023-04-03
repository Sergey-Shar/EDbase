import {
 Switch
} from '@mantine/core'

import {  IconMoonStars, IconSun } from '@tabler/icons-react'
import { useContext } from 'react'
import { ColorModeContext } from 'src/context/theme.context'
import { useLocalStorage } from 'src/hooks'
import { useStyles } from './styles'


export const ButtonToggleTheme = ()  => {
 	const { theme } = useStyles()
 	const { value: checked, setValue: setChecked } = useLocalStorage<boolean>(
			false,
			'isChecked'
		)

		const toggleChecked = () => {
			setChecked((prev) => !prev)
			toggleColorMode()
		}

		const { toggleColorMode } = useContext(ColorModeContext)

	return (
		<Switch
			checked={checked}
			onChange={toggleChecked}
			size="md"
			color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
			onLabel={<IconSun size="1rem" stroke={2.5} color={theme.colors.yellow[4]} />}
			offLabel={
				<IconMoonStars size="1rem" stroke={2.5} color={theme.colors.blue[6]} />
			}
		/>
	)
}

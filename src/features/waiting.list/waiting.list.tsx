import {
	Group,
	Title,
	Button,
	Container,
	Tooltip,
} from '@mantine/core'
import { useStyles } from './styles'
import { useTranslation } from 'src/context/language/translation.context'
export const WaitingList = () => {
	const { classes } = useStyles()
		const { t } = useTranslation()
	return (
		<div id="waiting" className={classes.wrapper}>
			<Container size="xs">
				<Title
					mt="5%"
					order={2}
					size="h1"
					sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
					align="center"
				>
					{t('waitingListTitle')}
				</Title>
				<Group position="center" mt="xl">
					<a
						href="https://t.me/EdBase_bot"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button className={classes.button} type="button" radius="xl" size="md">
							{t('heroButtonLeft')}
						</Button>
					</a>
				</Group>
			</Container>
		</div>
	)
}

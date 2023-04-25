import {
	Group,
	Title,
	Button,
	Container,
	Tooltip,
} from '@mantine/core'
import { useStyles } from './styles'
export const WaitingList = () => {

	const { classes } = useStyles()
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
					Возьми под контроль хаос в своих знаниях!
				</Title>
				<Group position="center" mt="xl">
						<a
							href="https://t.me/EdBase_bot"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button className={classes.button} type="button" size="md">
								Перейти в чат
							</Button>
						</a>
				</Group>
			</Container>
		</div>
	)
}

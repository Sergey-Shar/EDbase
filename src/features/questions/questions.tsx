import { Container, Title, Accordion, createStyles, rem } from '@mantine/core'
import { useStyles } from './styles'

const placeholder =
	'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.'

export const  Questions = ()  => {
	const { classes } = useStyles()
	return (
		<Container id="questions" size="xl" className={classes.wrapper}>
			<Title align="center" className={classes.title}>
				Часто задаваемые вопросы
			</Title>

			<Accordion variant="separated">
				<Accordion.Item className={classes.item} value="reset-password">
					<Accordion.Control>Вопрос ?</Accordion.Control>
					<Accordion.Panel>{placeholder}</Accordion.Panel>
				</Accordion.Item>

				<Accordion.Item className={classes.item} value="another-account">
					<Accordion.Control>Вопрос ?</Accordion.Control>
					<Accordion.Panel>{placeholder}</Accordion.Panel>
				</Accordion.Item>

				<Accordion.Item className={classes.item} value="newsletter">
					<Accordion.Control>Вопрос ?</Accordion.Control>
					<Accordion.Panel>{placeholder}</Accordion.Panel>
				</Accordion.Item>

				<Accordion.Item className={classes.item} value="credit-card">
					<Accordion.Control>Вопрос ?</Accordion.Control>
					<Accordion.Panel>{placeholder}</Accordion.Panel>
				</Accordion.Item>

				<Accordion.Item className={classes.item} value="payment">
					<Accordion.Control>Вопрос ?</Accordion.Control>
					<Accordion.Panel>{placeholder}</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
		</Container>
	)
}

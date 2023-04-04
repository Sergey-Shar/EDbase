import { Container, Title, Accordion, createStyles, rem } from '@mantine/core'
import { useStyles } from './styles'

const placeholder = `Lorem ipsum dolor sit 
amet consectetur adipisicing elit. 
Vero impedit itaque voluptatem, ducimus quos 
nisi nesciunt mollitia officia animi laborum. 
Debitis ratione totam ea numquam magnam asperiores 
repudiandae qui minus.`

export const Questions = () => {
	const { classes } = useStyles()
	return (
		<div className={classes.wrapper}>
			<Container id="questions" size="xl">
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
		</div>
	)
}

import { Container, Title, Accordion, createStyles, rem } from '@mantine/core'
import { useStyles } from './styles'
import { ACCORDION_PLACEHOLDER } from './mock.data'

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
				{ACCORDION_PLACEHOLDER.map((questions) => (
					<Accordion key={questions._id} variant="separated">
						<Accordion.Item className={classes.item} value={questions.question}>
							<Accordion.Control>{questions.question}</Accordion.Control>
							<Accordion.Panel>{questions.answer}</Accordion.Panel>
						</Accordion.Item>
					</Accordion>
				))}
			</Container>
		</div>
	)
}

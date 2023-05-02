import { Container, Title, Accordion, createStyles, rem } from '@mantine/core'
import { useStyles } from './styles'
import { ACCORDION_PLACEHOLDER } from './mock.data'
import { useTranslation } from 'src/context/language/translation.context'

export const Questions = () => {
	const { classes } = useStyles()
	const { t } = useTranslation()
	return (
		<div className={classes.wrapper}>
			<Container id="questions" size="xl">
				<Title align="center" className={classes.title}>
					{t('questionsTitleSection')}
				</Title>
				{ACCORDION_PLACEHOLDER.map((questions) => (
					<Accordion key={questions._id} variant="separated">
						<Accordion.Item
							className={classes.item}
							value={t(`questions${questions._id}`)}
						>
							<Accordion.Control>{t(`questions${questions._id}`)}</Accordion.Control>
							<Accordion.Panel>{t(`answer${questions._id}`)}</Accordion.Panel>
						</Accordion.Item>
					</Accordion>
				))}
			</Container>
		</div>
	)
}

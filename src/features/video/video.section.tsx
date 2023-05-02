import { Container, Title } from '@mantine/core'
import { useStyles } from './styles'
import { VideoPlayer } from 'src/shared/videoPlayer'
import { useTranslation } from 'src/context/language/translation.context'

export const VideoSection = () => {
	const { classes } = useStyles()
		const { t } = useTranslation()
	return (
		<div className={classes.wrapper}>
			<Container size="lg">
				<Title align="center" className={classes.title}>
					{t('howItWorks')}
				</Title>
				<VideoPlayer />
			</Container>
		</div>
	)
}

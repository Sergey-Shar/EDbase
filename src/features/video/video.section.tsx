import { Container, Title } from '@mantine/core'
import { useStyles } from './styles'
import { VideoPlayer } from 'src/shared/videoPlayer'

export const VideoSection = () => {
	const { classes } = useStyles()
	return (
		<div className={classes.wrapper}>
			<Container id="questions" size="xl">
				<Title align="center" className={classes.title}>
					Как это работает?
				</Title>
				<VideoPlayer />
			</Container>
		</div>
	)
}

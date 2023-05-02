import { Text, Title, Image, Container } from '@mantine/core'
import teamImage from 'src/assets/images/team.png'
import { useStyles } from './styles'
import { useTranslation } from 'src/context/language/translation.context'

export const About = () => {
	const { classes } = useStyles()
		const { t } = useTranslation()
	return (
		<div id="about" className={classes.wrapper}>
			<Container size="xl">
				<div className={classes.body}>
					<div className={classes.content}>
						<Title className={classes.title}>{t('OurTeam')}</Title>
						<Text className={classes.text} c="dimmed">
							{t('OurTeamDescription1')}
							<br />
							{t('OurTeamDescription2')}
							<br /> {t('OurTeamDescription3')}
							<br /> {t('OurTeamDescription4')}
							<br /> {t('OurTeamDescription5')}
							<br /> {t('OurTeamDescription6')}
						</Text>
					</div>
					<Image
						role="presentation"
						aria-hidden="true"
						alt=""
						src={teamImage}
						className={classes.image}
					/>
				</div>
			</Container>
		</div>
	)
}

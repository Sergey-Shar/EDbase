import { Text, Title, Image, Container } from '@mantine/core'
import aboutImage from 'src/assets/images/about-image.png'
import { useStyles } from './styles'

export const About = () => {
	const { classes } = useStyles()
	return (
		<div id="about" className={classes.wrapper}>
			<Container size="xl">
				<div className={classes.body}>
					<div className={classes.content}>
						<Title className={classes.title}>Наша команда</Title>
						<Text  c="dimmed">
							"Команда EdBase - это 11 энтузиастов, объединенных одной идеей. При
							проведении исследований, мы заметили, что многие люди, которые обучаются
							или занимаются саморазвитием, сталкиваются с трудностями при работе с
							сохраненными материалами. Это вдохновило нас на разработку продукта
							EdBase. Предложенное нами решение оценили первым местом на конкурсе
							стартапов. Сейчас мы продолжаем работу над созданием приложения. EdBase
							поможет пользователям упростить процесс сохранения и систематизации
							информации, получаемой из различных источников и в различных форматах."
						</Text>
					</div>
					<Image src={aboutImage} className={classes.image} />
				</div>
			</Container>
		</div>
	)
}

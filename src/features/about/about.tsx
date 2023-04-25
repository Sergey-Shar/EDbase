import { Text, Title, Image, Container } from '@mantine/core'
import teamImage from 'src/assets/images/team.png'
import { useStyles } from './styles'

export const About = () => {
	const { classes } = useStyles()
	return (
		<div id="about" className={classes.wrapper}>
			<Container size="xl">
				<div className={classes.body}>
					<div className={classes.content}>
						<Title className={classes.title}>Наша команда</Title>
						<Text 
						className={classes.text}
						c="dimmed">
							Команда EdBase - это 11 энтузиастов, объединенных одной идеей. <br /> При
							проведении исследований, мы заметили, что многие люди, которые обучаются
							или занимаются саморазвитием, сталкиваются с трудностями при работе с
							сохраненными материалами. <br /> Это вдохновило нас на разработку
							продукта EdBase.
							<br /> Предложенное нами решение оценили первым местом на конкурсе
							стартапов.
							<br /> Сейчас мы продолжаем работу над созданием приложения.
							<br /> EdBase поможет пользователям упростить процесс сохранения и
							систематизации информации, получаемой из различных источников и в
							различных форматах.
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

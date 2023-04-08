import {
	Text,
	Title,
	Image,
	Container
} from '@mantine/core'
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
						<Text fz="sm" c="dimmed">
							Наша команда – это команда начинающих профессионалов, которые готовы
							работать упорно и творчески, чтобы превратить Вашу идею в успешный
							продукт. Мы стремимся создавать инновационные решения, которые помогут
							нашим клиентам решать их проблемы и достигать целей. Мы понимаем, что для
							начинающего стартапа каждый ресурс является ценным, поэтому мы готовы
							предложить эффективные решения, которые соответствуют Вашим бюджетным
							ограничениям. Наша команда состоит из талантливых и мотивированных людей,
							которые готовы работать вместе с Вами, чтобы достичь общей цели. Мы
							стремимся к постоянному развитию и совершенствованию, поэтому мы всегда
							открыты для новых задач и готовы принимать вызовы. С нами Вы можете быть
							уверены, что Ваш стартап будет развиваться в правильном направлении.
						</Text>
					</div>
					<Image src={aboutImage} className={classes.image} />
				</div>
			</Container>
		</div>
	)
}

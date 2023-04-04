import {
	createStyles,
	Text,
	Title,
	TextInput,
	Button,
	Image,
	rem,
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
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi
							illo minus aut sunt eveniet, aperiam, reprehenderit perferendis atque
							velit deleniti laudantium consequuntur quaerat explicabo tempore,
							voluptates quia. Ratione, quas. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Dolore animi illo minus aut sunt eveniet, aperiam,
							reprehenderit perferendis atque velit deleniti laudantium consequuntur
							quaerat explicabo tempore, voluptates quia. Ratione, quas. Lorem ipsum
							dolor sit amet consectetur adipisicing elit. Dolore animi illo minus aut
							sunt eveniet, aperiam, reprehenderit perferendis atque velit deleniti
							laudantium consequuntur quaerat explicabo tempore, voluptates quia.
							Ratione, quas. Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Dolore animi illo minus aut sunt eveniet, aperiam, reprehenderit
							perferendis atque velit deleniti laudantium consequuntur quaerat
							explicabo tempore, voluptates quia. Ratione, quas. Lorem ipsum dolor sit
							amet consectetur adipisicing elit. Dolore animi illo minus aut sunt
							eveniet, aperiam, reprehenderit perferendis atque velit deleniti
							laudantium consequuntur quaerat explicabo tempore, voluptates quia.
							Ratione, quas. Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Dolore animi illo minus aut sunt eveniet, aperiam, reprehenderit
							perferendis atque velit deleniti laudantium consequuntur quaerat
							explicabo tempore, voluptates quia. Ratione, quas.
						</Text>
					</div>
					<Image src={aboutImage} className={classes.image} />
				</div>
			</Container>
		</div>
	)
}

import {
	createStyles,
	Image,
	Container,
	Title,
	Button,
	Group,
	Text,
	List,
	ThemeIcon,
	rem
} from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import heroImage from 'src/assets/images/hero-image.png'
import { useStyles } from './styles'

export const HeroContent = () => {
	const { classes } = useStyles()
	return (
		<div>
			<Container size="xl">
				<div className={classes.inner}>
					<div className={classes.content}>
						<Title className={classes.title}>
							Здесь <span className={classes.highlight}>что то</span> что <br /> должно
							быть заголовком
						</Title>
						<Text color="dimmed" mt="md">
							Просто рандомный текст, придумайте что тут должно быть) Lorem ipsum dolor
							sit amet consectetur adipisicing elit. A, molestiae facere, labore fugiat
							perferendis numquam commodi iste vitae optio unde quis repudiandae minus
							explicabo officia deleniti cum quae. Id, impedit.
						</Text>

						<List
							mt={30}
							spacing="sm"
							size="sm"
							icon={
								<ThemeIcon size={20} radius="xl">
									<IconCheck size={rem(12)} stroke={1.5} />
								</ThemeIcon>
							}
						>
							<List.Item>
								<b>TypeScript ,база</b> – build type safe applications, all components
								and hooks export types
							</List.Item>
							<List.Item>
								<b>JavaScript</b> – all packages have MIT license, you can use
								Mantine in any project
							</List.Item>
							<List.Item>
								<b>React</b> – focus ring will appear only when user
								navigates with keyboard
							</List.Item>
						</List>

						<Group mt={30}>
							<Button radius="xl" size="md" className={classes.control}>
								Начать
							</Button>
							<Button
								variant="default"
								radius="xl"
								size="md"
								className={classes.control}
							>
								Посмотреть
							</Button>
						</Group>
					</div>
					<Image src={heroImage} className={classes.image} />
				</div>
			</Container>
		</div>
	)
}

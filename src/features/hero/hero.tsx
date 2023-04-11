import {
	Image,
	Container,
	Title,
	Button,
	Group,
	Text,
	List,
	ThemeIcon,
	rem,
	Notification
} from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import heroImage from 'src/assets/images/hero-image.png'
import { useStyles } from './styles'
import { useDisclosure } from '@mantine/hooks'
import { VideoModal } from './video.modal'
import { DrawerReviews } from './drawer'

export const HeroContent = () => {
	const [openedModal, { open: openModal, close: closeModal }] =
		useDisclosure(false)
	const [openedDrawer, { open: openDrawer, close: closeDrawer }] =
		useDisclosure(false)

	const { classes } = useStyles()
	return (
		<>
			<VideoModal opened={openedModal} close={closeModal} />
			<DrawerReviews opened={openedDrawer} close={closeDrawer} />
			<div className={classes.wrapper}>
				<Container size="xl">
					<div className={classes.inner}>
						<div className={classes.content}>
							<Title className={classes.title}>
								Сохраняй, систематизируй
								<br /> свои знания в одном месте.
							</Title>
							<Text className={classes.textDesktop} color="dimmed" mt="md">
								Приложение в автоматическом режиме сохранит и структурирует материал
								любого формата, создавая вашу персональную базу знаний.
								<br /> Визуальное представление в виде майндмэпа позволит вам быстро
								находить нужную информацию и видеть связи между знаниями.
							</Text>
							<Text className={classes.textMobile} color="dimmed" mt="md">
								Приложение автоматически сохраняет и структурирует только важное из
								книг, статей, курсов. Визуализирует ваши знания в виде майндмэпа и
								упрощает поиск нужной информации.
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
									<b>Конспект</b>{' '}
									<span className={classes.listItemHiddenMobile}>
										– автоматическая обработка исходного материала, вычленение только
										важной информации.
									</span>
								</List.Item>
								<List.Item>
									<b>Визуализация</b>
									<span className={classes.listItemHiddenMobile}>
										– автоматическая систематизация информации в виде майндмэпа.
									</span>
								</List.Item>
								<List.Item>
									<b>Простая навигация</b>
									<span className={classes.listItemHiddenMobile}>
										– легкость поиска необходимой информации.
									</span>
								</List.Item>
							</List>

							<Group mt={30}>
								<a
									href="https://t.me/EdBase_bot"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button
										//onClick={openDrawer}
										radius="xl"
										size="md"
										className={classes.control}
									>
										Пробовать
									</Button>
								</a>
								<Button
									variant="default"
									radius="xl"
									size="md"
									className={classes.control}
									onClick={openModal}
								>
									Как это работает?
								</Button>
							</Group>
						</div>
						<Image src={heroImage} className={classes.image} />
					</div>
				</Container>
			</div>
		</>
	)
}

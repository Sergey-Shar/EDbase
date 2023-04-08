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
} from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import heroImage from 'src/assets/images/hero-image.png'
import { useStyles } from './styles'
import { useDisclosure } from '@mantine/hooks'
import { VideoModal } from './video.modal'
import { DrawerReviews } from './drawer'

export const HeroContent = () => {
		const [openedModal, { open:openModal, close:closeModal }] = useDisclosure(false)
	 const [openedDrawer, { open: openDrawer, close: closeDrawer }] = useDisclosure(false)
	
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
								Сохраняй, <span className={classes.highlight}>систематизируй </span>
								<br /> свои знания в одном месте.
							</Title>
							<Text color="dimmed" mt="md">
								Приложение в автоматическом режиме сохранит и структурирует материал
								любого формата, создавая вашу персональную базу знаний. Визуальное
								представление майндмэпа позволит вам быстро находить нужную информацию и
								видеть связи между знаниями.
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
									<b>Конспект -</b>
									автоматическая обработка исходного материала, вычленение только важной
									информации.
								</List.Item>
								<List.Item>
									<b>Визуализация - </b>автоматическая систематизация информации в виде
									майндмэпа.
								</List.Item>
								<List.Item>
									<b>Простая навигация - </b>  легкость поиска необходимой информации.
								</List.Item>
							</List>

							<Group mt={30}>
								<Button
									onClick={openDrawer}
									radius="xl"
									size="md"
									className={classes.control}
								>
									Пробовать
								</Button>
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

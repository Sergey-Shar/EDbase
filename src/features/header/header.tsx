import {
	Header,
	HoverCard,
	Group,
	Button,
	UnstyledButton,
	Text,
	SimpleGrid,
	ThemeIcon,
	Anchor,
	Divider,
	Center,
	Box,
	Burger,
	Drawer,
	Collapse,
	ScrollArea,
	rem,
	Container,
} from '@mantine/core'
import viteLogo from '/vite.svg'
import { useDisclosure } from '@mantine/hooks'
import {
	IconChevronDown
} from '@tabler/icons-react'
import { useStyles } from './styles'
import { mockdata } from './feature.data'
import { ButtonToggleTheme } from './toggle.theme'



export const  AppHeader = () => {
	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
		useDisclosure(false)
	const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
	const { classes, theme } = useStyles()

	const links = mockdata.map((item) => (
		<UnstyledButton className={classes.subLink} key={item.title}>
			<Group noWrap align="flex-start">
				<ThemeIcon size={34} variant="default" radius="md">
					<item.icon size={rem(22)} color={theme.fn.primaryColor()} />
				</ThemeIcon>
				<div>
					<Text size="sm" fw={500}>
						{item.title}
					</Text>
					<Text size="xs" color="dimmed">
						{item.description}
					</Text>
				</div>
			</Group>
		</UnstyledButton>
	))

	return (
		<Box id="header" pb={60}>
			<Header
				sx={{ position: 'fixed'}}
				height={60}
			>
				<Container size="xl">
					<Group position="apart" sx={{ height: rem(60) }}>
						<a href="#header">
							<img src={viteLogo} className="logo" alt="Vite logo" />
						</a>
						<Group
							sx={{ height: '100%' }}
							spacing={0}
							className={classes.hiddenMobile}
						>
							<a href="#" className={classes.link}>
								Главная
							</a>
							<HoverCard
								width={600}
								position="bottom"
								radius="md"
								shadow="md"
								withinPortal
							>
								<HoverCard.Target>
									<a href="#features" className={classes.link}>
										<Center inline>
											<Box component="span" mr={5}>
												Фичи
											</Box>
											<IconChevronDown size={16} color={theme.fn.primaryColor()} />
										</Center>
									</a>
								</HoverCard.Target>

								<HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
									<Group position="apart" px="md">
										<Text fw={500}> Фичи </Text>
										<Anchor href="#" fz="xs">
											Посмотреть все
										</Anchor>
									</Group>

									<Divider
										my="sm"
										mx="-md"
										color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
									/>

									<SimpleGrid cols={2} spacing={0}>
										{links}
									</SimpleGrid>

									<div className={classes.dropdownFooter}>
										<Group position="apart">
											<div>
												<Text fw={500} fz="sm">
													Начать
												</Text>
												<Text size="xs" color="dimmed">
													какой то текст
												</Text>
											</div>
											<Button variant="default">Начать</Button>
										</Group>
									</div>
								</HoverCard.Dropdown>
							</HoverCard>
							<a href="#about" className={classes.link}>
								О нас
							</a>
							<a href="#questions" className={classes.link}>
								Вопросы
							</a>
							<a href="#contacts" className={classes.link}>
								Связаться
							</a>
						</Group>

						<Group className={classes.hiddenMobile}>
							<ButtonToggleTheme />
						</Group>

						<Burger
							opened={drawerOpened}
							onClick={toggleDrawer}
							className={classes.hiddenDesktop}
						/>
					</Group>
				</Container>
			</Header>
			<Drawer
				opened={drawerOpened}
				onClose={closeDrawer}
				size="100%"
				padding="md"
				title="Навигация"
				className={classes.hiddenDesktop}
				zIndex={1000000}
			>
				<ButtonToggleTheme />
				<ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
					<Divider
						my="sm"
						color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
					/>

					<a href="#" className={classes.link}>
						Главная
					</a>
					<UnstyledButton className={classes.link} onClick={toggleLinks}>
						<Center inline>
							<Box component="span" mr={5}>
								Фичи
							</Box>
							<IconChevronDown size={16} color={theme.fn.primaryColor()} />
						</Center>
					</UnstyledButton>
					<Collapse in={linksOpened}>{links}</Collapse>
					<a href="#" className={classes.link}>
						Посмотреть все
					</a>
					<a href="#" className={classes.link}>
						О нас
					</a>
					<Divider
						my="sm"
						color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
					/>
				</ScrollArea>
			</Drawer>
		</Box>
	)
}
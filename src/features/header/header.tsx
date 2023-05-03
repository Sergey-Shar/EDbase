import {
	Header,
	HoverCard,
	Group,
	UnstyledButton,
	Text,
	SimpleGrid,
	ThemeIcon,
	Divider,
	Center,
	Box,
	Burger,
	Drawer,
	ScrollArea,
	rem,
	Container
} from '@mantine/core'
import logoDark from '../../assets/images/logoDark.png'
import logoLight from '../../assets/images/logoLight.png'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'
import { useStyles } from './styles'
import { ButtonToggleTheme } from './toggle.theme'
import { useTranslation } from 'src/context/language/translation.context'
import { LanguageMenu } from './change.language'
import { featureList } from 'src/shared/utils/feature.list'

export const AppHeader = () => {
	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
		useDisclosure(false)
	const { classes, theme } = useStyles()

	const { t } = useTranslation()

	const links = featureList.map((item) => (
		<UnstyledButton className={classes.subLink} key={item.id}>
			<Group noWrap align="flex-start">
				<ThemeIcon size={34} variant="default" radius="md">
					<item.icon size={rem(22)} color={'gray'} />
				</ThemeIcon>
				<div>
					<Text size="sm" fw={500}>
						{t(`featureTitle${item.id}`)}
					</Text>
					<Text size="xs" color="dimmed">
						{t(`featureDescription${item.id}`)}
					</Text>
				</div>
			</Group>
		</UnstyledButton>
	))

	return (
		<Box id="header" className={classes.wrapper}>
			<Header className={classes.header} height={60}>
				<Container size="xl">
					<Group position="apart" sx={{ height: rem(60) }}>
						<ButtonToggleTheme className={classes.toggleThemeMobile} />
						<a href="#header">
							<img
								src={theme.colorScheme === 'dark' ? logoDark : logoLight}
								className={classes.logo}
								alt="Логотип стартапа Simplase"
							/>
						</a>
						<Group
							aria-label="Главная навигация по приложению Simplase"
							sx={{ height: '100%' }}
							spacing={0}
							className={classes.hiddenMobile}
						>
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
												{t('features')}
											</Box>
											<IconChevronDown size={16} />
										</Center>
									</a>
								</HoverCard.Target>

								<HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
									<Group position="apart" px="md">
										<Text fw={500}> {t('features')} </Text>
									</Group>
									<Divider
										my="sm"
										mx="-md"
										color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
									/>
									<SimpleGrid cols={2} spacing={0}>
										{links}
									</SimpleGrid>
								</HoverCard.Dropdown>
							</HoverCard>
							<a href="#about" className={classes.link}>
								{t('about')}
							</a>
							<a href="#questions" className={classes.link}>
								{t('questions')}
							</a>
							<a href="#waiting" className={classes.link}>
								{t('waiting')}
							</a>
						</Group>
						<Group className={classes.hiddenMobile}>
							<LanguageMenu />
							<ButtonToggleTheme />
						</Group>

						<Burger
							role="button"
							aria-label="кнопка в виде трех полосок 
							для открытия меню 
							для мобильных телефонов"
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
				title={t('menu')}
				className={classes.hiddenDesktop}
				zIndex={1000000}
			>
				<ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
					<Divider
						my="sm"
						color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
					/>
					<LanguageMenu />
				</ScrollArea>
			</Drawer>
		</Box>
	)
}

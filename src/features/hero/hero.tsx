import {
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
import heroImage from 'src/assets/images/main1000X1000.png'
import heroImageSmall from 'src/assets/images/main320x320.png'
import { useStyles } from './styles'
import { useDisclosure } from '@mantine/hooks'
import { VideoModal } from './video.modal'
import { useTranslation } from 'src/context/language/translation.context'

export const HeroContent = () => {
	const { classes } = useStyles()
	const [openedModal, { open: openModal, close: closeModal }] =
		useDisclosure(false)
	const { t } = useTranslation()
	return (
		<>
			<VideoModal opened={openedModal} close={closeModal} />
			<div id="about" className={classes.wrapper}>
				<Container size="xl">
					<div className={classes.body}>
						<div className={classes.content}>
							<Title className={classes.title}>{t('heroTitle')}</Title>
							<Text className={classes.textDesktop} color="dimmed" mt="md">
								{t('heroDescription1')}
								<br />
								{t('heroDescription2')}
							</Text>
							<Text className={classes.textMobile} color="dimmed" mt="md">
								{t('heroDescription1')}
							</Text>
							<List
								mt={30}
								spacing="sm"
								size="sm"
								icon={
									<ThemeIcon color="#FFD200" size={20} radius="xl">
										<IconCheck
											role="presentation"
											aria-hidden="true"
											color="#000"
											size={rem(13)}
											stroke={1.9}
										/>
									</ThemeIcon>
								}
							>
								<List.Item className={classes.listItemHiddenMobile}>
									<b>{t('heroListItem1Title')}</b> <span> – {t('heroListItem1')}</span>
								</List.Item>
								<List.Item className={classes.listItemHiddenMobile}>
									<b>{t('heroListItem2Title')}</b>
									<span> – {t('heroListItem2')}</span>
								</List.Item>
								<List.Item className={classes.listItemHiddenMobile}>
									<b>{t('heroListItem3Title')}</b>
									<span> – {t('heroListItem3')}</span>
								</List.Item>
							</List>

							<Group className={classes.controlGroup} mt={30}>
								<a
									role="button"
									aria-label="перейти в телеграм"
									href="https://t.me/EdBase_bot"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button
										variant="default"
										radius="xl"
										size="md"
										className={classes.controlLeft}
									>
										{t('heroButtonLeft')}
									</Button>
								</a>
								<Button
									aria-label="открыть видео с демонстрацией работы приложения Ed-Base"
									onClick={openModal}
									variant="default"
									radius="xl"
									size="md"
									className={classes.controlRight}
								>
									{t('heroButtonRight')}
								</Button>
							</Group>
						</div>
						<Image
							radius="lg"
							role="presentation"
							aria-hidden="true"
							src={heroImage}
							alt=""
							className={classes.image}
							withPlaceholder
						/>
						<Image
							radius="lg"
							role="presentation"
							aria-hidden="true"
							src={heroImageSmall}
							alt=""
							className={classes.imageSmall}
							withPlaceholder
						/>
					</div>
				</Container>
			</div>
		</>
	)
}

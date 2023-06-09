import { Text, Container, ActionIcon, Group } from '@mantine/core'
import {
	IconBrandInstagram,
	IconBrandTelegram,
	IconBrandLinkedin
} from '@tabler/icons-react'
import { socialMedia } from 'src/shared/utils/social.media.url'
import { useStyles } from './styles'

export const AppFooter = () => {
	const { classes } = useStyles()
	return (
		<footer className={classes.footer}>
			<Container size="xl" className={classes.inner}>
				<div className={classes.logo}></div>
			</Container>
			<Container className={classes.afterFooter}>
				<Text className={classes.text} color="dimmed" size="sm">
					Copyright © 2023 Simplase All rights reserved.
				</Text>

				<Group spacing={0} className={classes.social} position="right" noWrap>
					<a
						aria-label="перейти в LinkedIn"
						href={socialMedia.linkedIn}
						target="_blank"
						rel="noopener noreferrer"
					>
						<ActionIcon aria-label="перейти в LinkedIn" size="lg">
							<IconBrandLinkedin size="2rem" stroke={1.5} />
						</ActionIcon>
					</a>
					<a
						aria-label="перейти в телеграм канал"
						href={socialMedia.telegram}
						rel="noopener noreferrer"
						target="_blank"
					>
						<ActionIcon aria-label="перейти в телеграм канал" size="lg">
							<IconBrandTelegram size="2rem" stroke={1.5} />
						</ActionIcon>
					</a>
					<a
						aria-label="перейти в Instagram"
						href={socialMedia.instagram}
						target="_blank"
						rel="noopener noreferrer"
					>
						<ActionIcon aria-label="перейти в Instagram" size="lg">
							<IconBrandInstagram size="2rem" stroke={1.5} />
						</ActionIcon>
					</a>
				</Group>
			</Container>
		</footer>
	)
}

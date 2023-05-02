import { Text, Container, ActionIcon, Group } from '@mantine/core'
import {
	IconBrandInstagram,
	IconBrandTelegram,
	IconBrandLinkedin
} from '@tabler/icons-react'
import { useStyles } from './styles'

export const AppFooter = () => {
	const { classes } = useStyles()
	return (
		<footer className={classes.footer}>
			<Container size="xl" className={classes.inner}>
				<div className={classes.logo}>
				</div>
			</Container>
			<Container className={classes.afterFooter}>
				<Text className={classes.text} color="dimmed" size="sm">
					Copyright © 2023 Ed-Base All rights reserved.
				</Text>

				<Group spacing={0} className={classes.social} position="right" noWrap>
					<a
						aria-label="перейти в LinkedIn"
						href="https://www.linkedin.com/company/92815291/admin/?feedType=following"
						target="_blank"
						rel="noopener noreferrer"
					>
						<ActionIcon aria-label="перейти в LinkedIn" size="lg">
							<IconBrandLinkedin size="2rem" stroke={1.5} />
						</ActionIcon>
					</a>
					<a
						aria-label="перейти в телеграм канал"
						href="https://t.me/SimplaseBot"
						rel="noopener noreferrer"
						target="_blank"
					>
						<ActionIcon aria-label="перейти в телеграм канал" size="lg">
							<IconBrandTelegram size="2rem" stroke={1.5} />
						</ActionIcon>
					</a>
					<a
						aria-label="перейти в Instagram"
						href="https://www.instagram.com/simplase/?igshid=YmMyMTA2M2Y%3D"
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

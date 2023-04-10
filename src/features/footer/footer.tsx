import { Text, Container, ActionIcon, Group } from '@mantine/core'
import {
	IconBrandTwitter,
	IconBrandYoutube,
	IconBrandInstagram
} from '@tabler/icons-react'
import { useStyles } from './styles'
import logo from '../../assets/images/logo.png'
interface FooterLinksProps {
	data: {
		title: string
		links: { label: string; link: string }[]
	}[]
}

export const AppFooter = ({ data }: FooterLinksProps) => {
	const { classes } = useStyles()

	const groups = data.map((group) => {
		const links = group.links.map((link, index) => (
			<Text<'a'>
				key={index}
				className={classes.link}
				component="a"
				href={link.link}
				onClick={(event) => event.preventDefault()}
			>
				{link.label}
			</Text>
		))

		return (
			<div className={classes.wrapper} key={group.title}>
				<Text className={classes.title}>{group.title}</Text>
				{links}
			</div>
		)
	})

	return (
		<footer className={classes.footer}>
			<Container size="xl" className={classes.inner}>
				<div className={classes.logo}>
					{/* <a href="#header">
						<img src={logo} className={classes.logoIcon} alt="Ed-base logo" />
					</a> */}
					{/* <Text size="sm" color="dimmed" className={classes.description}>
						Приложение в автоматическом режиме сохранит и структурирует материал
						любого формата
					</Text> */}
				</div>
				{/* <div className={classes.groups}>{groups}</div> */}
			</Container>
			<Container className={classes.afterFooter}>
				<Text color="dimmed" size="sm">
					© 2023 Edbase
				</Text>

				<Group spacing={0} className={classes.social} position="right" noWrap>
					<ActionIcon size="lg">
						<IconBrandTwitter  size="2rem" stroke={1.5} />
					</ActionIcon>
					<ActionIcon size="lg">
						<IconBrandYoutube  size="2rem" stroke={1.5} />
					</ActionIcon>
					<ActionIcon size="lg">
						<IconBrandInstagram size="2rem" stroke={1.5} />
					</ActionIcon>
				</Group>
			</Container>
		</footer>
	)
}

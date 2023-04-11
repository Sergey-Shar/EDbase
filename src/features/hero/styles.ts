import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
	wrapper: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.white
	},
	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: `calc(${theme.spacing.xl} * 4.5)`,
		paddingBottom: `calc(${theme.spacing.xl} * 4)`
	},

	content: {
		maxWidth: rem(480),
		marginRight: `calc(${theme.spacing.xl} * 3)`,

		[theme.fn.smallerThan('md')]: {
			maxWidth: '100%',
			marginRight: 0
		}
	},

	title: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: rem(44),
		lineHeight: 1.2,
		fontWeight: 900,

		[theme.fn.smallerThan('xs')]: {
			fontSize: rem(28)
		}
	},

	textDesktop: {
		[theme.fn.smallerThan('md')]: {
			display: 'none'
		}
	},
	textMobile: {
		display: 'none',
		[theme.fn.smallerThan('md')]: {
			display: 'block'
		}
	},

	listItemHiddenMobile: {
		[theme.fn.smallerThan('md')]: {
			display: 'none'
		}
	},

	control: {
		[theme.fn.smallerThan('xs')]: {
			flex: 1
		}
	},

	image: {
		flex: 1,

		[theme.fn.smallerThan('md')]: {
			display: 'none'
		}
	},

	highlight: {
		position: 'relative',
		backgroundColor: theme.fn.variant({
			variant: 'light',
			color: theme.primaryColor
		}).background,
		borderRadius: theme.radius.sm,
		padding: `${rem(4)} ${rem(5)}`,
		marginRight: `${rem(5)}`
	}
}))

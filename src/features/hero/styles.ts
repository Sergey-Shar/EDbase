import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
	wrapper: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.white
	},

	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: `calc(${theme.spacing.xl} * 3)`,
		paddingBottom: `calc(${theme.spacing.xl} * 3)`
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
			fontSize: rem(28),
			textAlign: 'center'
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
			display: 'block',
			textAlign: 'center'
		}
	},

	listItemHiddenMobile: {
		[theme.fn.smallerThan('md')]: {
			display: 'none'
		}
	},

	controlGroup: {
		[theme.fn.smallerThan('xs')]: {
			display: 'flex',
			justifyContent: 'center'
		}
	},
	controlLeft: {
		backgroundColor: '#FFD200',
		color:theme.black,
		border: 0,
		'&:not([data-disabled])': theme.fn.hover({
			backgroundColor: theme.fn.darken('#FFD200', 0.03)
		}),
		[theme.fn.smallerThan('xs')]: {
			flex: 1,
			paddingLeft: `${rem(45)}`,
			paddingRight: `${rem(45)}`
		}
	},

	controlRight: {
		[theme.fn.smallerThan('xs')]: {
			flex: 1,
			display: 'none'
		}
	},

	image: {
		flex: 1,
		[theme.fn.smallerThan('sm')]: {
			maxWidth: '100%',
			marginBottom: `calc(${theme.spacing.xl} * 1)`
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
	},

	body: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: `calc(${theme.spacing.xl} * 2)`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`,

		[theme.fn.smallerThan('sm')]: {
			flexDirection: 'column-reverse',
			paddingRight: 0
		}
	}
}))

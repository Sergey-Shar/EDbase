import { rem, createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
	wrapper: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.white
	},

	image: {
		flex: 1,
		[theme.fn.smallerThan('sm')]: {
			maxWidth: '100%',
			marginTop: `calc(${theme.spacing.xl} * 2)`
		}
	},

	body: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: `calc(${theme.spacing.xl} * 4)`,
		paddingBottom: `calc(${theme.spacing.xl} * 4)`,

		[theme.fn.smallerThan('sm')]: {
			flexDirection: 'column-reverse',
			padding: theme.spacing.xl,
			paddingRight: 0
		}
	},

	content: {
		maxWidth: rem(580),
		marginRight: `calc(${theme.spacing.xl} * 3)`,
		[theme.fn.smallerThan('md')]: {
			maxWidth: '100%',
			marginRight: 0,
			marginTop: `calc(${theme.spacing.xl} * 2)`,
			paddingBottom: `calc(${theme.spacing.xl} * 2)`
		}
	},

	title: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		lineHeight: 1,
		marginBottom: theme.spacing.xl,
		marginTop: theme.spacing.md
	}
}))

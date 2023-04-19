import { rem, createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
	wrapper: {
		backgroundColor:
			 theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
				[theme.fn.smallerThan('md')]: {
		}
	},

	image: {
		flex: 1,
		[theme.fn.smallerThan('sm')]: {
		display:'none',
		}
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
	},

	content: {
		maxWidth: rem(580),
		marginRight: `calc(${theme.spacing.xl} * 3)`,
		[theme.fn.smallerThan('md')]: {
			maxWidth: '100%',
			marginRight: 0,
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

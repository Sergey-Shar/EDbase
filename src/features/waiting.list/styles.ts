import { createStyles, rem } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
	wrapper: {
		paddingTop: `calc(${theme.spacing.xl} * 2)`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`,
		minHeight: 300,
		backgroundImage:
		'url(src/assets/images/arrow.png)',
		backgroundSize: 'contain',
		//backgroundRepeat:'no-repeat',
		backgroundPosition: 'center',
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
		[theme.fn.smallerThan('md')]: {
			backgroundColor:
				theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
				backgroundImage:'none'
		}
	},

	title: {
		marginBottom: `calc(${theme.spacing.xl} * 1.5)`
	},
	description: {
		textAlign: 'center',
		margin: '3rem 0',

		[theme.fn.smallerThan('xs')]: {
			fontSize: theme.fontSizes.md,
			textAlign: 'left'
		}
	},

	item: {
		borderRadius: theme.radius.md,
		marginBottom: theme.spacing.lg,
		border: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`
	},
	button: {
		backgroundColor: '#FFD200',
		color: theme.black,
		'&:not([data-disabled])': theme.fn.hover({
			backgroundColor: theme.fn.darken('#FFD200', 0.03)
		})
	}
}))

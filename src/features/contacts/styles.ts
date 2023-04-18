import { createStyles, rem } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
	wrapper: {
		paddingTop: `calc(${theme.spacing.xl} * 2)`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`,
		minHeight: 450,
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
	},

	title: {
		marginBottom: `calc(${theme.spacing.xl} * 1.5)`
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

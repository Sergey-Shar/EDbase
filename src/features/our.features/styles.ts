import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
	wrapper: {
		paddingTop: `calc(${theme.spacing.xl} * 2)`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`,
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		marginBottom: theme.spacing.md,
		textAlign: 'center',

		[theme.fn.smallerThan('sm')]: {
			fontSize: rem(28),
			textAlign: 'left'
		}
	},

	description: {
		textAlign: 'center',

		[theme.fn.smallerThan('sm')]: {
			textAlign: 'left'
		}
	},
	card: {
		border: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1]
		}`,
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
	},

	cardTitle: {
		'&::after': {
			content: '""',
			display: 'block',
			backgroundColor: '#FFD200',
			width: rem(45),
			height: rem(2),
			marginTop: theme.spacing.sm
		}
	}
}))

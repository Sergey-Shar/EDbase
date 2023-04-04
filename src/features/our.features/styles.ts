import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
	wrapper: {
		paddingTop: `calc(${theme.spacing.xl} * 3.5)`,
		paddingBottom: `calc(${theme.spacing.xl} * 4)`,

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
	}
}))

import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
	wrapper: {
		paddingTop: `calc(${theme.spacing.xl} * 4)`,
		paddingBottom: `calc(${theme.spacing.xl} * 4)`,
		minHeight: 550,
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.white,
		[theme.fn.smallerThan('md')]: {
			backgroundColor:
				theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1]
		}
	},

	title: {
		marginBottom: `calc(${theme.spacing.xl} * 1.5)`
	},

	item: {
		borderRadius: theme.radius.md,
		marginBottom: theme.spacing.lg,
		border: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0]
		}`,
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1]
	}
}))

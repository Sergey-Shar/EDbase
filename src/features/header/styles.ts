import { createStyles, rem } from "@mantine/styles";

export const useStyles = createStyles((theme) => ({
	link: {
		display: 'flex',
		alignItems: 'center',
		height: '100%',
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
		textDecoration: 'none',
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		fontWeight: 500,
		fontSize: theme.fontSizes.sm,

		[theme.fn.smallerThan('sm')]: {
			height: rem(42),
			display: 'flex',
			alignItems: 'center',
			width: '100%'
		},

		...theme.fn.hover({
			backgroundColor:
				theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
		})
	},

	subLink: {
		width: '100%',
		padding: `${theme.spacing.xs} ${theme.spacing.md}`,
		borderRadius: theme.radius.md,

		...theme.fn.hover({
			backgroundColor:
				theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0]
		}),

		'&:active': theme.activeStyles
	},

	dropdownFooter: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
		margin: `calc(${theme.spacing.md} * -1)`,
		marginTop: theme.spacing.sm,
		padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
		paddingBottom: theme.spacing.xl,
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
		}`
	},

	hiddenMobile: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none'
		}
	},

	hiddenDesktop: {
		[theme.fn.largerThan('sm')]: {
			display: 'none'
		}
	},
		control: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderRadius: 1000,
		paddingLeft: theme.spacing.sm,
		paddingRight: rem(4),
		width: rem(136),
		height: rem(36)
	},

	iconWrapper: {
		height: rem(28),
		width: rem(28),
		borderRadius: rem(28),
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.dark[4],
		color: theme.colorScheme === 'dark' ? theme.black : theme.colors.blue[2]
	},

	value: {
		lineHeight: 1
	}
}))

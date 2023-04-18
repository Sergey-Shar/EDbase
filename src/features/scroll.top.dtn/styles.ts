import { createStyles, rem } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
	button: {
		backgroundColor: '#FFD200',
		color: theme.black,
		'&:not([data-disabled])': theme.fn.hover({
			backgroundColor: theme.fn.darken('#FFD200', 0.03)
		})
	}
}))

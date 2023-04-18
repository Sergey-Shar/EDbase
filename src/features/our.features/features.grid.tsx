import {
	Container,
	SimpleGrid,
 Title,
} from '@mantine/core'
import { MOCKDATA } from './mock.data'
import { useStyles } from './styles'
import { Feature, FeatureProps } from './features'

interface FeaturesGridProps {
	title: React.ReactNode
	data?: FeatureProps[]
}

export const FeaturesGrid = ({ title, data = MOCKDATA }: FeaturesGridProps) => {
	const { classes } = useStyles()
	const features = data.map((feature, index) => (
		<Feature {...feature} key={index} />
	))

	return (
		<div className={classes.wrapper}>
			<Container id="features" size="xl">
				<SimpleGrid
					cols={3}
					spacing={50}
					breakpoints={[
						{ maxWidth: 980, cols: 2, spacing: 'xl' },
						{ maxWidth: 755, cols: 1, spacing: 'xl' }
					]}
				>
					{features}
				</SimpleGrid>
			</Container>
		</div>
	)
}

import {
	Container,
	SimpleGrid,
} from '@mantine/core'
import { MOCK_DATA } from './mock.data'
import { useStyles } from './styles'
import { Feature } from './features'
import { useTranslation } from 'src/context/language/translation.context'

export const FeaturesGrid = ({ data = MOCK_DATA }) => {
	const { classes } = useStyles()
	const { t } = useTranslation()
	const features = data.map((feature, index) => (
		<Feature
			icon={feature.icon}
			title={t(`featureTitle${index + 1}`)}
			description={t(`featureDescription${index + 1}`)}
			key={index}
		/>
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

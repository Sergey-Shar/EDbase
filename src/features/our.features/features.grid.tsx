import {
	Container,
	SimpleGrid,
} from '@mantine/core'
import { useStyles } from './styles'
import { Feature } from './features'
import { useTranslation } from 'src/context/language/translation.context'
import { featureList } from 'src/shared/utils/feature.list'

export const FeaturesGrid = () => {
	const { classes } = useStyles()
	const { t } = useTranslation()
	const features = featureList.map((feature) => (
		<Feature
			icon={feature.icon}
			title={t(`featureTitle${feature.id}`)}
			description={t(`featureDescription${feature.id}`)}
			key={feature.id}
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

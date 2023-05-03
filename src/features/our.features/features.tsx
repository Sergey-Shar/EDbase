import { Text, Card, rem } from '@mantine/core'
import React from 'react'
import { useStyles } from './styles'
import { TablerIconsProps } from '@tabler/icons-react'
interface FeatureProps {
	icon: (props: TablerIconsProps) => JSX.Element
	title: string
	description: string
}

export const Feature = ({ icon: Icon, title, description }: FeatureProps) => {
	const { classes } = useStyles()
	return (
		<Card shadow="md" radius="md" className={classes.card} padding="xl">
			<Icon
				role="presentation"
				aria-hidden="true"
				size={rem(50)}
				stroke={1}
				color="#FFD200"
			/>
			<Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
				{title}
			</Text>
			<Text fz="sm" c="dimmed" mt="sm">
				{description}
			</Text>
		</Card>
	)
}

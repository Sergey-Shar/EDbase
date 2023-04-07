import {
	ThemeIcon,
	Text,
	Title,
	Container,
	SimpleGrid,
} from '@mantine/core'
import React from 'react';
import { MOCKDATA } from './mock.data';
import { useStyles } from './styles';


interface FeatureProps {
	icon: React.FC<any>;
	title: React.ReactNode;
	description: React.ReactNode;
}

const Feature = ({ icon: Icon, title, description }: FeatureProps) => {
	return (
		<div>
			<ThemeIcon variant="light" size={40} radius={40}>
				<Icon size="1.1rem" stroke={1.5} />
			</ThemeIcon>
			<Text mt="sm" mb={7}>
				{title}
			</Text>
			<Text size="sm" color="dimmed" sx={{ lineHeight: 1.6 }}>
				{description}
			</Text>
		</div>
	)
}

interface FeaturesGridProps {
	title: React.ReactNode;
	data?: FeatureProps[];
}

export const  FeaturesGrid = ({
	title,
	data = MOCKDATA
}: FeaturesGridProps) => {
	const { classes } = useStyles()
	const features = data.map((feature, index) => (
		<Feature {...feature} key={index} />
	))

	return (
		<div className={classes.wrapper}>
			<Container id="features" size="xl">
				<Title className={classes.title}>{title}</Title>
				<SimpleGrid
					mt={60}
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

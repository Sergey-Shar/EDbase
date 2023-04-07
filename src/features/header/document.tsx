import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import { MOCK_DATA } from './feature.data'

// Create styles
const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		backgroundColor: '#E4E4E4'
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1
	}
})

export const MyDocument = () => (
	<Document>
		<Page size="A4" style={styles.page}>
			<View style={styles.section}>
				<Text>Section #1</Text>
    {MOCK_DATA.map((item,i) => 
    <Text>
     {item.description}
    </Text>
    )}
			</View>
			<View style={styles.section}>
				<Text>Section #2</Text>
			</View>
		</Page>
	</Document>
)

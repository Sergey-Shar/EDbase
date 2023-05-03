import {
	IconUserSearch,
	IconDownload,
	IconPageBreak,
	IconCalendarDown,
	IconEyeCheck,
	IconVersions,
 TablerIconsProps
} from '@tabler/icons-react'

 type FeatureList = {
	id: number
	icon: (props: TablerIconsProps) => JSX.Element
}

export const featureList: FeatureList[] = [
	{
		id: 1,
		icon: IconDownload
	},
	{
		id: 2,
		icon: IconCalendarDown
	},
	{
		id: 3,
		icon: IconPageBreak
	},
	{
		id: 4,
		icon: IconEyeCheck
	},
	{
		id: 5,
		icon: IconUserSearch
	},
	{
		id: 6,
		icon: IconVersions
	}
]

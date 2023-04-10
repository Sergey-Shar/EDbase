import {
	IconUserSearch,
	IconDownload,
	IconPageBreak,
	IconCalendarDown,
	IconEyeCheck,
	IconVersions
} from '@tabler/icons-react'

export const MOCK_DATA = [
	{
		icon: IconDownload,
		title: 'Автоматическое сохранение - ',
		description:
			'Автоматически сохраняем важную информацию, которую вы хотите запомнить.'
	},
	{
		icon: IconPageBreak,
		title: 'Генерация саммари -',
		description: `Приложение выделит ключевые моменты из каждого блока информации и предоставит только самое важное.
`
	},

	{
		icon: IconUserSearch,
		title: 'Поиск по базе знаний - ',
		description: `Легко находите нужную информацию в своей базе знаний.
`
	}
]

export const featureMenu = [
	{
		icon: IconDownload,
		title: 'Автоматическое сохранение ',
		description:
			'Автоматически сохраняем важную информацию, которую вы хотите запомнить.'
	},
	{
		icon: IconCalendarDown,
		title: 'Автоматическая систематизация',
		description:
			'Приложение разбивает сохраненную информацию на логические блоки и структурирует их в виде майндмэпа.'
	},
	{
		icon: IconPageBreak,
		title: 'Генерация саммари',
		description: `Приложение выделит ключевые моменты из каждого блока информации и предоставит только самое важное.
`
	},
	{
		icon: IconEyeCheck,
		title: 'Визуализация знаний ',
		description: `Вы видите свои знания в виде майндмэпа элементов с взаимосвязями.
`
	},
	{
		icon: IconUserSearch,
		title: 'Поиск по базе знаний ',
		description: `Легко находите нужную информацию в своей базе знаний.
`
	},
	{
		icon: IconVersions,
		title: 'Различные форматы',
		description: `Возможность импортировать и систематизировать материалы в разных форматах: текст, видео, аудио, изображения.
`
	}
]
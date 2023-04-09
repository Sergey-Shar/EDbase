import { Modal, useMantineTheme } from '@mantine/core'
import { VideoPlayer } from 'src/shared/videoPlayer'

export const VideoModal = ({
	opened,
	close
}: {
	opened: boolean
	close: () => void
}) => {
	const theme = useMantineTheme()
	return (
		<>
			<Modal
				size="calc(100vw - 3rem)"
				opened={opened}
				onClose={close}
				title="Как это работает"
				zIndex={5000}
				overlayProps={{
					color:
						theme.colorScheme === 'dark'
							? theme.colors.dark[9]
							: theme.colors.gray[2],
					opacity: 0.55,
					blur: 3
				}}
			>
				<VideoPlayer />
			</Modal>
		</>
	)
}

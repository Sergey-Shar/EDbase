import {
	Player,
	ControlBar,
	ReplayControl,
	ForwardControl,
	CurrentTimeDisplay,
	TimeDivider,
	PlaybackRateMenuButton,
	VolumeMenuButton,
	BigPlayButton
} from 'video-react'

const SOURCE_VIDEO = 'http://85.209.2.173/storage/video/edbase.mp4'

export const VideoPlayer = () => {
	return (
		<Player>
			<source src={SOURCE_VIDEO} />
			<BigPlayButton position="center" />
			<ControlBar>
				<ReplayControl seconds={10} />
				<ForwardControl seconds={30} />
				<CurrentTimeDisplay order={4.1} />
				<TimeDivider order={4.2} />
				<PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
				<VolumeMenuButton />
			</ControlBar>
		</Player>
	)
}

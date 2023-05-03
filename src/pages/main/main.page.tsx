import {
	About,
	AppFooter,
	AppHeader,
	Contacts,
	FeaturesGrid,
	HeroContent,
	Questions,
	ScrollTopBtn,
	VideoSection,
	WaitingList
} from 'src/features'

export const MainPage = () => {
	return (
		<>
			<AppHeader />
			<ScrollTopBtn />
			<HeroContent />
			<FeaturesGrid />
			<VideoSection />
			<WaitingList />
			<Questions />
			<About />
			<Contacts />
			<AppFooter />
		</>
	)
}

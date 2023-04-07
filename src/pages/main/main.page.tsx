import { AppHeader, HeroContent } from 'src/features'
import { FeaturesGrid } from 'src/features/our.features'
import { AppFooter } from 'src/features/footer'
import data from 'src/features/footer/data.json'
import { Questions } from 'src/features/questions'
import { Contacts } from 'src/features/contacts'
import { About } from 'src/features/about'
import { ScrollTopBtn } from 'src/features/scroll.top.dtn'

export const MainPage = () => {
	return (
		<>
			<AppHeader />
			<ScrollTopBtn/>
			<HeroContent />
			<FeaturesGrid title={'Фичи'} />
			<About />
			<Questions />
			<Contacts />
			<AppFooter data={data.data} />
		</>
	)
}

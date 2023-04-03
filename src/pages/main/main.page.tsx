import { AppHeader, HeroContent } from 'src/features'
import { FeaturesGrid } from 'src/features/our.features'
import { AppFooter } from 'src/features/footer'
import data from 'src/features/footer/data.json'
import { Questions } from 'src/features/questions'
import { Contacts } from 'src/features/contacts'

export const MainPage = () => {
	return (
		<>
			<AppHeader />
			<HeroContent />
			<FeaturesGrid
				title={'Фичи'}
				description={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
						dolores, tempore cumque praesentium reiciendis accusamus adipisci! Ipsum
						consectetur facere quisquam facilis eos culpa voluptatum ab aperiam ipsa.
						Magni, voluptates explicabo.`}
			/>
			<Questions />
			<Contacts/>
			<AppFooter data={data.data} />
		</>
	)
}

import Swiper from 'swiper/bundle'

// import styles bundle
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../scss/main.scss'
import '../scss/main.scss'

new Swiper('.swiper',{
	speed: 1000,
	slideToClikedSlide: true,
	grabCursor: true,
	touchRatio: 5,
	loop: true,
	loopFillGroupWithBlank: true,
	mousewheel: {
		invert: true
	},
	breakpoints: {
		480: {
			slidesPerView: 1,
			spaceBetween: 5
		},
		769: {
			slidesPerView: 3,
			spaceBetween: 50,
			centeredSlides: true
		},
		1920: {
			slidesPerView: 3,
			spaceBetween: 30
		}
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
})

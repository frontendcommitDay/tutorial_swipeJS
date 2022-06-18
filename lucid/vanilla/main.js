import './style.css'
import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const init = () => {
	return new Swiper('.swiper', {
		// configure Swiper to use modules
		modules: [Navigation, Pagination],
		loop: true,
		navigation: {                                                               
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets'
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: false
		},
		
		// 스피드 관련된
		speed: 300,
		spaceBetween: 1,
		
		mousewheel: {
			invert: true
		},
		//
		zoom: 2,
		effect: 'fade'
	});
	
}

const handleSlideChange = (e) => {
	console.log(e)
}

const swiper = init();

swiper.on('slideChange', handleSlideChange)




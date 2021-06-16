const articleSlider = document.querySelector('.article-slider__container');
let articleSwiper = new Swiper(articleSlider, {
	loop: true,
	slidesPerGroup: 1,
	speed: 800,
	pagination: {
		el: ".article-pagination",
		type: "bullets",
	},
	// pagination: {
	// 	el: ".swiper-pagination",
	// 	type: "progressbar",
	// },
	// autoplay: {
	// 	delay: 3000,
	// 	disableOnInteraction: false,
	// },
	// on: {
	// 	init() {
	// 		this.el.addEventListener('mouseenter', () => {
	// 			this.autoplay.stop();
	// 		});
	// 		this.el.addEventListener('mouseleave', () => {
	// 			this.autoplay.start();
	// 		});
	// 	}
	// },
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	breakpoints: {
		300: {
			slidesPerView: 'auto',
		},
		320: {
			slidesPerView: 'auto',
		},
		580: {
			spaceBetween: 20,
			slidesPerView: 3,
			effect: 'slide',
		},
		767: {
			spaceBetween: 20,
			slidesPerView: 3,
		},
		1170: {
			slidesPerView: 1,
			effect: 'fade',
			fadeEffect: {
				crossFade: true,
			},
		}
	},
});
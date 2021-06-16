// Slider-swiper
const sliderMain = document.querySelector('.main-slider');
const sliderNav = document.querySelector('.slider-nav');
let mySwiperNav = new Swiper(sliderNav, {
	slidesPerGroup: 1,
	loopedSlides: 4,
	freeMode: true,
	loop: true,
	direction: 'horizontal',
	navigation: {
		nextEl: '.slider-nav-next',
		prevEl: '.slider-nav-prev',
	},
	breakpoints: {
		300: {
			slidesPerView: 3,
		},
		320: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
		375: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		768: {
			spaceBetween: 33,
			slidesPerView: 4,
		}
	},
});

let mySwiperMain = new Swiper (sliderMain, {
	loop: false,
	loopedSlides: 4,
	thumbs: {
		swiper: mySwiperNav,
	},
});
// Slider-swiper tabs
const swiper = new Swiper('.swiper-container', {
			loop: true,
			slidesPerGroup: 1,
			spaceBetween: 20,
			speed: 800,
			observer: true,
			observeParents: true,
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar",
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				300: {
					slidesPerView: 'auto',
				},
				320: {
					slidesPerView: 'auto',
				},
				580: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1100: {
					slidesPerView: 3,
				},
				1300:{
					slidesPerView: 4,
				},
			},
		});
		(function($) {
			$(function() {
				$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
					$(this)
					.addClass('active').siblings().removeClass('active')
					.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
				});
			});
		})(jQuery);

// Mounting Slider
const mountingSlider = document.querySelector('.mounting-slider__container');
let mountingSwiper = new Swiper(mountingSlider, {
	loop: true,
	spaceBetween: 20,
	// slidesPerView:'auto',
	slidesPerGroup: 1,
	speed: 800,
	pagination: {
		el: ".swiper__pagination",
		type: "progressbar",
	},
	slideClass: 'mounting__column',
	navigation: {
		nextEl: '.swiper-btn-next',
		prevEl: '.swiper-btn-prev',
	},
	breakpoints: {
		300: {
			slidesPerView: 'auto',
		},
		320: {
			slidesPerView: 'auto',
		},
		580: {
			slidesPerView: 2,
		},
		767: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1100: {
			slidesPerView: 3,
		},
		1300:{
			slidesPerView: 4,
		},
	},
});



// TABS
$(document).ready(function(){
	$('.tabs-triggers__item').click(function(e) {
		e.preventDefault();
	// Обращаемся ко всем элементам
	$('.tabs-triggers__item').removeClass('tabs-triggers__item_active');
	$('.tabs-content__item').removeClass('tabs-content__item_active');
	// Обращаемся к текущему элементу
	$(this).addClass('tabs-triggers__item_active');
	$($(this).attr('href')).addClass('tabs-content__item_active');
});
	// Делаем первый таб активным по умолчанию
	$('.tabs-triggers__item:first').click();
});

// Popup-slider
const sliderMounting = document.querySelector('.popup-slider');
let mySwiperMounting = new Swiper(sliderMounting, {
	slidesPerView: 1,
	slidesPerGroup: 1,
	loop: true,
	navigation: {
		nextEl: '.popup-nav-next',
		prevEl: '.popup-nav-prev',
	},
	breakpoints: {
		300: {
			slidesPerView: 1,
		},
	},
});
// Mounting popup
$('.mounting__item').click(function (e) {
	e.preventDefault();
	$('.popup.mounting').addClass('active');
	$('body').addClass('lock');
});
$('.popup__close').click(function (e) {
	e.preventDefault();
	$('.popup.mounting').removeClass('active');
	$('body').removeClass('lock');
});
$('.popup.mounting').mouseup(function (e) {
	let modalContent = $('.popup__body');
	if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('active');
	}
	$('body').removeClass('lock');
});



// Modals
// const reviewsBtn = document.querySelector('#reviews-btn');
// const popupReviews = document.querySelector('.popup.reviews');
// const closeBtn = document.querySelector('.popup__close');

// let openWindow = function openWindow() {
// 	reviewsBtn.classList.toggle('active');
// 	popupReviews.classList.toggle('active');
// };
// reviewsBtn.addEventListener('click', function(e) {
// 	e.stopPropagation();
// 	openWindow();
// });
// closeBtn.addEventListener('click', function(e){
// 	popupReviews.classList.remove('active');
// });
// document.addEventListener('click', function (e) {
// 	let target = e.target;
// 	let menu = target == popupReviews || popupReviews.contains(target);
// 	let button = target == reviewsBtn;
// 	let menu_is_active = popupReviews.classList.contains('active');
// 	if (!menu && !button && menu_is_active) {
// 		openWindow();
// 	}
// });


$('#reviews-btn').click(function () {
	$('.popup.reviews').addClass('active');
	$('body').addClass('lock');
});
$('.popup__close').click(function () {
	$('.popup.reviews').removeClass('active');
});
$('.popup.reviews').mouseup(function (e) {
	let modalContent = $(".popup__body");
	if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('active');
	}
	$('body').removeClass('lock');
});

$('#btn-buy').click(function () {
	$('.popup.buy').addClass('active');
	$('body').addClass('lock');
});
$('.popup__close').click(function (e) {
	e.preventDefault();
	$('.popup.buy').removeClass('active');
});
$('.popup.buy').mouseup(function (e) {
	let modalContent = $(".popup__body");
	if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('active');
	}
	$('body').removeClass('lock');
});

$('#delivery').click(function () {
	$('.popup.delivery').addClass('active');
	$('body').addClass('lock');
});
$('.popup__close').click(function (e) {
	e.preventDefault();
	$('.popup.delivery').removeClass('active');
});
$('.popup.delivery').mouseup(function (e) {
	let modalContent = $(".popup__body");
	if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('active');
	}
	$('body').removeClass('lock');
});

$('#payment').click(function () {
	$('.popup.payment').addClass('active');
	$('body').addClass('lock');
});
$('.popup__close').click(function (e) {
	e.preventDefault();
	$('.popup.payment').removeClass('active');
});
$('.popup.payment').mouseup(function (e) {
	let modalContent = $(".popup__body");
	if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('active');
	}
	$('body').removeClass('lock');
});

$('#advantages-btn').click(function () {
	$('.popup.advantages').addClass('active');
	$('body').addClass('lock');
});
$('.popup__close').click(function (e) {
	e.preventDefault();
	$('.popup.advantages').removeClass('active');
});
$('.popup.advantages').mouseup(function (e) {
	let modalContent = $(".popup__body");
	if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('active');
	}
	$('body').removeClass('lock');
});


// Radio кнопки
$(document).ready(function() {
	$.each($(".radiobutton__item"), function(index, val) {
		if ($(this).find('input').prop("checked")==true) {
			$(this).addClass('active');
		};
	});
	$(document).on('click', '.radiobutton__item', function(event) {
		allRadio = $(this).parents()['0'].children;
		for (child of Object.values(allRadio)) {
			$(child).removeClass("active");
			child.firstElementChild.checked = false;
		};
		$(this).toggleClass("active");
		$(this).find('input').prop('checked', true);
		return false;
	});
	$('#mounting__label').click(function(){
		$(this).toggleClass('active');
		$('.radiobuttons.mounting').toggleClass('active')
	});
	$('#color__label').click(function(){
		$(this).toggleClass('active');
		$('.radiobuttons.colors').toggleClass('active')
	});
});

// Custom-select
$(".custom-select").each(function() {
	var classes = $(this).attr("class"),
	id      = $(this).attr("id"),
	name    = $(this).attr("name");
	var template =  '<div class="' + classes + '">';
	template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
	template += '<div class="custom-options">';
	$(this).find("option").each(function() {
		template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
	});
	template += '</div></div>';

	$(this).wrap('<div class="custom-select-wrapper"></div>');
	$(this).hide();
	$(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
	$(this).parents(".custom-options").addClass("option-hover");
}, function() {
	$(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
	$('html').one('click',function() {
		$(".custom-select").removeClass("opened");
	});
	$(this).toggleClass('active');
	$(this).parents(".custom-select").toggleClass("opened");
	event.stopPropagation();
});
$(".custom-option").on("click", function() {
	$(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
	$(this).parents(".custom-options").find(".custom-option").removeClass("selection");
	$(this).addClass("selection");
	$(this).parents(".custom-select").removeClass("opened");
	$(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});


// Всплывающее окно при наведение на иконку информации
$('.tabs-size__icon.type').mouseover(function(){
	$('.window-info.type').slideToggle(300, function(){
		$(this).addClass('show');
	});
});
$('.tabs-size__icon.type').mouseout(function(){
	$('.window-info.type').slideToggle(300, function(){
		$(this).removeClass('show');
	});
});

$('.tabs-size__icon.test').mouseover(function(){
	$('.window-info.test').slideToggle(300, function(){
		$(this).addClass('show');
	});
});
$('.tabs-size__icon.test').mouseout(function(){
	$('.window-info.test').slideToggle(300, function(){
		$(this).removeClass('show');
	});
});


// <script>
// // When the user scrolls the page, execute myFunction 
// window.onscroll = function() {myFunction()};

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }
// </script>

// <div class="header">
//   <h2>Scroll Indicator</h2>
//   <div class="progress-container">
//     <div class="progress-bar" id="myBar"></div>
//   </div>  
// </div>

// .progress-container {
//   width: 100%;
//   height: 8px;
//   background: #ccc;
// }

// .progress-bar {
//   height: 8px;
//   background: #4caf50;
//   width: 0%;
// }
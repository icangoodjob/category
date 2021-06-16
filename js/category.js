// CHECKBOX (Наличие)
$.each($('.checkbox'), function(index, val) {
	if ($(this).find('input').prop('checked')==false) {
		$(this).addClass('active');
	};
});
    // Событие click на класс CHECKBOX
    $(document).on('click', '.checkbox', function(event) {
    	if ($(this).hasClass('active')) {
    		$(this).find('input').prop('checked', false);
    	} else {
    		$(this).find('input').prop('checked', true);
    	};
    	$(this).toggleClass('active');
    	return false;
    });

// Select
document.querySelectorAll('.select').forEach(select => {
	let selectCurrent = select.querySelector('.select__current'),
	selectList = select.querySelector('.select__list'),
	selectInput = select.querySelector('.select__input'),
	selectItem = select.querySelectorAll('.select__item');
	selectCurrent.addEventListener('click', () => {
		select.classList.toggle('active')
		selectCurrent.classList.toggle('active')
		selectList.classList.toggle('select__list--show')
	});
	selectItem.forEach(item =>{
		item.addEventListener('click', ()=>{
			let itemValue = item.getAttribute('data-value')
			let itemText = item.textContent
			// selectInput.value === itemValue
			selectCurrent.textContent = itemText
			selectListHide()
		})
	})

	let selectListHide = () => {
		selectList.classList.remove('select__list--show')
	}
	document.addEventListener('mouseup', (e) =>{
		if (!select.contains(e.target))	selectListHide()
	})
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


// Checkbox
$('.name-check').click(function () {
	$(this).toggleClass('check');
	$('.aside-checkbox__list').toggleClass('active');
	const block = $(this).closest('.block').find('.checkbox-item');
	if (block.css('display') === 'block') {
		block.removeClass('active');
	} else {
		block.toggleClass('active');
	};
});

// Хлебные крошки
$(document).on('click', '.content-tags__list .show-more', function () {
	$('.content-tags__list li').removeClass('hidden')
	$(this).addClass('hidden')
});
$(document).on('click', '.content-tags__list .hide-more', function () {
	let skip = true
	$.each($('.content-tags__list li'), function () {
		if (skip === false) {
			$(this).addClass('hidden')
		}
		if ($(this).text() === 'Еще') {
			$(this).removeClass('hidden')
			skip = false
		};
	});
});

// Swiper
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



// CategoryBtn
const categoryBtn = document.querySelector('.catalog-category');
const menuCategory = document.querySelector('.menu__category');

let toggleMenu = function toggleMenu() {
	menuCategory.classList.toggle('active');
	categoryBtn.classList.toggle('active');
};
categoryBtn.addEventListener('click', function(e) {
	e.stopPropagation();
	toggleMenu();
});
document.addEventListener('click', function (e) {
	let target = e.target;
	let menu = target == menuCategory || menuCategory.contains(target);
	let button = target == categoryBtn;
	let menu_is_active = menuCategory.classList.contains('active');
	if (!menu && !button && menu_is_active) {
		toggleMenu();
	}
});

// FilterBtn
const filterBtn = document.querySelector('.filter__btn');
const sidebar = document.querySelector('.aside');
const categoryOverlay = document.querySelector('.category-overlay');
const body = document.querySelector('body');
const asideClose = document.querySelector('.aside__close');
let openMenu = function openMenu() {
	sidebar.classList.toggle('active');
	filterBtn.classList.toggle('active');
	categoryOverlay.classList.toggle('active');
	body.classList.toggle('lock');
};
filterBtn.addEventListener('click', function(e) {
	e.stopPropagation();
	openMenu();
});
asideClose.onclick = function(){
	sidebar.classList.remove('active');
	categoryOverlay.classList.remove('active');
	body.classList.remove('lock');
};
document.addEventListener('click', function (e) {
	let target = e.target;
	let asideMenu = target == sidebar || sidebar.contains(target);
	let filterButton = target == filterBtn;
	let menu_is_active = sidebar.classList.contains('active');
	if (!asideMenu && !filterButton && menu_is_active) {
		openMenu();
	}
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
});
$('.popup__close').click(function (e) {
	e.preventDefault();
	$('.popup.mounting').removeClass('active');
});
$('.popup.mounting').mouseup(function (e) {
	let modalContent = $(".popup__body");
	if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('active');
	}
});


// Всплывающее окно like-info / filter-info
$('.card-btn__like').mouseover(function(){
	$(this).parents('.card-btn__like-wrap').find(".like-info").addClass('show');
});
$('.card-btn__like').mouseout(function(){
	$(this).parents('.card-btn__like-wrap').find(".like-info").removeClass('show');
});
$('.card-btn__filter').mouseover(function(){
	$(this).parents('.card-btn__filter-wrap').find(".filter-info").addClass('show');
});
$('.card-btn__filter').mouseout(function(){
	$(this).parents('.card-btn__filter-wrap').find(".filter-info").removeClass('show');
});
// Выбранный товар
$('.card-btn__like').click(function(){
	$(this).toggleClass('bg');
});


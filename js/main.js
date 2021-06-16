// ОКНО ВЫЗОВА КАТАЛОГА
$('#header__catalog').click(function(){
	$('.catalog__window').toggleClass('active');
	$('.overlay').toggleClass('active');
});

// Плавная прокрутка страницы на самый верх
$(function() {
	$('.go-up__btn').click(function(){
		$('html, body').animate({scrollTop: 0}, 2000);
	});
	});

// Меню Burger
$(document).ready(function() {
	$('.burger').click(function(event) {
		$('.burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.adaptive__logo').toggleClass('active');
		$('.header__top').toggleClass('white');
		$('.adaptive__user__btn').toggleClass('black');
		$('.adaptive__basket__btn').toggleClass('black');
	});
});

// Каталог адаптив
const catalogBtn = document.querySelector('.menu__link_catalog'),
subMenuCatalog = document.querySelector('.sub-menu__catalog');

catalogBtn.addEventListener('click', function(e){
	e.preventDefault();
	this.classList.toggle('active');
	subMenuCatalog.classList.toggle('active');
});



// $('.name-check').click(function(){
// 	$(this).toggleClass('check');
// 	$('.checkbox-item').toggleClass('active');
// });





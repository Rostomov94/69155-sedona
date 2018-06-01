var Nav = document.querySelector('.nav__list');
var Nav__toggle = document.querySelector('.nav__toggle');

Nav__toggle.addEventListener('click', function () {
	if (Nav.classList.contains('nav__list--closed')) {
		Nav.classList.remove('nav__list--closed');
		Nav.classList.add('nav__list--open');   
	} else {
		Nav.classList.remove('nav__list--open');
		Nav.classList.add('nav__list--closed');
	}
});

Nav.classList.add('nav__list--closed');
Nav__toggle.classList.remove('nav__toggle--nojs');




var NavIconGamburger = document.querySelector('.nav__icon--gamburger');
var NavIconCross = document.querySelector('.nav__icon--cross');

Nav__toggle.addEventListener('click', function () {				
	if (NavIconGamburger.classList.contains('nav__icon-hide')) {
		NavIconGamburger.classList.remove('nav__icon-hide');
		NavIconGamburger.classList.add('nav__icon-visible');
	} else {
		NavIconGamburger.classList.remove('nav__icon-visible');
		NavIconGamburger.classList.add('nav__icon-hide');
	}
});

Nav__toggle.addEventListener('click', function () {				
	if (NavIconCross.classList.contains('nav__icon-hide')) {
		NavIconCross.classList.remove('nav__icon-hide');
		NavIconCross.classList.add('nav__icon-visible');
	} else {
		NavIconCross.classList.remove('nav__icon-visible');
		NavIconCross.classList.add('nav__icon-hide');
	}
});
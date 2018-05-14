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
var Nav = document.querySelector('.nav__list');
var Nav__toggle = document.querySelector('.nav__toggle-open');


Nav__toggle.addEventListener('click', function () {
    
	if (Nav.classList.contains('nav--closed')) {
        
		Nav.classList.remove('nav--closed');
		Nav.classList.add('nav--open');
        
	}
    
	else {
        
		Nav.classList.remove('nav--open');
		Nav.classList.add('nav--closed');
        
	}

});


var Nav = document.querySelector('.nav__list');
var Nav__toggle = document.querySelector('.nav__toggle-close');


Nav__toggle.addEventListener('click', function () {
    
	if (Nav.classList.contains('nav--open')) {
        
		Nav.classList.remove('nav--open');
		Nav.classList.add('nav--closed');
        
	}
    
	else {
        
		Nav.classList.remove('nav--closed');
		Nav.classList.add('nav--open');
        
	}

});
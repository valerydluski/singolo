
//script for navigation panel
const NAVIGATION = document.getElementById('NAVIGATION');
const links = NAVIGATION.querySelectorAll('a');

NAVIGATION.addEventListener('click', (event) => {
	const navLinks = event.target;
	if(navLinks.classList.contains('nav__link')){
		navLinks.querySelectorAll('a').forEach(el => el.classList.remove('nav-active'));
		event.target.classList.add('nav-active');
	}	
})

document.addEventListener('scroll', onScroll);

  const headerHeight = 95

function onScroll(event){
	const curPos = window.scrollY;
	const links = NAVIGATION.querySelectorAll('a');
	let servicesPosition = document.getElementById("services").offsetTop - headerHeight;
	let portfolioPosition = document.getElementById("portfolio_link").offsetTop - headerHeight;
	let aboutPosition = document.getElementById("about-us__link").offsetTop - headerHeight;
	let contactPosition = document.getElementById("contact__link").offsetTop - headerHeight;
	
	if(curPos < servicesPosition) {
		links.forEach(el => el.classList.remove('nav-active'));
        links[0].classList.add('nav-active');
    }
	if(curPos >= servicesPosition && curPos < portfolioPosition) {
		links.forEach(el => el.classList.remove('nav-active'));
        links[1].classList.add('nav-active');
	}
	if(curPos >= portfolioPosition && curPos < aboutPosition) {
		links.forEach(el => el.classList.remove('nav-active'));
        links[2].classList.add('nav-active');
	}
	if(curPos >= aboutPosition && curPos < contactPosition) {
		links.forEach(el => el.classList.remove('nav-active'));
        links[3].classList.add('nav-active');
	}
	if(curPos >= contactPosition) {
		links.forEach(el => el.classList.remove('nav-active'));
        links[4].classList.add('nav-active');
    }
}
//script for button in vertical phone
document.getElementById('button-vertical').addEventListener('click', (event) => {
    document.getElementById('phone-vertical').classList.remove('display__on');
    event.target.classList.add('button__off');
    document.getElementById('button-vertical-off').classList.remove('button__off')
});

document.getElementById('button-vertical-off').addEventListener('click', (event) => {
    document.getElementById('phone-vertical').classList.add('display__on');
    event.target.classList.add('button__off');
    document.getElementById('button-vertical').classList.remove('button__off')
});

//script for button in horizontal phone
document.getElementById('button-horizontal').addEventListener('click', () => {
    document.getElementById('phone-horizontal').classList.remove('display__on');
    event.target.classList.add('button__off');
    document.getElementById('button-horizontal-off').classList.remove('button__off')
});

document.getElementById('button-horizontal-off').addEventListener('click', (event) => {
    document.getElementById('phone-horizontal').classList.add('display__on');
    event.target.classList.add('button__off');
    document.getElementById('button-horizontal').classList.remove('button__off')
});
   
//sript for buttons in portfolio 
const SHUFF_ALL = document.getElementById('button-all');

SHUFF_ALL.addEventListener('click', (event) => {
	if(event.target.tagName === "BUTTON"){
		[...portfolio__grid.children].sort(() => Math.random() > 0.5 ? 1 : -1).forEach(f => portfolio__grid.appendChild(f));
		SHUFF_ALL.querySelectorAll('button').forEach(el => el.classList.remove('active__button'));
		event.target.classList.add('active__button');
	}	
  });

//script for slider
let slides = document.querySelectorAll('.slider .slide');
let currentSlide = 0;
let isEnabled = true;
let slider = document.getElementById('slider-wrapper');

function changeCurrentSlide(n) {
	currentSlide = (n + slides.length) % slides.length;
}

function hideSlide(direction) {
	isEnabled = false;
	slides[currentSlide].classList.add(direction);
	slides[currentSlide].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
	
}

function showSlide(direction) {
	slides[currentSlide].classList.add('next', direction);
	slides[currentSlide].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextSlide(n) {
	hideSlide('to-left');
	changeCurrentSlide(n + 1);
	showSlide('from-right');
}

function previousSlide(n) {
	hideSlide('to-right');
	changeCurrentSlide(n - 1);
	showSlide('from-left');
}

document.querySelector('.left').addEventListener('click', function() {
	if (isEnabled) {
		previousSlide(currentSlide);
		if (slider.classList[1] == 'blue-slider') {
			slider.classList.remove('blue-slider');
		}
		else { slider.classList.add('blue-slider'); }	
	}

});

document.querySelector('.right').addEventListener('click', function() {
	if (isEnabled) {
		nextSlide(currentSlide);
		if (slider.classList[1] == 'blue-slider') {
			slider.classList.remove('blue-slider');
		}
		else { slider.classList.add('blue-slider'); }
	}
});



//script for picture in portfolio
const portfolioImg = document.getElementById('portfolio__grid');

portfolioImg .addEventListener('click', (event) => {
    portfolioImg .querySelectorAll('img').forEach(el => el.classList.remove('active-img'));
    event.target.classList.add('active-img');
})


//sript for form


const BUTTON__SUBMIT = document.getElementById('BUTTON__SUBMIT');
const BUTTON__CLOSE = document.getElementById('BUTTON__CLOSE');



BUTTON__SUBMIT.addEventListener('click', ()=>{
	let subject = document.getElementById('subject').value.toString();
	let describe = document.getElementById('describe').value.toString();
	

	if(subject.length==0){
		document.getElementById('subject-text').innerText = 'Без темы';
	}
	else{
		document.getElementById('subject-text').innerText = 'Тема:\u00A0'+subject;
	}
	if(describe.length==0){
		document.getElementById('describe-text').innerText = 'Без описания';
	}
	else{
		document.getElementById('describe-text').innerText = 'Описание:\u00A0'+describe;
	}
	if (document.getElementById('name').checkValidity() && document.getElementById('email').checkValidity()){
	document.getElementById('message-block').classList.remove('post__message')
	}
});

BUTTON__CLOSE.addEventListener('click', ()=>{
	document.getElementById('subject-text').innerText = '';
	document.getElementById('describe-text').innerText = '';
	document.getElementById('form').reset();
	document.getElementById('message-block').classList.add('post__message');

});	


//sript for hamburger
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger.addEventListener('click', () => {
	{
		if (hamburger.classList[1] == 'is-active') {
			hamburger.classList.remove('is-active');
			menu.classList.remove('active-menu');
		}
		else{
			hamburger.classList.add('is-active');
			menu.classList.add('active-menu');
		}	
	}	
})

const hamburgerLinks = menu.querySelectorAll('a');
menu.addEventListener('click', (event) => {
	const hamburgerA = event.target;
	if(hamburgerA.classList.contains('hamburger__link')){
		hamburgerLinks.forEach(el => el.classList.remove('hamburger-active'));
		event.target.classList.add('hamburger-active');
	}		
})

document.addEventListener('scroll', hamburgerOnScroll);

function hamburgerOnScroll(event){
	const curPos = window.scrollY;
	const hamburgerLinks = menu.querySelectorAll('a');
	let hamburgerServicesPosition = document.getElementById("services-wrapper").offsetTop;
	let hamburgerPortfolioPosition = document.getElementById("portfolio-wrapper").offsetTop;
	let hamburgerAboutPosition = document.getElementById("about-us-wrapper").offsetTop;
	let hamburgerContactPosition = document.getElementById("contact-wrapper").offsetTop;
	
	if(curPos < hamburgerServicesPosition) {
		hamburgerLinks.forEach(el => el.classList.remove('hamburger-active'));
        hamburgerLinks[0].classList.add('hamburger-active');
    }
	if(curPos >= hamburgerServicesPosition && curPos < hamburgerPortfolioPosition) {
		hamburgerLinks.forEach(el => el.classList.remove('hamburger-active'));
        hamburgerLinks[1].classList.add('hamburger-active');
	}
	if(curPos >= hamburgerPortfolioPosition && curPos < hamburgerAboutPosition) {
		hamburgerLinks.forEach(el => el.classList.remove('hamburger-active'));
        hamburgerLinks[2].classList.add('hamburger-active');
	}
	if(curPos >= hamburgerAboutPosition && curPos < hamburgerContactPosition) {
		hamburgerLinks.forEach(el => el.classList.remove('hamburger-active'));
        hamburgerLinks[3].classList.add('hamburger-active');
	}
	if(curPos >= hamburgerContactPosition) {
		hamburgerLinks.forEach(el => el.classList.remove('hamburger-active'));
        hamburgerLinks[4].classList.add('hamburger-active');
    }
}
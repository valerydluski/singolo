//script for navigation panel
const NAVIGATION = document.getElementById('NAVIGATION');

NAVIGATION.addEventListener('click', (event) => {
    NAVIGATION.querySelectorAll('a').forEach(el => el.classList.remove('nav-active'));
    event.target.classList.add('nav-active');
})

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
    [...portfolio__grid.children].sort(() => Math.random() > 0.5 ? 1 : -1).forEach(f => portfolio__grid.appendChild(f));
    SHUFF_ALL.querySelectorAll('button').forEach(el => el.classList.remove('active__button'));
    event.target.classList.add('active__button');
  });

//script for slider
let slides = document.querySelectorAll('.slider .slide');
let currentSlide = 0;
let isEnabled = true;

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
		
	}
});

document.querySelector('.right').addEventListener('click', function() {
	if (isEnabled) {
		nextSlide(currentSlide);
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
	document.getElementById('message-block').classList.add('post__message');
});	
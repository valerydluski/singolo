const NAVIGATION = document.getElementById('NAVIGATION');

const SHUFF_ALL = document.getElementById('button-all')

const BUTTON__SUBMIT = document.getElementById('BUTTON__SUBMIT');
const BUTTON__CLOSE = document.getElementById('BUTTON__CLOSE');

//script for navigation panel
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
SHUFF_ALL.addEventListener('click', (event) => {
    [...portfolio__grid.children].sort(() => Math.random() > 0.5 ? 1 : -1).forEach(f => portfolio__grid.appendChild(f));
    SHUFF_ALL.querySelectorAll('button').forEach(el => el.classList.remove('active__button'));
    event.target.classList.add('active__button');
  });

//sript for form
BUTTON__SUBMIT.addEventListener('click', () => {
    const subject = document.getElementById('subject').value.toString();
    document.getElementById('result').innerText = subject;
    document.getElementById('message__block').classList.remove('post__message');
})

BUTTON__CLOSE.addEventListener('click', () => {
    document.getElementById('result').innerText = '';
    document.getElementById('message__block').classList.add('post__message');
})
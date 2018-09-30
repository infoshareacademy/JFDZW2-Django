// SMOOTH SCROLL
const classJsSmooth = document.getElementsByClassName('js-smooth');


for (let i = 0; i < classJsSmooth.length; i++) {
    addListener(classJsSmooth[i]);
}

function smoothScroll(scrolId) {
    let scrollIdElem = document.querySelector(scrolId);
    if (scrollIdElem != null) {
        scrollIdElem.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        });
    } else {
        // debug
        console.log(`Impossibru to scroll! Target does not exist! Pls attach ${scrolId} to target section.`);
    }
}

function addListener(elem) {
    elem.addEventListener('click', function (event) {
        event.preventDefault();
        smoothScroll(this.dataset.slide);
    });
}

// STICKY NAV, MENU HIGHLIGHT
const classJsNav = document.getElementsByClassName('js-nav');

window.onscroll = function () {
    let navHeight = nav.clientHeight;
    let offset = window.pageYOffset;
    stickyNav(navHeight, offset);
    menuHighlight(navHeight, offset);
};

function menuHighlight(navHeight, offset) {
    let product = document.querySelector('#product');
    let newsletter = document.querySelector('#newsletter');
    let team = document.querySelector('#ourteam');
    //TODO: refactor this ugly part
    if (offset + navHeight >= product.offsetTop && offset + navHeight < newsletter.offsetTop) {
        classJsNav[0].classList.add('c-nav__link--active');
        classJsNav[1].classList.remove('c-nav__link--active');
        classJsNav[2].classList.remove('c-nav__link--active');
    } else if (offset + navHeight >= newsletter.offsetTop && offset + navHeight < team.offsetTop) {
        classJsNav[1].classList.add('c-nav__link--active');
        classJsNav[0].classList.remove('c-nav__link--active');
        classJsNav[2].classList.remove('c-nav__link--active');
    } else if (offset + navHeight >= team.offsetTop) {
        classJsNav[2].classList.add('c-nav__link--active');
        classJsNav[0].classList.remove('c-nav__link--active');
        classJsNav[1].classList.remove('c-nav__link--active');
    } else {
        classJsNav[0].classList.remove('c-nav__link--active');
        classJsNav[1].classList.remove('c-nav__link--active');
        classJsNav[2].classList.remove('c-nav__link--active');
    }
}

const nav = document.querySelector('.js-sticky');
const main = document.querySelector('.js-main');
const cHead = document.querySelector('.js-head');
const navOffset = nav.offsetTop;

function stickyNav(navHeight, offset) {


    if (offset > navOffset) {
        nav.classList.add('c-header--sticky');
        cHead.classList.add('c-header--no-padding');
        main.style.marginTop = navHeight + 'px';
    } else {
        nav.classList.remove('c-header--sticky');
        cHead.classList.remove('c-header--no-padding');
        main.style.marginTop = 0;
    }
}

// COOKIES


if (localStorage.getItem('state') === null){
    localStorage.setItem('state', 'on');
} else if(localStorage.getItem('state') === 'off'){
    var cookieBox = document.querySelector('.o-cookie-info');
    cookieBox.classList.add('o-cookie-info--hidden');
}

function cookieOff(){
    if (localStorage.getItem('state') === 'on'){
            localStorage.setItem('state', 'off');
            var cookieBox = document.querySelector('.o-cookie-info');
                cookieBox.classList.add('o-cookie-info--hidden');
        }
    }

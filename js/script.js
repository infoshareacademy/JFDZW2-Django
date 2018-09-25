// SMOOTH SCROLL
const element = document.getElementsByClassName('js-smooth');

for (let i = 0; i < element.length; i++) {
    addListener(element[i]);
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


// STICKY NAV
window.onscroll = function () {
    stickyNav()
};

const nav = document.querySelector('.js-sticky');
const main = document.querySelector('.js-main');
const cHead = document.querySelector('.js-head');
const offset = nav.offsetTop;

function stickyNav() {
    let navHeight = nav.clientHeight;

    if (window.pageYOffset > offset) {
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

var cookieHideBtn = document.querySelector('.o-cookie-hide');

var onCookieCLickHandler = function () {
    console.log('hi!');
    var cookieBox = document.querySelector('.o-cookie-info');
    cookieBox.classList.add('o-cookie-info--hidden');

    // @TODO use local storage to save if cookie box is hidden (or not)
}

cookieHideBtn.addEventListener('click', onCookieCLickHandler)
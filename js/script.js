window.onscroll = function () {
    stickyNav()
};

var nav = document.querySelector('.js-sticky');
var main = document.querySelector('.js-main');
var offset = nav.offsetTop;


function stickyNav() {
    var navHeight = nav.clientHeight;

    if (window.pageYOffset > offset) {
        nav.classList.add('c-header--sticky');
        main.style.marginTop = navHeight + 'px';

    } else {
        nav.classList.remove('c-header--sticky');
        main.style.marginTop = 0;
    }
}

var cookieHideBtn = document.querySelector('.o-cookie-hide');

var onCookieCLickHandler = function () {
    console.log('hi!');
    var cookieBox = document.querySelector('.o-cookie-info');
    cookieBox.classList.add('o-cookie-info--hidden');

    // @TODO use local storage to save if cookie box is hidden (or not)
}

cookieHideBtn.addEventListener( 'click', onCookieCLickHandler)
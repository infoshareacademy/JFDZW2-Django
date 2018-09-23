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
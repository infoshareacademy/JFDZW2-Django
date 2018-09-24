window.onscroll = function () {
    stickyNav()
};

var nav = document.querySelector('.js-sticky');
var main = document.querySelector('.js-main');
var cHead = document.querySelector('.js-head');
var offset = nav.offsetTop;


function stickyNav() {
    var navHeight = nav.clientHeight;

    if (window.pageYOffset > offset) {
        nav.classList.add('c-header--sticky');
        main.style.marginTop = navHeight + 'px';
        cHead.style.padding = '0 20px';
        
    } else {
        nav.classList.remove('c-header--sticky');
        main.style.marginTop = 0;
        cHead.style.padding = '20px';
    }
}
// import * as bootstrap from 'bootstrap';

const sidebarToggle = document.body.querySelector('#sidebarToggle');
const sidebarToggleTop = document.body.querySelector('#sidebarToggleTop');
const sidebar = document.body.querySelector('.sidebar');
const scrollOnTop = document.body.querySelector('.scroll-to-top');

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

function toggleClass(element, className) {
    if (hasClass(element, className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}

if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
        toggleClass(sidebar, "toggled");
    });
}

if (sidebarToggleTop) {
    sidebarToggleTop.addEventListener('click', () => {
        toggleClass(sidebar, "toggled");
    });
}

let scrollToTop = function () {

    if (!scrollOnTop)
        return false;
    scrollOnTop.style.opacity = window.scrollY === 0 ?
        '0' :
        '1';

}

window.addEventListener('DOMContentLoaded', event => {
    scrollToTop();
    document.addEventListener('scroll', scrollToTop);
})
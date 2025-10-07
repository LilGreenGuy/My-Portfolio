const nav = document.getElementById('nav-main');

window.addEventListener('scroll', () => {
    if (window.scrollY > 175) {
        nav.classList.add('nav-scroll');
        nav.classList.remove('hide-nav');
    } else {
        nav.classList.remove('nav-scroll');
        nav.classList.add('hide-nav');
    }
});
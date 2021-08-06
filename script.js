// Hamburger nav
let ham = document.querySelector('header a#drop-down');
let nav = document.querySelector('div#mobile-nav');
ham.addEventListener('click', function(e){
    nav.classList.toggle('hide');
})
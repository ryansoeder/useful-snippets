const body = document.querySelector('body');
const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');
let menuOpen = false;

menuBtn.addEventListener('click', event => {

    if (!menuOpen) {
        menuBtn.classList.add('open');
        menu.classList.add('open');

        menuOpen = true;

        event.stopPropagation();
    } else {
        menuBtn.classList.remove('open');
        menu.classList.remove('open');

        menuOpen = false;

        event.stopPropagation();
    }
});

// close if clicked outside nav

body.addEventListener('click', event => { 

    const nav = document.querySelector('nav');

    if (nav.contains(event.target)) {
        return;
    } else {
        menu.classList.remove('open');
        menuBtn.classList.remove('open');
        
        menuOpen = false;
    }
});

// close if clicked anywhere

body.addEventListener('click', event => { 
    
    if (menuOpen) {
        menu.classList.remove('open');
        menuBtn.classList.remove('open');
        
        menuOpen = false;
    }
});

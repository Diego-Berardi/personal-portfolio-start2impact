
// javascript letter for rubberBand animation
let letterHomePage = document.querySelectorAll('.letter')

for(let i=0; i<letterHomePage.length; i++) {
    
    letterHomePage[i].addEventListener('animationend', () => letterHomePage[i].classList.remove('rubberBand'));

    letterHomePage[i].addEventListener('mouseover', () => letterHomePage[i].classList.add('rubberBand'));
    letterHomePage[i].addEventListener('click', () => letterHomePage[i].classList.add('rubberBand'));
}



// CURSOR function for the custom cursor---

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e =>  {
    cursor.setAttribute('style', 'top: '+(e.pageY - 10) +'px; left: '+(e.pageX-10)+'px;' )
})




// javascript for the MENU button nav

const menuBtn_div = document.querySelector('.menu-btn');

const mobileMenu_div = document.querySelector('.mobile-menu');

function togleClass(){
    menuBtn_div.classList.toggle('open-btn');
    mobileMenu_div.classList.toggle('mobile-menu-open')
}

menuBtn_div.addEventListener('click', togleClass)


// const listMenu_ul = document.querySelector('.list-menu');

mobileMenu_div.addEventListener('click', togleClass)











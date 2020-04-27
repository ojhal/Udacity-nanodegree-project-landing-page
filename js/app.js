/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section')


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//check which element is active
function getActiveEle() {
    Section = sections[2];
    Val = 1000;
    for (item of sections) {
        let rect = item.getBoundingClientRect();
        if (rect.top > -100 & rect.top < Val) {
            Val = rect.top;
            Section = item;
        };

    };
    return Section;
};
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function addSections() {
    for (let item of sections) {
        let section = document.createElement('li');
        section.className = 'menu__link';
        section.dataset.nav = item.id;
        section.innerHTML = item.dataset.nav;
        navbar.appendChild(section);
    };
};
// Add class 'active' to section when near top of viewport
function Active() {
    window.addEventListener('scroll', function (event) {
        let section = getActiveEle();
        section.classList.add('your-active-class');
        for (let item of sections) {
            console.log(item);
            if (item.id != section.id & item.classList.contains('your-active-class')) {
                item.classList.remove('your-active-class');
            }
        }

        const active = document.querySelector('li[data-nav="' + section.id + '"]');
        active.classList.add('active__link');
        // remove from other headers
        const headers = document.querySelectorAll('.menu__link');
        for (let item of headers) {
            console.log(item);
            if (item.dataset.nav != active.dataset.nav & item.classList.contains('active__link')) {
                item.classList.remove('active__link');
            }
        };
    });
};
// Scroll to anchor ID using scrollTO event
function scrollWin() {
    navbar.addEventListener('click', function (event) {
        const clicked = document.querySelector('#' + event.target.dataset.nav)
        clicked.scrollIntoView();
    });
};


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
addSections();
// Scroll to section on link click
scrollWin();
// Set sections as active
Active();


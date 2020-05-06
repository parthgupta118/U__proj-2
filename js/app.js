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
const navBar = document.getElementById('navbar__list');
const navbarList = document.getElementsByTagName('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function sectionViewport(section) {
    var position = section.getBoundingClientRect();
    return ((position.top>=0 && position.bottom <= window.innerHeight) && (position.top < window.innerHeight && position.bottom >= 0));
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for(let i = 0; i < navbarList.length; i++)
{
    let navItem = document.createElement("LI");
    navItem.innerHTML = `<a href="#section${i+1}" class="menu__link">Section ${i+1}</a>`;
    navBar.appendChild(navItem);
    // document.querySelector(`#section${i}`).scrollIntoView({behavior: smooth});
}

var navItems = document.getElementsByTagName('li');
var section = document.getElementsByTagName('section');
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
// function getSection(section) {
//     document.querySelector(section).scrollIntoView({behavior: 'smooth'});
// }

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
window.addEventListener('scroll', function() {
    for(let i = 0; i < navbarList.length; i++ )
    {
        if(sectionViewport(section[i]))
        {
            section[i].classList.add('your-active-class');
            navItems[i].style.backgroundColor = 'blue';
        }
        else
        {
            section[i].classList.remove('your-active-class');
            navItems[i].style.backgroundColor = 'white';
        }

    }
});


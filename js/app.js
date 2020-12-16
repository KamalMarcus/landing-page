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
const allSections = Array.from(document.querySelectorAll('section[data-nav]'));
const navContainer = document.querySelector('#navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function setupAnchorSmoothScroll(){
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildTheNav(){
    const navFragment=document.createDocumentFragment();

    for(section of allSections){
        const navItem = document.createElement('li');
        const anchorItem=document.createElement('a');
        anchorItem.textContent=section.dataset.nav;
            anchorItem.setAttribute('href', `#${section.id}`);

            anchorItem.addEventListener("click", function() {
                activateSection(anchorItem)
              });

            navItem.append(anchorItem);
        navFragment.append(navItem);
    }
    navContainer.append(navFragment);

}

// Add class 'active' to section when near top of viewport
function activateSection(e) {
    const elems = document.querySelectorAll(".active");
  [].forEach.call(elems, function(el) {
    el.classList.remove("active");
  });
      e.className = "active";
  }

// Scroll to anchor ID using scrollTO event
setTimeout(() => {
    let mainNavLinks = document.querySelectorAll('a')
    window.addEventListener("scroll", event => {
      let fromTop = window.scrollY - 50;
    
      mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (
          section.offsetTop <= fromTop + 55 &&
          section.offsetTop + section.offsetHeight > fromTop + 55
        ) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });

    
}, 100);    

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildTheNav();
setupAnchorSmoothScroll();
// Scroll to section on link click

// Set sections as active



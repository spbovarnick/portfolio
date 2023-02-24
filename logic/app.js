/*--------------NAVIGATION LOGIC----------------*/
// variables
const aboutSection = document.getElementById("about");
const landing = document.querySelector(".home-wrap")
const xOut = document.getElementById("x-out");
const bar = document.querySelector("nav");

const sitePages = document.getElementsByTagName("section")
const pageLinks = document.querySelectorAll(".nav-link")

// hide navbar after navigation
function disappearNav() {
    bar.style.display = "none";
    xOut.style.display = "flex";
    landing.style.display = "none";
}

// reappear nav bar after exiting page
function reappearNav() {
    bar.style.display = "block";
    xOut.style.display = "none";
    landing.style.display = "flex";
    landing.style.backgroundImage = "var(--main-bg-grad)"
}

// iterate through each nav link to assign event listener
for (let i = 0; i < sitePages.length; i++) {
    pageLinks[i].addEventListener("click", () => {
        // onclick, disappear the nav bar
        disappearNav()
        // hide all site pages, display = "none"
        for (let j = 0; j < sitePages.length; j++){
            sitePages[j].style.display = "none"
        }
        // show site page with same index as clicked page link, overriding line 32 for loop
        if (sitePages[i] === aboutSection) {
            // about section needs flex rather than block display
            sitePages[i].style.display = "flex"
            // assign x event listener
            xOut.addEventListener("click", () => {
                // onclick, hide x, bring back navbar
                sitePages[i].style.display = "none"
                reappearNav()
            });
        } else {
        sitePages[i].style.display = "block"
        xOut.addEventListener("click", () => {
            sitePages[i].style.display = "none"
            reappearNav()
        });
        }
    })
};

// change background-img gradient on landing
landing.addEventListener("click", () => {
    // store color pallette
    let bgColors = ["#212E40", "#5D8AA6", "#6393A6", "#C2E5F2", "#3D6D73"]
    
    // random index
    let clr1 = Math.floor(Math.random() * bgColors.length);
    let clr2 = Math.floor(Math.random() * bgColors.length);
    let clr3 = Math.floor(Math.random() * bgColors.length);
    
    // gradient color picker
    landing.style.backgroundImage = `linear-gradient(to bottom right,  ${bgColors[clr1]}, ${bgColors[clr2]}, ${bgColors[clr3]}`;
});


// footer tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// drag logo, cursor centered, contained within viewport
$(document).ready(function() {
    $( function() {
        $( "#logo").draggable({ 
            cursor: "move", 
            cursorAt: { top: 150, left: 150 }, containment: ".home-wrap", 
            scroll: false  });
    });
});

/*--------------RESUME CAROUSEL LOGIC----------------*/
// keep track of which image is showing
let currentPgIndx = 0;

// keep track of which page last shown
let previousPgIdx = 0;

// hold all pages with a class name "resume-pages"
const pages = document.getElementsByClassName("resume-pages");

const next = document.querySelector(".next");
next.addEventListener('click', () => {
    cycle(1)
});

const prev = document.querySelector(".prev");
prev.addEventListener('click', () => {
    cycle(-1)
});

function cycle(nextToPrevious) {
    // set index of previous page to index of page that is currently visible
    previousPgIdx = currentPgIndx
    currentPgIndx = currentPgIndx + nextToPrevious
    // hide previous page
    pages[previousPgIdx].style.display = 'none'
    
    // check if next page index exists in our pages array
    if (currentPgIndx >= pages.length) {
        currentPgIndx = 0;
    } else if (currentPgIndx < 0) {
        // pages.length - 1, sets currentPgIdx to 1 (index of second page), since pages.length = 2.
        currentPgIndx = pages.length - 1;
    }


    pages[currentPgIndx].style.display = "block";
}


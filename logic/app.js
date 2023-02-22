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
    pages[previousPgIdx].style.display = 'none';

    // check if next page index exists in our pages array
    if (currentPgIndx >= pages.length) {
        currentPgIndx = 0;
    } else if (currentPgIndx < 0) {
        currentPgIndx = pages.length - nextToPrevious;
    }

    pages[currentPgIndx].style.display = "block";
}


/*--------------NAVIGATION LOGIC----------------*/
// page/section variables
const aboutSection = document.getElementById("about");
const resumeSection = document.getElementById("resume");
const projectsSection = document.getElementById("projects");
const landing = document.querySelector(".home-wrap")
const xOut = document.getElementById("x-out");
const bar = document.querySelector("nav");
const navBarNav = document.querySelector("#navbarNav")

// nav button variables
const aboutButton = document.getElementById("about-button");
const resumeButton = document.getElementById("resume-button");
const projectsButton = document.getElementById("projects-button");





// About page nav
navBarNav.addEventListener("click", (event) => {
    
    
    function disappearNav() {
        bar.style.display = "none";
        xOut.style.display = "block";
        landing.style.display = "none";
    }
    
    function reappearNav() {
        bar.style.display = "block";
        xOut.style.display = "none";
        landing.style.display = "flex";
        landing.style.backgroundImage = "var(--main-bg-grad)"
    }

    disappearNav();

    if (event.target === aboutButton) {
        aboutSection.style.display = "block";
        xOut.addEventListener("click", () => {
            reappearNav()
            aboutSection.style.display = "none"
        });
    }
    if (event.target === resumeButton) {
        resumeSection.style.display = "block";
        xOut.addEventListener("click", () => {
            reappearNav()
            resumeSection.style.display = "none"
        });
    }
    if (event.target === projectsButton) {
        projectsSection.style.display = "block";
        xOut.addEventListener("click", () => {
            reappearNav()
            projectsSection.style.display = "none"
        });
    }
})

// change background-img gradient on landing


landing.addEventListener("click", () => {
    // store color pallette
    let bgColors = ["#212E40", "#5D8AA6", "#6393A6", "#C2E5F2", "#3D6D73"]

    let c1 = Math.floor(Math.random() * bgColors.length);
    let c2 = Math.floor(Math.random() * bgColors.length);
    let c3 = Math.floor(Math.random() * bgColors.length);
    landing.style.backgroundImage = `linear-gradient(to bottom right,  ${bgColors[c1]}, ${bgColors[c2]}, ${bgColors[c3]}`;
})

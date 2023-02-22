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


function disappearNav() {
    bar.style.display = "none";
    xOut.style.display = "block";
    landing.style.display = "none";
}

function reappearNav() {
    bar.style.display = "block";
    xOut.style.display = "none";
    landing.style.display = "flex";
}



// About page nav
aboutButton.addEventListener("click", () => {
    disappearNav();
    aboutSection.style.display = "block";

    xOut.addEventListener("click", () => {
        reappearNav()
        aboutSection.style.display = "none";
    })
})

// resume nav
resumeButton.addEventListener("click", () => {
    disappearNav();
    resumeSection.style.display = "block";

    xOut.addEventListener("click", () => {
        reappearNav();
        resumeSection.style.display = "none";
    })
})

// projects nav
projectsButton.addEventListener("click", () => {
    disappearNav();
    projectsSection.style.display = "block";

    xOut.addEventListener("click", () => {
        reappearNav();
        projectsSection.style.display = "none";
    })
})
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
        console.log(`hi`)
    } else if (currentPgIndx < 0) {
        currentPgIndx = pages.length - 1;
    }
    console.log(currentPgIndx)
    console.log(pages.length)
    console.log(previousPgIdx)
    
    pages[currentPgIndx].style.display = "block";
    console.log(pages[currentPgIndx])

}


/*--------------NAVIGATION LOGIC----------------*/
// page/section variables
const aboutSection = document.getElementById("about");
// const resumeSection = document.getElementById("resume");
// const projectsSection = document.getElementById("projects");
const landing = document.querySelector(".home-wrap")
const xOut = document.getElementById("x-out");
const bar = document.querySelector("nav");
// const navBarNav = document.querySelector("#navbarNav")

// nav button variables
// const aboutButton = document.getElementById("about-button");
// const resumeButton = document.getElementById("resume-button");
// const projectsButton = document.getElementById("projects-button");

const sitePages = document.getElementById("section")
const pageLinks = document.querySelectorAll(".nav-links")

function disappearNav() {
    bar.style.display = "none";
    xOut.style.display = "flex";
    landing.style.display = "none";
}

function disappearNav() {
    bar.style.display = "none";
    xOut.style.display = "flex";
    landing.style.display = "none";
}

for (let i = 0; i < sitePages.length; i++) {
    pageLinks[i].addEventListener("click", () => {
        disappearNav()
        for (let j = 0; j < sitePages.length; j++){
            pages[j].style.display = "none"
        }
        if (sitePages[i] === aboutSection) {
            sitePages[i].style.display = "flex"
            xOut.addEventListener("click", () => {
                reappearNav()
            });
        } else {
        sitePages[i].style.display = "block"
        xOut.addEventListener("click", () => {
            reappearNav()
        });
        }
    })
}


// About page nav
// navBarNav.addEventListener("click", (event) => {
    
//     // hide navbar & landing page, pull up the x out button
//     function disappearNav() {
//         bar.style.display = "none";
//         xOut.style.display = "flex";
//         landing.style.display = "none";
//     }
    
//     // bring back nav elements and functionality & landing page
//     function disappearNav() {
//         bar.style.display = "none";
//         xOut.style.display = "flex";
//         landing.style.display = "none";
//     }
    
//     disappearNav();
    
    

//     // nav to about page
//     if (event.target === aboutButton) {
//         aboutSection.style.display = "flex";
//         xOut.addEventListener("click", () => {
//             reappearNav()
//             aboutSection.style.display = "none"
//         });
//     }
//     // nav to resume page
//     if (event.target === resumeButton) {
//         resumeSection.style.display = "block";
//         xOut.addEventListener("click", () => {
//             reappearNav()
//             resumeSection.style.display = "none"
//         });
//     }
//     // nav to projects page
//     if (event.target === projectsButton) {
//         projectsSection.style.display = "block";
//         xOut.addEventListener("click", () => {
//             reappearNav()
//             projectsSection.style.display = "none"
//         });
//     }
//     // clean up blank space clickability
//     if (event.target !== aboutButton && event.target !== resumeButton && event.target !== projectsButton) {
//         reappearNav();
//     }
// })


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
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
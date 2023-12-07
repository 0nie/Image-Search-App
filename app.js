//declaration of accessKey variable
const accessKey = "0JbkUPvLcAatF2O0sFdCAjNhFWtVtNPiRIKSvQPxZW4"

//declaration of HTML variables
const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;
//function for Image Search
async function searchImages() {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        searchResults.innerHTML = "";
    }
    //Mapping the results from Unsplash 
    results.map((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search-result");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    })
    //Show more pages
    page++;
    if(page > 1){
        showMore.style.display = "block";
    }
}
//function for Submit
formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});
//function for the Search button    
showMore.addEventListener("click", () => {
    searchImages();
});

const arrow = document.getElementById("arrow");

// Function to show/hide the arrow based on scroll position
function handleScroll() {
    const scrollY = window.scrollY;

    if (scrollY > 350) {
        arrow.style.display = "block";
    } else {
        arrow.style.display = "none";
    }
}

// Function to scroll to the top when arrow is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Add smooth scrolling effect
    });
}

// Listen for scroll events
window.addEventListener("scroll", handleScroll);

// Listen for click event on the arrow
arrow.addEventListener("click", scrollToTop);

const sr = ScrollReveal();

// Configure the reveal settings
sr.reveal('h1', {
    duration: 1000, // Animation duration in milliseconds
    origin: 'top', // Animation starts from the bottom
    distance: '100px', // Distance to start the animation (adjust as needed)
    delay: 500, // Delay between elements in milliseconds
   
});

sr.reveal('form', {
    duration: 1000, // Animation duration in milliseconds
    origin: 'left', // Animation starts from the bottom
    distance: '100px', // Distance to start the animation (adjust as needed)
    delay: 1000, // Delay between elements in milliseconds
   
});

sr.reveal('.search-result', {
    duration: 1000, // Animation duration in milliseconds
    origin: 'left', // Animation starts from the bottom
    distance: '100px', // Distance to start the animation (adjust as needed)
    delay: 1500, // Delay between elements in milliseconds
    interval: 500,
});





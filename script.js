const perPage = 5; // Number of pics per load
let currentPage = 1; // Current page
let isLoading = false; // Flag to prevent multiple simultaneous requests

// Function to display images
function showImages(page) {
    isLoading = true;
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const gallery = document.getElementById('gallery');

    for (let i = startIndex; i < endIndex && i < images.length; i++) {
        const photoDiv = document.createElement('div');
        photoDiv.className = 'photo';
        const img = document.createElement('img');
        img.src = images[i];
        img.alt = `Photo ${i + 1}`;
        img.loading = 'lazy';
        photoDiv.appendChild(img);
        gallery.appendChild(photoDiv);
    }

    isLoading = false;
}


// check if user has scrolled to the bottom of the page
function isBottomOfPage() {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
}


function handleScroll() {
    if (isBottomOfPage() && !isLoading && currentPage * perPage < images.length) {
        currentPage++;
        showImages(currentPage);
    }
}

// Initial load
showImages(currentPage);

// Event listener for scroll
window.addEventListener('scroll', handleScroll);

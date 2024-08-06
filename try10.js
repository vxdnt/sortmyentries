function toggleMenu() {
    // Add your JavaScript for the menu toggle functionality here
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('open');
    // Add your menu show/hide logic here
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

function closeOtherDetails(exceptId) {
    const detailsElements = document.querySelectorAll('details');
    detailsElements.forEach(details => {
        if (details.id !== exceptId) {
            details.removeAttribute('open');
        }
    });
}

document.querySelectorAll('details summary').forEach(summary => {
    summary.addEventListener('click', function(event) {
        const parentDetails = this.parentElement;
        const isOpen = parentDetails.hasAttribute('open');
        
        // Close other details elements
        closeOtherDetails(parentDetails.id);
        
        // If the clicked element was open, remove the open attribute to close it
        if (isOpen) {
            parentDetails.removeAttribute('open');
        } else {
            // Otherwise, allow it to be opened
            parentDetails.setAttribute('open', 'open');
        }

        // Prevent default details behavior
        event.preventDefault();
    });
});

//CAROUSEL

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    const dots = document.querySelectorAll('.dot');
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Optional: Automatically move to the next slide every 3 seconds
setInterval(nextSlide, 3000);

// Initialize the first dot as active
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.dot')[0].classList.add('active');
});

//movies display

document.addEventListener('DOMContentLoaded', () => {
    const toggleList = (buttonId, listClass, expandedClass) => {
        const seeMoreButton = document.getElementById(buttonId);
        const list = document.querySelector(listClass);

        seeMoreButton.addEventListener('click', () => {
            const isExpanded = list.classList.toggle(expandedClass);
            seeMoreButton.textContent = isExpanded ? 'See Less' : 'See More';
        });
    };

    // Initialize for movie list
    toggleList('see-more-button', '.movie-list', 'movie-list-expanded');

    // Initialize for concert list
    toggleList('see-more-concert-button', '.concert-list', 'concert-list-expanded');
});

let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll('.slide');
        let totalSlides = slides.length;

        // Hide all slides
        slides.forEach(slide => slide.style.display = 'none');
        
        // Move to the next slide
        slideIndex++;
        if (slideIndex > totalSlides) { slideIndex = 1; }
        
        // Show the current slide
        slides[slideIndex - 1].style.display = 'block';
        
        // Change slide every 3 seconds
        setTimeout(showSlides, 3000);
    }

    document.querySelector('.prev').addEventListener('click', () => {
        slideIndex -= 2; // Go back one slide
        showSlides();
    });

    document.querySelector('.next').addEventListener('click', () => {
        showSlides();
    });

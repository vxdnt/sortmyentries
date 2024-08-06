const submitQueryButton = document.getElementById('submitQuery');
const contactUsButton = document.getElementById('contactUs');
const container = document.getElementById('container');

submitQueryButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

contactUsButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

//HEADER AND FOOTER
// Function to load the header
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}

// Function to load the footer
function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Call the functions to load the header and footer when the page loads
window.onload = function() {
    loadHeader();
    loadFooter();
};
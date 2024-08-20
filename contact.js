const submitQueryButton = document.getElementById('submitQuery');
const contactUsButton = document.getElementById('contactUs');
const container = document.getElementById('container');

submitQueryButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

contactUsButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

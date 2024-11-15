// Sample data for events
const eventsData = {
    concert: [
        { title: 'Rock Concert', date: '2024-12-01', image: 'https://via.placeholder.com/200x150/ff7f7f/333333?text=Rock+Concert' },
        { title: 'Jazz Night', date: '2024-12-05', image: 'https://via.placeholder.com/200x150/7f7fff/333333?text=Jazz+Night' },
        { title: 'Rock Concert', date: '2024-12-01', image: 'https://via.placeholder.com/200x150/ff7f7f/333333?text=Rock+Concert' },
        { title: 'Rock Concert', date: '2024-12-01', image: 'https://via.placeholder.com/200x150/ff7f7f/333333?text=Rock+Concert' },
        { title: 'Rock Concert', date: '2024-12-01', image: 'https://via.placeholder.com/200x150/ff7f7f/333333?text=Rock+Concert' },
        { title: 'Rock Concert', date: '2024-12-01', image: 'https://via.placeholder.com/200x150/ff7f7f/333333?text=Rock+Concert' }
    ],
    sports: [
        { title: 'Football Match', date: '2024-12-10', image: 'https://via.placeholder.com/200x150/7fff7f/333333?text=Football+Match' },
        { title: 'Basketball Game', date: '2024-12-12', image: 'https://via.placeholder.com/200x150/7fff7f/333333?text=Basketball+Game' }
    ],
    theater: [
        { title: 'Shakespeare Play', date: '2024-12-15', image: 'https://via.placeholder.com/200x150/ff7f7f/333333?text=Shakespeare+Play' },
        { title: 'Broadway Show', date: '2024-12-18', image: 'https://via.placeholder.com/200x150/7f7fff/333333?text=Broadway+Show' }
    ],
    festivals: [
        { title: 'Diwali Festival', date: '2024-12-20', image: 'https://via.placeholder.com/200x150/ffcc00/333333?text=Diwali+Festival' },
        { title: 'Holi Celebration', date: '2024-12-22', image: 'https://via.placeholder.com/200x150/ffcc00/333333?text=Holi+Celebration' }
    ],
    clubs: [
        { title: 'Night Club Event', date: '2024-12-25', image: 'https://via.placeholder.com/200x150/cccccc/333333?text=Night+Club+Event' },
        { title: 'Dance Party', date: '2024-12-28', image: 'https://via.placeholder.com/200x150/cccccc/333333?text=Dance+Party' }
    ]
};

// Function to load events based on category
function loadEvents(category) {
    const eventsList = document.getElementById('events-list');
    const events = eventsData[category] || []; 

    eventsList.innerHTML = ''; // Clear existing events

    if (events.length > 0) {
        events.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';
            eventCard.innerHTML = `
                <img src="${event.image}" alt="${event.title}" class="event-image">
                <h3>${event.title}</h3>
                <p>${event.date}</p>
            `;
            eventsList.appendChild(eventCard);
        });
    } else {
        eventsList.innerHTML = '<p>No events available in this category.</p>';
    }
}

// Function to show event details
function showEventDetails(title, date) {
    const eventDetails = document.getElementById('event-details');
    eventDetails.style.display = 'block';
    eventDetails.innerHTML = `
        <h3>${title}</h3>
        <p>Date: ${date}</p>
        <p>Description: Enjoy a fantastic event!</p>
        <button class="book-now" onclick="bookTickets()">Book Tickets</button>
    `;
}

// Placeholder function for booking tickets
function bookTickets() {
    alert('Redirecting to ticket booking page...');
}
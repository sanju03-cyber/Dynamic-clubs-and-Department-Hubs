const clubForm = document.getElementById("clubForm");
const clubCards = document.getElementById("clubCards");

function renderClubs() {
    const clubs = JSON.parse(localStorage.getItem("clubs")) || [];
    clubCards.innerHTML = "";
    clubs.forEach((club, index) => {
        clubCards.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card p-3 shadow-sm">
                ${club.image ? `<img src="${club.image}" class="card-img-top">` : ''}
                <h4 class="card-title mt-2">${club.clubName}</h4>
                <p>${club.description}</p>
                <p><strong>Activities:</strong> ${club.activities}</p>
                <p><strong>Leader:</strong> ${club.leader}</p>
                <p><strong>Coordinator:</strong> ${club.Coordinator}</p>
                <p><strong>Email:</strong> ${club.email}</p>
                <button class="btn btn-danger w-100 mt-2" onclick="deleteClub(${index})">Delete</button>
            </div>
        </div>`;
    });
}

function deleteClub(index) {
    let clubs = JSON.parse(localStorage.getItem("clubs")) || [];
    clubs.splice(index, 1);
    localStorage.setItem("clubs", JSON.stringify(clubs));
    renderClubs();
}

clubForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const file = document.getElementById("clubImage").files[0];
    const reader = new FileReader();

    reader.onload = function() {
        let clubs = JSON.parse(localStorage.getItem("clubs")) || [];
        const newClub = {
            clubName: clubName.value,
            description: clubDesc.value,
            activities: clubActivities.value,
            coordinator: clubCoordinator.value,
            leader: clubLeader.value,
            email: clubEmail.value,
            image: reader.result
        };
        clubs.unshift(newClub);
        localStorage.setItem("clubs", JSON.stringify(clubs));
        clubForm.reset();
        renderClubs();
    };

    if(file) reader.readAsDataURL(file);
    else reader.onload(); // If no image, still save
});

/* ===== EVENT FORM ===== */
const eventForm = document.getElementById("eventForm");
const eventCards = document.getElementById("eventCards");

function renderEvents() {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    eventCards.innerHTML = "";
    events.forEach((event, index) => {
        eventCards.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card p-3 shadow-sm">
                ${event.image ? `<img src="${event.image}" class="card-img-top">` : ''}
                <h4 class="card-title mt-2">${event.eventName}</h4>
                <p>${event.details}</p>
                <p><strong>Date:</strong> ${event.date} | ${event.time}</p>
                <p><strong>Venue:</strong> ${event.venue}</p>
                <p><strong>Leader:</strong> ${event.leader}</p>
                <p><strong>Email:</strong> ${event.email}</p>
                <button class="btn btn-danger w-100 mt-2" onclick="deleteEvent(${index})">Delete</button>
            </div>
        </div>`;
    });
}

function deleteEvent(index) {
    let events = JSON.parse(localStorage.getItem("events")) || [];
    events.splice(index, 1);
    localStorage.setItem("events", JSON.stringify(events));
    renderEvents();
}

eventForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const file = document.getElementById("eventImage").files[0];
    const reader = new FileReader();

    reader.onload = function() {
        let events = JSON.parse(localStorage.getItem("events")) || [];
        const newEvent = {
            eventName: eventName.value,
            date: eventDate.value,
            time: eventTime.value,
            venue: eventVenue.value,
            prize: eventPrize.value,
            details: eventDetails.value,
            coordinator: eventCoordinator.value,
            leader: eventLeader.value,
            email: eventEmail.value,
            image: reader.result
        };
        events.unshift(newEvent);
        localStorage.setItem("events", JSON.stringify(events));
        eventForm.reset();
        renderEvents();
    };

    if(file) reader.readAsDataURL(file);
    else reader.onload();
});

// Initial render
renderClubs();
renderEvents();

        // Events
        const events = JSON.parse(localStorage.getItem("events")) || [];
        const eventContainer = document.getElementById("eventCards");
        eventContainer.innerHTML = "";

        events.forEach(event => {
            eventContainer.innerHTML += `
            <div class="col-md-4 col-sm-6 mb-4">
                <div class="card p-3 shadow-sm">
                    <img src="${event.image}" class="card-img-top" style="height: 210px;">
                    <h4 class="card-title mt-3 text-center">${event.eventName}</h4>
                    <p class="text-center">${event.details}</p>
                    <p><strong>Date:</strong> ${event.date} | ${event.time}</p>
                    <p><strong>Venue:</strong> ${event.venue}</p>
                    <p class="text-center"><strong>Leader:</strong> ${event.leader}</p>
                    <a href="#" class="btn btn-primary w-100">Join Now</a>
                </div>
            </div>
            `;
        });

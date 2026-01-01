     // Clubs
        const clubs = JSON.parse(localStorage.getItem("clubs")) || [];
        const clubContainer = document.getElementById("clubCards");
        clubContainer.innerHTML = ""; // clear before rendering

        clubs.forEach(club => {
            clubContainer.innerHTML += `
            <div class="col-md-4 col-sm-6 mb-4">
                <div class="card p-3 shadow-sm">
                    <img src="${club.image}" class="card-img-top" style="height: 210px;">
                    <h3 class="card-title mt-3 text-center">${club.clubName}</h3>
                    <p class="text-justify">${club.description}</p>
                    <h3 class="card-title mt-3 text-center">Activities Offered:</h3>
                    <p class="text-justify">${club.activities}</p>
                    <h3 class="card-title mt-3 text-center">Co-ordinators:</h3>
                    <p class="text-justify">Co-ordinator: ${club.coordinator}</p>
                    <p class="text-justify">Student Leader: ${club.leader}</p>
                    <p class="text-justify">Contact Email: ${club.email}</p>
                    <a href="#" class="btn btn-primary w-100">Join Now</a>
                </div>
            </div>
            `;
        });
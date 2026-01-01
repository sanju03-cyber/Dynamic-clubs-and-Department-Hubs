const scholarshipTableBody = document.querySelector("#scholarshipTable tbody");

function renderScholarships() {
    const scholarships = JSON.parse(localStorage.getItem("scholarships")) || [];
    scholarshipTableBody.innerHTML = "";

    scholarships.forEach((s, index) => {
        scholarshipTableBody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${s.name}</td>
            <td>${s.details}</td>
            <td>${s.eligibility}</td>
        </tr>`;
    });
}

renderScholarships();

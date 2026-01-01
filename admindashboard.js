const scholarshipForm = document.getElementById("scholarshipForm");
const adminScholarshipTable = document.getElementById("adminScholarshipTable");

/* ADD SCHOLARSHIP */
scholarshipForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("scholarshipName").value;
    const eligibility = document.getElementById("scholarshipEligibility").value;
    const details = document.getElementById("scholarshipDetails").value;

    let scholarships = JSON.parse(localStorage.getItem("scholarships")) || [];

    scholarships.unshift({
        name,
        eligibility,
        details
    });

    localStorage.setItem("scholarships", JSON.stringify(scholarships));

    scholarshipForm.reset();
    renderAdminScholarships();
    alert("Scholarship added successfully!");
});

/* RENDER ADMIN TABLE */
function renderAdminScholarships() {
    const scholarships = JSON.parse(localStorage.getItem("scholarships")) || [];
    adminScholarshipTable.innerHTML = "";

    scholarships.forEach((s, index) => {
        adminScholarshipTable.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${s.name}</td>
            <td>${s.eligibility}</td>
            <td class="text-center">
                <button class="btn btn-danger btn-sm" onclick="deleteScholarship(${index})">
                    Delete
                </button>
            </td>
        </tr>`;
    });
}

/* DELETE SCHOLARSHIP */
function deleteScholarship(index) {
    if (!confirm("Delete this scholarship?")) return;

    let scholarships = JSON.parse(localStorage.getItem("scholarships")) || [];
    scholarships.splice(index, 1);

    localStorage.setItem("scholarships", JSON.stringify(scholarships));
    renderAdminScholarships();
}

renderAdminScholarships();

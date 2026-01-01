document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const department = document.getElementById("department").value.trim();
    const message = document.getElementById("message").value.trim();

    // VALIDATION
    if (!name || !email || !mobile || !department || !message) {
        alert("Please fill all the details before submitting.");
        return; // STOP submission
    }

    const data = {
        name,
        email,
        mobile,
        department,
        message
    };

    fetch("https://script.google.com/macros/s/AKfycbwhvDxcKBGySY53-SJpYL9cdvTVuEgLKvwidopXf7CK8x7F67kd2H2xSETTSWzSUsXS/exec", {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(result => {
        if (result === "success") {
            alert("Feedback submitted successfully!");
            document.getElementById("feedbackForm").reset();
        } else {
            alert("Server error: " + result);
        }
    })
    .catch(err => {
        console.error("Fetch error:", err);
        alert("Submission failed. Please try again.");
    });
});

 const isLoggedIn = localStorage.getItem("isLoggedIn");
    const role = localStorage.getItem("role");

    if (isLoggedIn !== "true" || role !== "leader") {
        alert("Access denied!");
        window.location.href = "home.html";
    }
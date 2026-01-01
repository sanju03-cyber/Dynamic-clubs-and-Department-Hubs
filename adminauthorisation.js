const isLoggedIn = localStorage.getItem("isLoggedIn");
const role = localStorage.getItem("role");
if (isLoggedIn !== "true" || role !== "admin") {
    alert("Access denied! Admins only.");
    window.location.href = "home.html";
}

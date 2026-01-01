//LoginButton
            function login() {
                console.log("Login function triggered");
                const loginType = document.getElementById("loginType").value;
                const username = document.getElementById("username").value;
                const password = document.getElementById("password").value;
                const errorMsg = document.getElementById("errorMsg");

                const credentials = {
                    student: {
                        username: "xyzstudent1234",
                        password: "xyzstudent@123"
                    },
                    leader: {
                        username: "xyzleader1234",
                        password: "xyzleader@123"
                    },
                    admin: {
                        username: "xyzadmin1234",
                        password: "xyzadmin@123"
                    }
                };

                // VALIDATION
                if (
                    !credentials[loginType] ||
                    credentials[loginType].username !== username ||
                    credentials[loginType].password !== password
                ) {
                    errorMsg.innerText = "Invalid login details!";
                    return;
                }

                // SAVE LOGIN STATE
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("role", loginType);

                // REDIRECTION
                if (loginType === "admin") {
                    window.location.href = "adminlogin.html";
                } 
              else if (loginType === "leader") {
                    console.log("Leader login success");
                    window.location.href = "leaderlogin.html";
                }

                else {
                    const modal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
                    modal.hide();
                    updateNavbar();
                }
            }

            // CHANGE LOGIN TO LOGOUT
            function updateNavbar() {
                const loginBtn = document.getElementById("loginBtn");

                if (localStorage.getItem("isLoggedIn") === "true") {
                    loginBtn.innerText = "Logout";
                    loginBtn.removeAttribute("data-bs-toggle");
                    loginBtn.removeAttribute("data-bs-target");
                    loginBtn.onclick = logout;
                }
            }

            // LOGOUT FUNCTION
            function logout() {
                localStorage.clear();
                location.reload();
            }

            // AUTO CHECK ON PAGE LOAD
            window.onload = updateNavbar;
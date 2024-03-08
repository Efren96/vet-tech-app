const loginForm = async (event) => {
    event.preventDefault();

    const email = document.querySelector("#email-for-login").value.trim();
    const password = document.querySelector("#password-for-login").value.trim();

    if (email && password) {
        const response = await fetch("/api/user/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Log in failed.")
        }
    }
};

document.querySelector(".login-form").addEventListener("submit", loginForm);
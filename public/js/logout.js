// logic for logout button
const logout = async () => {
    const response = await fetch('/api/user/logout', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        document.location.replace('/login');
    } else {
        alert('Logout failed.')
    }
};

document.querySelector("#logout").addEventListener('click', logout)
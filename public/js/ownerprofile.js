const deleteOwnerButtonEl = document.getElementById("delete-owner-button");
const updateOwnerButton = document.getElementById("update-owner-button");
const updateOwnerForm = document.getElementById("update-user-form");

// logic to delete owner on profile page
const deleteOwner = async (event) => {
    event.stopPropagation();
    event.preventDefault();

    const owner_id = document.querySelector('#owner-id').textContent;
    console.log(owner_id);

    try {
        const response = await fetch(`/api/ownerdashboard/${owner_id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace('/api/ownerdashboard');
            alert('Owner deleted!')
        } else {
            alert('Deletion failed.')
        }
    } catch (err) {
        console.error(err)
    }
};

// logic to update owner on profile page
const updateOwner = async (event) => {
    event.stopPropagation();
    event.preventDefault();

    const owner_firstName = document.querySelector('#firstName').value;
    const owner_lastName = document.querySelector('#lastName').value;
    const age = document.querySelector('#age').value;
    const phone_number = document.querySelector('#phoneNumber').value;
    const home_address = document.querySelector('#homeAddress').value;

    const owner_id = document.querySelector('#owner-id').textContent;
    console.log(owner_id);

    const response = await fetch(`/api/ownerdashboard/${owner_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            owner_firstName,
            owner_lastName,
            age,
            phone_number,
            home_address
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        document.location.reload();
        alert('Owner updated!')
    } else {
        alert('Failed to update owner');
    }
};

updateOwnerButton.addEventListener("click", function () {
    document.querySelector(".add-newowner-card").classList.remove("d-none");
});

updateOwnerForm.addEventListener('submit', updateOwner);
deleteOwnerButtonEl.addEventListener('click', deleteOwner);
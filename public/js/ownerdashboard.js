const createOwnerButton = document.getElementById("create-owner-button");
const newOwnerForm = document.getElementById("add-user-form");

const newOwner = async (event) => {
    event.stopPropagation();
    event.preventDefault(); 

    const owner_firstName = document.querySelector('#firstName').value;
    const owner_lastName = document.querySelector('#lastName').value;
    const age = document.querySelector('#age').value;
    const phone_number = document.querySelector('#phoneNumber').value;
    const home_address = document.querySelector('#homeAddress').value;

    const response = await fetch(`/api/ownerdashboard`, {
        method: 'POST',
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
        document.location.replace("/api/ownerdashboard");
        alert("Owner added!")
    } else {
        alert('Failed to add owner');
    }
};

createOwnerButton.addEventListener("click", function() {
    document.querySelector(".add-newowner-card").classList.remove("d-none");
});

newOwnerForm.addEventListener('submit', newOwner);
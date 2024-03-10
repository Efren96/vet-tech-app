const deletePetButtonEl = document.getElementById("delete-pet-button");

const deletePet = async (event) => {
    event.preventDefault();
   
    const pet_id = document.querySelector("#pet-id").textContent;
    console.log(pet_id);

    try {
        const response = await fetch(`/api/petdashboard/${pet_id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/api/petdashboard");
            alert("Pet deleted!")
        } else {
            alert("Deletion failed.")
        }
    } catch (err) {
        console.error(err)
    }
};

const updatePetButton = document.getElementById("update-pet-button");
const updatePetForm = document.getElementById("update-pet-form");

const updatePet = async (event) => {
    event.stopPropagation();
    event.preventDefault();

    const pet_firstName = document.querySelector('#firstName').value;
    const pet_lastName = document.querySelector('#lastName').value;
    const age = document.querySelector('#age').value;
    const species = document.querySelector('#species').value;
    const weight = document.querySelector('#weight').value;
    const neutered = document.querySelector("#neutered");
    const isNeutered = neutered.checked;
    const vaccines = document.querySelector("#vaccination");
    const needsVaccines = vaccines.checked;
    const owner_id = document.querySelector("#pet_ownerid").value;

    const pet_id = document.querySelector("#pet-id").textContent;
    console.log(pet_id);

    const response = await fetch(`/api/petdashboard/${pet_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            pet_firstName,
            pet_lastName,
            age,
            species,
            weight,
            isNeutered,
            needsVaccines,
            owner_id
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        document.location.reload();
        alert("Pet updated!")
    } else {
        alert('Failed to update pet');
    }
};

updatePetButton.addEventListener("click", function () {
    document.querySelector(".add-newpet-card").classList.remove("d-none");
});

updatePetForm.addEventListener('submit', updatePet);

deletePetButtonEl.addEventListener("click", deletePet);
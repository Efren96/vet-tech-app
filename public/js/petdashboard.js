const createPetButton = document.getElementById("create-pet-button");
const newPetForm = document.getElementById("add-pet-form");

const newPet = async (event) => {
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

    const response = await fetch(`/api/petdashboard`, {
        method: 'POST',
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
        document.location.replace("/api/petdashboard");
        alert("Pet added!")
    } else {
        alert('Failed to add pet');
    }
};

createPetButton.addEventListener("click", function () {
    document.querySelector(".add-newpet-card").classList.remove("d-none");
});

newPetForm.addEventListener('submit', newPet);
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

deletePetButtonEl.addEventListener("click", deletePet);
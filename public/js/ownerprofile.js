const deleteOwnerButtonEl = document.getElementById("delete-owner-button");

const deleteOwner = async (event) => {
   event.stopPropagation();
    event.preventDefault(); 

    const owner_id = document.querySelector("#owner-id").textContent;
    console.log(owner_id);

    try {
        const response = await fetch(`/api/ownerdashboard/${owner_id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/api/ownerdashboard");
            alert("Owner deleted!")
        } else {
            alert("Deletion failed.")
        }
    } catch (err) {
        console.error(err)
    }
};

deleteOwnerButtonEl.addEventListener("click", deleteOwner);
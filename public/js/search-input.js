const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-button")
console.log(searchInput)


const searchName = async (event) => {
    event.stopPropagation();
    event.preventDefault(); 

    const response = await fetch(`/api/petdashboard/${searchInput}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        document.location.reload();
    } else {
        alert('Failed to find pet');
    }
};

searchBtn.addEventListener('click', searchName)
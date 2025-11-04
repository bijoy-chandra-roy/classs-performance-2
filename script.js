const handleSearch = () => {
    toggleLoadingSpinner(true);
    const cardContainer = document.getElementById("cards");
    cardContainer.textContent = "";
    const searchField = document.getElementById("search-input-field");
    const searchText = searchField.value;
    loadPhone(searchText);
}

const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones = (phones) => {
    const cardContainer = document.getElementById("cards");
    cardContainer.textContent = "";

    phones.forEach(phone => {
        const phoneCard = document.createElement("div");
        phoneCard.classList.add("card");
        phoneCard.innerHTML = `
            <div class="card-image">
                <img src="${phone.image}" alt="${phone.phone_name}" />
            </div>
            <h3 class="card-title">${phone.phone_name}</h3>
            <p class="card-description"> ${phone.phone_name} is a great phone with amazing features.</p>
            <div class="card-button">
                <button class="btn">Show Details</button>
            </div>
        `;
        cardContainer.appendChild(phoneCard);

    }); toggleLoadingSpinner(false);
}

const toggleLoadingSpinner = (isLoading) => {
    const loaderContainer = document.getElementById("loader-container");
    if (isLoading) {
        loaderContainer.classList.remove("hidden");
    } else {
        loaderContainer.classList.add("hidden");
    }
}
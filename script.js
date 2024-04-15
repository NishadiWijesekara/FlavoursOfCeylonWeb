// script.js

// Get the search input and search button elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Add event listener to the search button
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const recipeCards = document.querySelectorAll('.recipe-card');

    recipeCards.forEach(card => {
        const recipeTitle = card.querySelector('h2').textContent.toLowerCase();

        if (recipeTitle.includes(searchTerm)) {
            card.style.display = 'block'; // Show matching recipe card
        } else {
            card.style.display = 'none'; // Hide non-matching recipe card
        }
    });
});
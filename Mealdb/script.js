document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from the API
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Extract meal categories
            const categories = data.categories;

            // Display meal categories on the UI
            displayCategories(categories);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally show an error message on the UI
        });

    function displayCategories(categories) {
        const categoryListElement = document.getElementById('categoryList');
        if (categoryListElement) {
            // Clear any existing content
            categoryListElement.innerHTML = '';

            // Loop through categories and create cards
            categories.forEach(category => {
                const categoryCard = createCategoryCard(category);
                categoryListElement.appendChild(categoryCard);
            });
        }
    }

    function createCategoryCard(category) {
        // Create card element
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');

        // Card content
        card.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${category.strCategory}</h5>
                    <p class="card-text">${category.strCategoryDescription}</p>
                </div>
            </div>
        `;

        return card;
    }
});

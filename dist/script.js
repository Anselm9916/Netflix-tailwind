// Data for each category
const categories = {
    Thriller: [
        './fotos/thriller1.jpg',
        './fotos/thriller2.jpg',
        './fotos/thriller3.jpg',
    ],
    Comedy: [
        './fotos/comedy1.jpg',
        './fotos/comedy2.jpg',
        './fotos/comedy3.jpg',
        './fotos/comedy4.jpg',
    ],
};

// Get the container element
const mainContainer = document.getElementById('cards-container');

// Check if the main container exists
if (mainContainer) {
    // Loop through each category
    Object.entries(categories).forEach(([categoryName, imageUrls]) => {
        // Create a section for the category
        const categorySection = document.createElement('div');
        categorySection.className = 'mb-10';

        // Add a title for the category
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = categoryName;
        categoryTitle.className = 'text-white text-lg font-bold mb-4 text-2xl';
        categorySection.appendChild(categoryTitle);

        // Create a container for the cards
        const rowContainer = document.createElement('div');
        rowContainer.className = 'flex gap-4 overflow-x-auto pb-4'; // Horizontal scrolling if needed

        // Add cards for each image
        imageUrls.forEach((url) => {
            const card = document.createElement('div');
            card.className = 'bg-gray-800 rounded-lg overflow-hidden shadow-md w-[230px] h-[130px]';

            const img = document.createElement('img');
            img.src = url;
            img.alt = `${categoryName} Image`;
            img.className = 'w-full h-full object-cover';

            card.appendChild(img);
            rowContainer.appendChild(card);
        });

        // Append the row to the section and the section to the main container
        categorySection.appendChild(rowContainer);
        mainContainer.appendChild(categorySection);
    });
} else {
    console.error('Main container not found. Make sure the element with id="cards-container" exists.');
}

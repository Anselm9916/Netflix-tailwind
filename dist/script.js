const imageUrls = [
    './fotos/po.jpg',
    './fotos/card2.jpg',
    './fotos/card3.jpg',
    './fotos/card4.jpg',
    './fotos/card5.jpg',
    './fotos/card6.jpg',
];

// Get the container element
const cardsContainer = document.getElementById('cards-container');

// Check if the container exists
if (cardsContainer) {
    // Loop through the image URLs and create cards
    imageUrls.forEach((url) => {
        // Create card container with specified size
        const card = document.createElement('div');
        card.className = 'bg-gray-800 rounded-lg overflow-hidden shadow-md w-[250px] h-[150px]'; // Set fixed width and height

        // Add the image
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Card Image';
        img.className = 'w-full h-full object-cover rounded-lg'; // Ensure the image fills the entire card

        // Append the image to the card and the card to the container
        card.appendChild(img);
        cardsContainer.appendChild(card);
    });
} else {
    console.error('Cards container not found. Make sure the element with id="cards-container" exists.');
}

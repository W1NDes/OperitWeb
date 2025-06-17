// Card Gallery and Card Draw functionality
function initGallery() {
    const galleryContainer = document.querySelector('.card-gallery');
    if (!galleryContainer) return;

    const cards = [
        {
            image: 'images/examples/game_maker_show.jpg',
            title: 'Game Creation',
            description: 'Create and play games directly on your mobile device'
        },
        {
            image: 'images/examples/web_dev.jpg',
            title: 'Web Development',
            description: 'Design websites and export as standalone applications'
        },
        {
            image: 'images/examples/app_packaging.jpg',
            title: 'App Packaging',
            description: 'Package your creations as shareable applications'
        },
        {
            image: 'images/examples/video_processing.jpg',
            title: 'Video Processing',
            description: 'Create and edit videos with AI assistance'
        },
        {
            image: 'images/examples/3d_game.jpg',
            title: '3D Game Development',
            description: 'Create 3D games with simple descriptions'
        }
    ];

    // Create gallery cards
    cards.forEach((card, index) => {
        const cardElement = createGalleryCard(card);
        galleryContainer.appendChild(cardElement);
    });

    // Initial setup: Assign active, next, prev classes
    const galleryCards = document.querySelectorAll('.gallery-card');
    const totalCards = galleryCards.length;
    
    if (totalCards >= 3) {
        galleryCards[0].classList.add('active');
        galleryCards[1].classList.add('next');
        galleryCards[totalCards - 1].classList.add('prev');
    }

    // Navigation buttons
    const prevButton = document.querySelector('.gallery-nav button:first-child');
    const nextButton = document.querySelector('.gallery-nav button:last-child');

    if (prevButton) {
        prevButton.addEventListener('click', () => rotateGallery('prev'));
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', () => rotateGallery('next'));
    }

    // Touch and drag support
    let isDragging = false;
    let startX = 0;
    
    galleryContainer.addEventListener('mousedown', startDrag);
    
    function startDrag(e) {
        // Prevent starting drag on non-touch devices if it's not a mouse click
        if (e.type.startsWith('touch')) {
            return;
        }
        isDragging = true;
        startX = e.clientX;
        galleryContainer.classList.add('dragging');
    }
    
    document.addEventListener('mousemove', drag);
    
    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.clientX;
        const deltaX = x - startX;
        
        // If horizontal drag is significant
        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                rotateGallery('prev');
            } else {
                rotateGallery('next');
            }
            isDragging = false;
            galleryContainer.classList.remove('dragging');
        }
    }
    
    document.addEventListener('mouseup', endDrag);
    
    function endDrag() {
        isDragging = false;
        galleryContainer.classList.remove('dragging');
    }

    // Setup draw card button
    const drawButton = document.querySelector('.draw-button');
    if (drawButton) {
        drawButton.addEventListener('click', drawRandomCards);
    }

    // Auto-rotation
    let rotationInterval;
    
    function startAutoRotation() {
        rotationInterval = setInterval(() => {
            rotateGallery('next');
        }, 5000);
    }
    
    function stopAutoRotation() {
        clearInterval(rotationInterval);
    }
    
    function restartAutoRotation() {
        stopAutoRotation();
        startAutoRotation();
    }
    
    // Start auto rotation
    startAutoRotation();
    
    // Pause rotation on hover
    galleryContainer.addEventListener('mouseenter', stopAutoRotation);
    galleryContainer.addEventListener('mouseleave', startAutoRotation);
}

let lastDrawnCards = []; // Variable to store the last set of drawn cards

function drawRandomCards() {
    const drawResultContainer = document.querySelector('.draw-result-container');
    const cardsContainer = document.querySelector('.draw-cards-container');
    const closeButton = document.querySelector('.close-draw-button');
    
    if (!drawResultContainer || !cardsContainer) return;
    
    // Clear previous cards
    cardsContainer.innerHTML = '';
    
    // Show the container
    drawResultContainer.classList.add('show');
    
    // Card data - customize based on your needs
    const allCards = [
        { id: 1, image: 'images/examples/game_maker_show.jpg', title: 'Game Creation', description: 'Create engaging games with AI', rarity: 'ssr' },
        { id: 2, image: 'images/examples/web_dev.jpg', title: 'Web Development', description: 'Build websites on your phone', rarity: 'sr' },
        { id: 3, image: 'images/examples/app_packaging.jpg', title: 'App Packaging', description: 'Package your creations', rarity: 'r' },
        { id: 4, image: 'images/examples/video_processing.jpg', title: 'Video Processing', description: 'Edit videos with AI assistance', rarity: 'sr' },
        { id: 5, image: 'images/examples/3d_game.jpg', title: '3D Game Creation', description: 'Create 3D worlds and games', rarity: 'ssr' }
    ];
    
    const ssrCards = allCards.filter(card => card.rarity === 'ssr');
    const otherCards = allCards.filter(card => card.rarity !== 'ssr');

    let drawnCards;
    let isSameAsLast;

    do {
        drawnCards = [];
        const availableCards = [...allCards];

        // First, determine if an SSR card should be drawn
        // 40% chance for at least one SSR (since 2 SSRs out of 5 cards)
        const hasSSR = Math.random() < 0.4;

        if (hasSSR && ssrCards.length > 0) {
            // Pick one SSR card
            const ssrIndex = Math.floor(Math.random() * ssrCards.length);
            const ssrCard = ssrCards[ssrIndex];
            drawnCards.push(ssrCard);

            // Remove the drawn SSR card from the available pool
            const availableIndex = availableCards.findIndex(c => c.id === ssrCard.id);
            if (availableIndex > -1) {
                availableCards.splice(availableIndex, 1);
            }
        }

        // Fill the rest of the hand with unique cards from the remaining pool
        while (drawnCards.length < 3 && availableCards.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableCards.length);
            const selectedCard = availableCards.splice(randomIndex, 1)[0];
            drawnCards.push(selectedCard);
        }

        // Shuffle the final hand to randomize card positions
        drawnCards.sort(() => Math.random() - 0.5);

        // Check if the new set is identical to the last one
        const drawnIds = drawnCards.map(c => c.id).sort().join(',');
        const lastIds = lastDrawnCards.map(c => c.id).sort().join(',');
        isSameAsLast = drawnIds === lastIds;

    } while (isSameAsLast);

    lastDrawnCards = drawnCards; // Update the last drawn set
    
    // Create and append cards with delay
    drawnCards.forEach((card, index) => {
        setTimeout(() => {
            const cardElement = document.createElement('div');
            cardElement.className = 'draw-card';
            cardElement.style.animationDelay = `${index * 0.2}s`;
            
            cardElement.innerHTML = `
                <div class="gallery-card-inner">
                    <div class="rarity-badge rarity-${card.rarity}">${card.rarity.toUpperCase()}</div>
                    <img src="${card.image}" alt="${card.title}">
                    <div class="gallery-card-text">
                        <h4>${card.title}</h4>
                        <p>${card.description}</p>
                    </div>
                </div>
            `;
            
            cardsContainer.appendChild(cardElement);
        }, index * 300);
    });
    
    // Handle close button
    const handleClose = () => {
        drawResultContainer.classList.remove('show');
    };
    
    if (closeButton) {
        closeButton.addEventListener('click', handleClose);
    }
    
    // Close when clicking on the backdrop
    const closeOnBackdrop = (e) => {
        if (e.target === drawResultContainer) {
            handleClose();
        }
    };
    
    drawResultContainer.addEventListener('click', closeOnBackdrop);
}

function createGalleryCard(item) {
    const card = document.createElement('div');
    card.className = 'gallery-card';

    if (item.link) {
        card.dataset.link = item.link;
        card.classList.add('has-link');
        card.addEventListener('click', (e) => {
            // If the card is in the draw result modal, open link in a new tab.
            if (e.currentTarget.closest('.draw-result-container')) {
                e.stopPropagation();
                window.open(item.link, '_blank');
                return;
            }

            // For the main gallery, navigate if the card is visible.
            if (card.classList.contains('active') || card.classList.contains('prev') || card.classList.contains('next')) {
                window.location.href = item.link;
            }
        });
    }
    
    const innerHtml = `
        <div class="gallery-card-inner">
            <img src="${item.image}" alt="${item.title}">
            <div class="gallery-card-text">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </div>
        </div>
    `;
    
    card.innerHTML = innerHtml;
    return card;
}

function rotateGallery(direction) {
    const cards = document.querySelectorAll('.gallery-card');
    if (cards.length < 3) return;

    // Find current active, next, and prev cards
    let activeIndex, nextIndex, prevIndex;
    
    cards.forEach((card, index) => {
        if (card.classList.contains('active')) activeIndex = index;
        if (card.classList.contains('next')) nextIndex = index;
        if (card.classList.contains('prev')) prevIndex = index;
    });
    
    // Remove all position classes
    cards.forEach(card => {
        card.classList.remove('active', 'next', 'prev');
    });
    
    if (direction === 'next') {
        // Active becomes prev, next becomes active, the one after next becomes next
        cards[activeIndex].classList.add('prev');
        cards[nextIndex].classList.add('active');
        cards[(nextIndex + 1) % cards.length].classList.add('next');
    } else {
        // Active becomes next, prev becomes active, the one before prev becomes prev
        cards[activeIndex].classList.add('next');
        cards[prevIndex].classList.add('active');
        cards[(prevIndex - 1 + cards.length) % cards.length].classList.add('prev');
    }
}

// Initialize the gallery when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initGallery();
}); 
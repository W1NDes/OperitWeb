// Card Gallery and Card Draw functionality
function initGallery() {
    const galleryContainer = document.querySelector('.card-gallery');
    if (!galleryContainer) return;

    const cards = [
        {
            image: 'images/examples/game_maker_show.jpg',
            title: 'Game Creation',
            description: 'Create and play games directly on your mobile device',
            link: 'user-guide.html#section-3-1'
        },
        {
            image: 'images/examples/web_dev.jpg',
            title: 'Web Development',
            description: 'Design websites and export as standalone applications',
            link: 'user-guide.html#section-2-2'
        },
        {
            image: 'images/examples/app_packaging.jpg',
            title: 'App Packaging',
            description: 'Package your creations as shareable applications',
            link: 'user-guide.html#section-2-2'
        },
        {
            image: 'images/examples/video_processing.jpg',
            title: 'Video Processing',
            description: 'Create and edit videos with AI assistance',
            link: 'user-guide.html#section-3'
        },
        {
            image: 'images/examples/3d_game.jpg',
            title: '3D Game Development',
            description: 'Create 3D games with simple descriptions',
            link: 'user-guide.html#section-3-1'
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
    
    cardsContainer.innerHTML = '';
    drawResultContainer.classList.add('show');
    
    const allCards = [
        // SSR (10%)
        { id: 5, image: 'images/examples/3d_game.jpg', title: '3D Game Creation', description: 'Create 3D worlds and games', rarity: 'ssr', link: 'user-guide.html#section-3-1' },
        // SR (60%)
        { id: 1, image: 'images/examples/game_maker_show.jpg', title: 'Game Creation', description: 'Create engaging games with AI', rarity: 'sr', link: 'user-guide.html#section-3-1' },
        { id: 2, image: 'images/examples/web_dev.jpg', title: 'Web Development', description: 'Build websites on your phone', rarity: 'sr', link: 'user-guide.html#section-2-2' },
        { id: 4, image: 'images/examples/video_processing.jpg', title: 'Video Processing', description: 'Edit videos with AI assistance', rarity: 'sr', link: 'user-guide.html#section-3' },
        { id: 6, image: 'manuals/assets/floating_and_attach.jpg', title: 'Floating Window & Attach', description: 'Access AI features anytime', rarity: 'sr', link: 'user-guide.html#section-3-3' },
        { id: 7, image: 'manuals/assets/package_list.jpg', title: 'Package Management', description: 'Powerful plugin ecosystem', rarity: 'sr', link: 'user-guide.html#section-2-5' },
        { id: 8, image: 'manuals/assets/set_alarm_and_date.jpg', title: 'Device Automation', description: 'Control your device with commands', rarity: 'sr', link: 'user-guide.html#section-3' },
        // R (30%)
        { id: 3, image: 'images/examples/app_packaging.jpg', title: 'App Packaging', description: 'Package your creations', rarity: 'r', link: 'user-guide.html#section-2-2' },
        { id: 9, image: 'manuals/assets/game_maker_chat.jpg', title: 'AI Chat', description: 'Converse with your AI partner', rarity: 'r', link: 'user-guide.html#section-1' },
        { id: 10, image: 'manuals/assets/user_step/step_for_frist_3.jpg', title: 'User Preference', description: 'Customize the AI to understand you', rarity: 'r', link: 'user-guide.html#section-2-1' }
    ];
    
    let drawnCards;
    let isSameAsLast;

    do {
        let availableCards = [...allCards];
        drawnCards = [];
        const rarityProbs = { ssr: 0.1, sr: 0.6, r: 0.3 };

        for (let i = 0; i < 3; i++) {
            if (availableCards.length === 0) break;

            let selectedCard = null;
            // This loop ensures we find a card even if a rarity is exhausted.
            while (selectedCard === null) {
                const rand = Math.random();
                let chosenRarity;

                if (rand < rarityProbs.ssr) {
                    chosenRarity = 'ssr';
                } else if (rand < rarityProbs.ssr + rarityProbs.sr) {
                    chosenRarity = 'sr';
                } else {
                    chosenRarity = 'r';
                }

                const potentialCards = availableCards.filter(c => c.rarity === chosenRarity);
                if (potentialCards.length > 0) {
                    const cardIndex = Math.floor(Math.random() * potentialCards.length);
                    selectedCard = potentialCards[cardIndex];
                }
            }
            
            drawnCards.push(selectedCard);
            availableCards = availableCards.filter(c => c.id !== selectedCard.id);
        }

        const drawnIds = drawnCards.map(c => c.id).sort().join(',');
        const lastIds = lastDrawnCards.map(c => c.id).sort().join(',');
        isSameAsLast = drawnCards.length < 3 ? false : (drawnIds === lastIds);

    } while (isSameAsLast);

    lastDrawnCards = drawnCards;
    
    drawnCards.forEach((card, index) => {
        const linkElement = document.createElement('a');
        linkElement.href = card.link;
        linkElement.className = 'drawn-card-link';

        const cardElement = document.createElement('div');
        // A new, simpler class for styling. No more complex flip structure.
        cardElement.className = `drawn-card-item`;
        
        cardElement.innerHTML = `
            <div class="rarity-badge rarity-${card.rarity}">${card.rarity.toUpperCase()}</div>
            <img src="${card.image}" alt="${card.title}" class="drawn-card-img">
            <div class="drawn-card-text">
                <h4>${card.title}</h4>
                <p>${card.description}</p>
            </div>
        `;
        
        // Apply a simple fade-in animation
        cardElement.style.animation = `fadeInUp 0.5s ease-out ${index * 0.2}s both`;
        
        linkElement.appendChild(cardElement);
        cardsContainer.appendChild(linkElement);
    });
    
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
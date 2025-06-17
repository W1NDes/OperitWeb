document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.createElement('div');
    snowContainer.id = 'snow-container';
    document.body.appendChild(snowContainer);

    const isUserGuidePage = window.location.pathname.includes('user-guide.html');
    const snowflakeCount = isUserGuidePage ? 60 : 40;
    
    createSnowflakes(snowContainer, snowflakeCount);
    handleCursorAvoidance();
});

function createSnowflakes(container, count) {
    for (let i = 0; i < count; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        const size = Math.random() * 4 + 1;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.opacity = Math.random() * 0.7 + 0.3;
        
        const animationDuration = Math.random() * 5 + 5; // 5s to 10s
        snowflake.style.animationDuration = `${animationDuration}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;

        // Vary horizontal movement
        const horizontalMovement = Math.random() * 40 - 20; // -20vw to +20vw
        snowflake.style.animationName = `fall-${i}`;
        
        const styleSheet = document.styleSheets[0];
        const keyframes = `
        @keyframes fall-${i} {
            from { transform: translateY(0) translateX(0); }
            to { transform: translateY(105vh) translateX(${horizontalMovement}vw); }
        }`;
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

        // Randomly pause some snowflakes
        if (Math.random() > 0.7) {
            snowflake.style.animationPlayState = 'paused';
        }

        container.appendChild(snowflake);
    }
}

function handleCursorAvoidance() {
    let cursorX = -100;
    let cursorY = -100;
    const avoidanceRadius = 80;

    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
    });

    function updateSnowflakes() {
        const snowflakes = document.querySelectorAll('.snowflake');
        snowflakes.forEach(flake => {
            const rect = flake.getBoundingClientRect();
            const flakeX = rect.left + rect.width / 2;
            const flakeY = rect.top + rect.height / 2;

            const dx = flakeX - cursorX;
            const dy = flakeY - cursorY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < avoidanceRadius) {
                const angle = Math.atan2(dy, dx);
                const force = (avoidanceRadius - distance) / avoidanceRadius;
                const moveX = Math.cos(angle) * force * 50;
                const moveY = Math.sin(angle) * force * 50;
                flake.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
            } else {
                flake.style.transform = 'translateX(0) translateY(0)';
            }
        });
        requestAnimationFrame(updateSnowflakes);
    }
    
    requestAnimationFrame(updateSnowflakes);
} 
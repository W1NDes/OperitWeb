document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.getElementById('snow-container');
    const toggleButton = document.getElementById('snow-toggle-btn');
    const backgroundParticles = document.getElementById('background-particles');
    let pJS_instance = null;

    const getParticleConfig = () => {
        const theme = document.documentElement.getAttribute('data-theme') || 'light';
        
        let speed, size, hoverMode;

        if (theme === 'dark') {
            speed = 2;
            size = 3;
            hoverMode = 'grab';
        } else { // light theme
            speed = 5;
            size = 5; // Larger particles for light mode
            hoverMode = 'repulse'; // Repulse effect for light mode
        }

        return {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 2000 } },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.4, "random": true, "anim": { "enable": true, "speed": 0.8, "opacity_min": 0.1, "sync": false } },
                "size": { "value": size, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
                "line_linked": { "enable": true, "distance": 120, "color": "#ffffff", "opacity": 0.3, "width": 1 },
                "move": { "enable": true, "speed": speed, "direction": "top-right", "random": false, "straight": false, "out_mode": "out" }
            },
            "interactivity": {
                "detect_on": "window",
                "events": {
                    "onhover": { "enable": true, "mode": hoverMode },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
                    "repulse": { "distance": 100, "duration": 0.4 }
                }
            },
            "retina_detect": true
        };
    };

    const initParticles = () => {
        if (pJS_instance) {
            pJS_instance.pJS.fn.vendors.destroypJS();
            pJS_instance = null;
        }
        if (backgroundParticles && typeof particlesJS !== 'undefined') {
            particlesJS('background-particles', getParticleConfig());
            pJS_instance = pJSDom[0];
        }
    };

    // Initialize particles once
    initParticles();
    
    // Listen for theme changes to update particle speed
    window.addEventListener('themeChanged', initParticles);

    // Default to off on mobile, on on desktop, unless user has a preference
    const isMobile = window.innerWidth <= 768;
    let snowEnabled = localStorage.getItem('snowEnabled');
    if (snowEnabled === null) {
        snowEnabled = !isMobile;
    } else {
        snowEnabled = snowEnabled === 'true';
    }

    let snowflakes = [];
    const NUM_SNOWFLAKES = 150;
    let mouseX = -100;
    let mouseY = -100;

    const updateEffectsState = () => {
        if (!toggleButton || !snowContainer) return;

        if (snowEnabled) {
            toggleButton.classList.add('active');
            snowContainer.classList.remove('hidden');
            backgroundParticles?.classList.remove('hidden');
        } else {
            toggleButton.classList.remove('active');
            snowContainer.classList.add('hidden');
            backgroundParticles?.classList.add('hidden');
        }
    };

    const createSnowflake = () => {
        const snowflake = document.createElement('div');
        const size = Math.random() * 4 + 1;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const fallSpeed = Math.random() * 2 + 1;

        snowflake.className = 'snowflake';
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${x}px`;
        snowflake.style.top = `${y}px`;
        
        snowflakes.push({
            element: snowflake,
            x: x,
            y: y,
            vx: Math.random() - 0.5,
            vy: fallSpeed,
            size: size
        });
        
        snowContainer.appendChild(snowflake);
    };

    const animateSnow = () => {
        if (!snowEnabled) {
            requestAnimationFrame(animateSnow);
            return;
        }

        for (let i = 0; i < snowflakes.length; i++) {
            let flake = snowflakes[i];

            // Mouse avoidance
            const dx = flake.x - mouseX;
            const dy = flake.y - mouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const angle = Math.atan2(dy, dx);
                const force = (100 - distance) / 100 * 2;
                flake.vx += Math.cos(angle) * force * 0.5;
                flake.vy += Math.sin(angle) * force * 0.5;
            }

            // Gravity and friction
            flake.vy += 0.02; 
            flake.vx *= 0.98;
            flake.vy *= 0.98;

            flake.x += flake.vx;
            flake.y += flake.vy;

            // Reset flake if it goes off screen
            if (flake.y > window.innerHeight + 10) {
                flake.x = Math.random() * window.innerWidth;
                flake.y = -10;
                flake.vx = Math.random() - 0.5;
                flake.vy = Math.random() * 2 + 1;
            }
            if (flake.x < -10) flake.x = window.innerWidth + 10;
            if (flake.x > window.innerWidth + 10) flake.x = -10;

            flake.element.style.transform = `translate3d(${flake.x}px, ${flake.y}px, 0)`;
        }
        
        requestAnimationFrame(animateSnow);
    };

    const initSnow = () => {
        if (!snowContainer) return;
        snowflakes.forEach(flake => flake.element.remove());
        snowflakes = [];
        for (let i = 0; i < NUM_SNOWFLAKES; i++) {
            createSnowflake();
        }
    };
    
    const toggleSnow = () => {
        snowEnabled = !snowEnabled;
        localStorage.setItem('snowEnabled', snowEnabled);
        updateEffectsState();
        if (snowEnabled && snowflakes.length === 0) {
            initSnow();
        }
    };

    // Event Listeners
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleSnow);
    }
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    window.addEventListener('resize', initSnow);

    // Initial State
    updateEffectsState();
    if (snowEnabled) {
        initSnow();
    }

    // Always initialize the hero particles, but don't toggle them.
    const particlesElement = document.getElementById('particles-js');
    if (particlesElement && typeof particlesJS !== 'undefined') {
        particlesJS.load('particles-js', 'particlesjs-config.json', function() {
            console.log('callback - hero particles.js config loaded initially');
        });
    }
    
    animateSnow();
}); 
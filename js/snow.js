document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.getElementById('snow-container');
    const toggleButton = document.getElementById('snow-toggle-btn');
    const backgroundParticles = document.getElementById('background-particles');
    let pJS_instance = null;

    if (!backgroundParticles) {
        console.error('Background particles container not found!');
        // Create the element if it doesn't exist
        const bgParticles = document.createElement('div');
        bgParticles.id = 'background-particles';
        document.body.insertBefore(bgParticles, document.body.firstChild);
    }

    const getParticleConfig = () => {
        const theme = document.documentElement.getAttribute('data-theme') || 'light';
        
        const isDarkMode = theme === 'dark';

        const baseConfig = {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 2000 } },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.4, "random": true, "anim": { "enable": true, "speed": 0.8, "opacity_min": 0.1, "sync": false } },
                "size": { "value": 5, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
                "line_linked": { "enable": true, "distance": 120, "color": "#ffffff", "opacity": 0.3, "width": 1 },
                "move": { "enable": true, "speed": 5, "direction": "top-right", "random": false, "straight": false, "out_mode": "out" }
            },
            "interactivity": {
                "detect_on": "window",
                "events": {
                    "onhover": { "enable": true, "mode": "repulse" },
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

        if (isDarkMode) {
            baseConfig.particles.number.value = 40; // Fewer particles in dark mode
            baseConfig.particles.move.speed = 2;
            baseConfig.particles.size.value = 3;
            baseConfig.interactivity.events.onhover.mode = 'grab';
        }

        return baseConfig;
    };

    const initParticles = () => {
        if (pJS_instance) {
            try {
                pJS_instance.pJS.fn.vendors.destroypJS();
                pJS_instance = null;
            } catch (e) {
                console.error('Error destroying previous particles instance:', e);
            }
        }
        
        if (backgroundParticles && typeof particlesJS !== 'undefined') {
            try {
                console.log('Initializing background particles...');
                particlesJS(backgroundParticles.id, getParticleConfig());
                
                // Find and store the instance for later reference
                if (typeof pJSDom !== 'undefined' && pJSDom.length > 0) {
                    for (let i = 0; i < pJSDom.length; i++) {
                        if (pJSDom[i].pJS.canvas.el.id === backgroundParticles.id) {
                            pJS_instance = pJSDom[i];
                            break;
                        }
                    }
                }
                console.log('Background particles initialized successfully');
            } catch (e) {
                console.error('Error initializing particles:', e);
            }
        } else {
            console.warn('backgroundParticles element not found or particlesJS not loaded');
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
        if (!toggleButton) return;

        if (snowEnabled) {
            toggleButton.classList.add('active');
            if (snowContainer) snowContainer.classList.remove('hidden');
            if (backgroundParticles) {
                backgroundParticles.classList.remove('hidden');
                // Re-initialize particles when showing them
                setTimeout(initParticles, 100);
            }
        } else {
            toggleButton.classList.remove('active');
            if (snowContainer) snowContainer.classList.add('hidden');
            if (backgroundParticles) backgroundParticles.classList.add('hidden');
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
    
    // Initialize necessary effects based on the enabled state
    if (snowEnabled) {
        initSnow();
        // Ensure particles are initialized if enabled
        if (backgroundParticles) {
            setTimeout(initParticles, 300);
        }
    }

    // Initialize hero particles
    const particlesElement = document.getElementById('particles-js');
    if (particlesElement && typeof particlesJS !== 'undefined') {
        particlesJS.load('particles-js', 'particlesjs-config.json', function() {
            console.log('Hero particles.js config loaded successfully');
        });
    }
    
    // Start animation loop
    animateSnow();
}); 
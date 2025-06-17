// Manual content loading and navigation
document.addEventListener('DOMContentLoaded', async () => {
    // Load manual content based on language
    const userLang = navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
    const manualPath = userLang === 'zh' ? 'manuals/zh.md' : 'manuals/en.md';

    try {
        const response = await fetch(manualPath);
        const markdown = await response.text();
        
        // Convert markdown to HTML
        const content = marked.parse(markdown);
        document.getElementById('manual-content').innerHTML = content;

        // Generate table of contents
        generateTOC();
        
        // Initialize scroll spy
        initScrollSpy();
        
        // Initialize theme
        initTheme();

        // Wrap tables for horizontal scrolling on mobile
        document.querySelectorAll('.manual-main-content table').forEach(table => {
            const wrapper = document.createElement('div');
            wrapper.style.overflowX = 'auto';
            wrapper.style.webkitOverflowScrolling = 'touch';
            wrapper.style.marginBottom = '1rem';
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        });
        
    } catch (error) {
        console.error('Error loading manual:', error);
        document.getElementById('manual-content').innerHTML = '<p>Error loading manual content. Please try again later.</p>';
    }
});

// Generate table of contents from headings
function generateTOC() {
    const content = document.getElementById('manual-content');
    const toc = document.getElementById('toc-list');
    const headings = content.querySelectorAll('h1, h2, h3, h4');
    
    const tocItems = [];
    
    headings.forEach((heading, index) => {
        // Add ID to heading if not present
        if (!heading.id) {
            heading.id = `section-${index}`;
        }
        
        const level = parseInt(heading.tagName.substring(1));
        const item = document.createElement('li');
        const link = document.createElement('a');
        
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        link.style.paddingLeft = `${(level - 1) * 20}px`;
        
        item.appendChild(link);
        tocItems.push(item);
    });
    
    toc.append(...tocItems);
}

// Initialize scroll spy functionality
function initScrollSpy() {
    const tocLinks = document.querySelectorAll('#toc-list a');
    const sections = document.querySelectorAll('h1, h2, h3, h4');
    
    // Debounce scroll handler
    let scrollTimeout;
    
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        
        scrollTimeout = window.requestAnimationFrame(() => {
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 100) {
                    currentSection = section.id;
                }
            });
            
            tocLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        });
    });
}

// Initialize theme
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle-checkbox');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.checked = savedTheme === 'dark';
    
    themeToggle.addEventListener('change', () => {
        const theme = themeToggle.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });
}

// Back to top button functionality
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); 
document.addEventListener('DOMContentLoaded', () => {

    // Particles.js background
    if (document.getElementById('particles-js')) {
        particlesJS.load('particles-js', 'particlesjs-config.json', function() {
            console.log('callback - particles.js config loaded');
        });
    }

    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // 考虑固定导航栏高度
                    behavior: 'smooth'
                });
            }
        });
    });

    // 滚动时导航栏变化效果
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    // 特性卡片动画效果
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // 添加新部件的交互效果，如果有的话
    // 例如图像放大、轮播图等
    
    // 自定义下载按钮事件
    const downloadLinks = document.querySelectorAll('.download-link');
    downloadLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 可以在这里添加下载统计、跟踪等功能
            console.log('Download clicked');
        });
    });

    // 获取所有功能卡片
    const featureCards = document.querySelectorAll('.feature-card');

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when a link is clicked inside
        navLinks.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });

        // Close menu when clicking outside of it
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // Logo click wink effect
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', (e) => {
            const rect = logo.getBoundingClientRect();
            const wink = document.createElement('div');
            wink.textContent = '😉';
            wink.classList.add('wink-feedback');
            document.body.appendChild(wink);
            
            wink.style.top = `${rect.top + rect.height / 2}px`;
            wink.style.left = `${rect.left + rect.width / 2}px`;

            setTimeout(() => {
                wink.classList.add('show');
            }, 10);

            setTimeout(() => {
                wink.style.opacity = 0;
                wink.addEventListener('transitionend', () => wink.remove());
            }, 600);
        });
    }

    const translations = {
        en: {
            "home": "Home",
            "features": "Features",
            "userGuide": "User Guide",
            "download": "GitHub",
            "newHeroTitle": "The First Fully-Featured AI Assistant on Mobile",
            "newHeroSubtitle": "Runs completely independently with powerful tool-calling capabilities",
            "downloadLatest": "Download Latest",
            "galleryTitle": "Example Gallery",
            "galleryDesc": "Experience what Operit AI can do through these interactive examples",
            "coreFeatures": "Core Features",
            "aiAssistant": "AI Assistant",
            "aiAssistantDesc": "A versatile assistant running independently on your Android device, deeply integrated with system permissions and tools.",
            "richTools": "Rich Toolset",
            "richToolsDesc": "Over 40 built-in tools, from file operations to network requests and UI automation.",
            "pluginSystem": "Plugin System",
            "pluginSystemDesc": "An powerful plugin ecosystem for limitless functional expansion.",
            "gameCreation": "Game Creation",
            "gameCreationDesc": "Create and play games directly on your phone, from concept to completion.",
            "webDev": "Web Development",
            "webDevDesc": "Design web pages on your phone and export them as standalone applications.",
            "floatingWindow": "Floating Window",
            "floatingWindowDesc": "Access AI functions anytime with convenience and efficiency.",
            "quickStartTitle": "Quick Start",
            "requirementsTitle": "System Requirements",
            "req1": "Android 8.0+ (API 26+)",
            "req2": "4GB+ RAM recommended",
            "req3": "200MB+ Storage",
            "installationTitle": "Installation Steps",
            "step1": "Download the latest APK from the link above.",
            "step2": "Install the app and follow the on-screen guide to grant permissions.",
            "step3": "Enjoy your new AI assistant!",
            "contributorsTitle": "☃️ Contributors"
        },
        zh: {
            "home": "首页",
            "features": "功能",
            "userGuide": "用户手册",
            "download": "GitHub",
            "newHeroTitle": "移动端首个功能完备的AI智能助手",
            "newHeroSubtitle": "完全独立运行，拥有强大的工具调用能力",
            "downloadLatest": "下载最新版",
            "galleryTitle": "示例画廊",
            "galleryDesc": "通过这些互动示例，体验 Operit AI 的强大功能",
            "coreFeatures": "核心特性",
            "aiAssistant": "AI 智能助手",
            "aiAssistantDesc": "完全独立运行于您的 Android 设备，是一个和安卓权限和各种工具深度融合的全能助手",
            "richTools": "丰富工具集",
            "richToolsDesc": "内置超过40种强大工具，从文件操作到网络请求、UI自动化，应有尽有",
            "pluginSystem": "插件系统",
            "pluginSystemDesc": "强大的插件生态，让功能扩展无限可能",
            "gameCreation": "游戏制作",
            "gameCreationDesc": "直接在手机上创建和玩游戏，从构思到实现一气呵成",
            "webDev": "Web 开发",
            "webDevDesc": "在手机上设计网页并导出为独立应用",
            "floatingWindow": "悬浮窗模式",
            "floatingWindowDesc": "随时调用AI功能，便捷高效",
            "quickStartTitle": "快速开始",
            "requirementsTitle": "系统需求",
            "req1": "安卓 8.0+ (API 26+)",
            "req2": "推荐 4GB+ 运行内存",
            "req3": "200MB+ 存储空间",
            "installationTitle": "安装步骤",
            "step1": "从上方链接下载最新的APK文件。",
            "step2": "安装应用并根据屏幕引导授予必要权限。",
            "step3": "开始享受您的新AI助手！",
            "contributorsTitle": "☃️ 贡献者"
        }
    };

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);
        
        // Update language switcher text
        const currentLangSpan = document.getElementById('current-lang');
        if (currentLangSpan) {
            currentLangSpan.textContent = lang === 'zh' ? '中' : 'En';
        }
    };

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('is-active');
        });
    }

    // Language switcher
    const langToggleBtn = document.getElementById('language-toggle-btn');
    const langOptions = document.getElementById('language-options');
    const langOptionLinks = document.querySelectorAll('.language-option');
    
    if (langToggleBtn && langOptions && langOptionLinks) {
        langToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langOptions.style.display = langOptions.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', (e) => {
            if (!langToggleBtn.contains(e.target) && !langOptions.contains(e.target)) {
                langOptions.style.display = 'none';
            }
        });

        langOptionLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const selectedLang = link.getAttribute('data-lang');
                setLanguage(selectedLang);
                langOptions.style.display = 'none';
            });
        });
    }

    // Load saved language or default to Chinese
    const savedLang = localStorage.getItem('language') || 'zh';
    setLanguage(savedLang);

    // Theme switcher
    const themeToggle = document.getElementById('theme-toggle-checkbox');
    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if(themeToggle) themeToggle.checked = theme === 'dark';
    };

    themeToggle?.addEventListener('change', (e) => {
        applyTheme(e.target.checked ? 'dark' : 'light');
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Click effect
    const clickEffect = document.createElement('div');
    clickEffect.classList.add('click-effect');
    document.body.appendChild(clickEffect);

    document.addEventListener('mousedown', (e) => {
        clickEffect.style.left = `${e.clientX}px`;
        clickEffect.style.top = `${e.clientY}px`;
        clickEffect.classList.add('active');
    });

    document.addEventListener('mouseup', () => {
        clickEffect.classList.remove('active');
    });

    // --- Cursor Click Effect ---
    document.addEventListener('click', (e) => {
        const effectContainer = document.createElement('div');
        effectContainer.className = 'click-effect';
        effectContainer.style.left = `${e.clientX}px`;
        effectContainer.style.top = `${e.clientY}px`;
        document.body.appendChild(effectContainer);

        // Create blue ring
        const ring = document.createElement('div');
        ring.className = 'dissolve-ring';
        effectContainer.appendChild(ring);

        // Create white sparks
        for (let i = 0; i < 8; i++) {
            const spark = document.createElement('div');
            spark.className = 'spark';
            const angle = i * 45; // 360 / 8 = 45
            const distance = 50;
            const x = Math.cos(angle * (Math.PI / 180)) * distance;
            const y = Math.sin(angle * (Math.PI / 180)) * distance;
            spark.style.setProperty('--x', `${x}px`);
            spark.style.setProperty('--y', `${y}px`);
            effectContainer.appendChild(spark);
        }

        setTimeout(() => {
            effectContainer.remove();
        }, 700);
    });
});
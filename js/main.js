document.addEventListener('DOMContentLoaded', function() {
    // --- Setup Functions ---
    const setupSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80, // Offset for fixed header
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    const setupHeaderScrollEffect = () => {
        const header = document.querySelector('header');
        if (!header) return;

        let lastScrollY = window.scrollY;
        const scrollThreshold = 200; // Only hide after scrolling down this many pixels

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
                // Scrolling down
                header.classList.add('header-hidden');
            } else {
                // Scrolling up
                header.classList.remove('header-hidden');
            }

            if (currentScrollY > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }

            lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY; // For Mobile or negative scrolling
        });
    };

    const setupHamburgerMenu = () => {
        const hamburger = document.querySelector('.hamburger-menu');
        const navLinks = document.querySelector('.nav-links');
        if (!hamburger || !navLinks) return;

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    };
    
    // --- Stats Animation ---
    const setupStatsAnimation = () => {
        const animateCountUp = (element) => {
            if (element.dataset.animated) return;
            element.dataset.animated = 'true';

            const target = parseInt(element.dataset.target, 10);
            if (isNaN(target)) return;

            const duration = 2000; // Animation duration in milliseconds
            let startTime = null;

            const step = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);
                const value = Math.floor(progress * target);
                element.textContent = value.toLocaleString('en-US');
                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            };
            requestAnimationFrame(step);
        };

        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(num => animateCountUp(num));
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const statsSection = document.querySelector('.github-stats-section');
        if (statsSection) {
            statsObserver.observe(statsSection);
        }
    };

    const setDaysOnline = () => {
        const startDate = new Date('2025-05-11');
        const today = new Date();
        let diffDays = 0;

        if (today >= startDate) {
            const diffTime = today - startDate;
            diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        }

        const daysOnlineElement = document.querySelector('#days-online');
        if (daysOnlineElement) {
            daysOnlineElement.dataset.target = diffDays;
        }
    };

    // --- Language Switcher ---
    const translations = {
        en: {
            home: "Home",
            userGuide: "User Manual",
            features: "Features",
            download: "Download",
            heroTitleLine1: "The <span class='special-text silver-text'>First</span> Fully-Featured",
            heroTitleLine2: "<span class='special-text gradient-text'>AI Assistant</span> for Mobile",
            heroSubtitle: "Completely independent operation with powerful tool capabilities",
            newHeroTitle: "The First Fully-Featured AI Assistant for Mobile",
            newHeroSubtitle: "Completely independent operation with powerful tool capabilities",
            downloadLatest: "Download Latest Version",
            getStarted: "Download Now",
            featuresTitle: "Features",
            feature1Title: "Intelligent Creation",
            feature1Desc: "Let AI build applications, write code, create games, and more, directly on your device.",
            feature2Title: "Extensible",
            feature2Desc: "With support for extension packages and a market of community-driven tools (MCPs), the possibilities are endless.",
            feature3Title: "Device Automation",
            feature3Desc: "Operit AI can control your device, manage files, send messages, and interact with other apps.",
            showcase1Title: "Game Creation",
            showcase1Desc: "Describe your game idea, and the AI will design, implement, and package it for you.",
            showcase2Title: "Web Development",
            showcase2Desc: "Design web pages on your phone and export them as standalone applications.",
            showcase3Title: "Floating Window & Attachments",
            showcase3Desc: "Use the floating window for quick access and easily share files with the AI.",
            galleryTitle: "Example Gallery",
            galleryDesc: "Experience what Operit AI can do through these interactive examples",
            serviceProviders: "We Support AI with OpenAI/Google Interfaces",
            serviceProvidersDesc: "Images are service providers we support (including but not limited to)",
            quickStartTitle: "Quick Start",
            requirementsTitle: "System Requirements",
            req1: "Android 8.0+ (API 26+)",
            req2: "4GB+ RAM recommended",
            req3: "200MB+ Storage",
            installationTitle: "Installation Steps",
            step1: "Download the latest APK from the link above.",
            step2: "Install the app and follow the on-screen guide to grant permissions.",
            step3: "Enjoy your new AI assistant!",
            downloadTitle: "Download",
            downloadDesc: "For users in mainland China or regions with slow GitHub access.",
            downloadApk: "Download APK (v1.1.5)",
            contributorsTitle: "Contributors",
            coreFeatures: "Core Features",
            aiAssistant: "AI Intelligent Assistant",
            aiAssistantDesc: "Runs completely independently on your Android device, a comprehensive assistant deeply integrated with Android permissions and various tools",
            richTools: "Rich Tool Set",
            richToolsDesc: "Built-in with over 40 powerful tools, from file operations to network requests, UI automation, and more",
            pluginSystem: "Plugin System",
            pluginSystemDesc: "Powerful plugin ecosystem, enabling unlimited possibilities for extension",
            gameCreation: "Game Creation",
            gameCreationDesc: "Create and play games directly on your phone, from conception to implementation in one go",
            webDev: "Web Development",
            webDevDesc: "Design web pages on your phone and export them as standalone applications",
            floatingWindow: "Floating Window Mode",
            floatingWindowDesc: "Access AI features anytime, convenient and efficient"
        },
        zh: {
            home: "首页",
            userGuide: "用户手册",
            features: "功能",
            download: "下载",
            heroTitleLine1: "移动端<span class='special-text silver-text'>首个</span>功能完备的",
            heroTitleLine2: "<span class='special-text gradient-text'>AI智能助手</span>",
            heroSubtitle: "完全独立运行，拥有强大的工具调用能力",
            newHeroTitle: "移动端首个功能完备的AI智能助手",
            newHeroSubtitle: "完全独立运行，拥有强大的工具调用能力",
            downloadLatest: "下载最新版",
            getStarted: "立即下载",
            featuresTitle: "核心特性",
            feature1Title: "智能创造",
            feature1Desc: "让AI直接在您的设备上构建应用程序、编写代码、创建游戏等等。",
            feature2Title: "可拓展",
            feature2Desc: "通过对扩展包和社区驱动工具市场（MCP）的支持，可能性是无限的。",
            feature3Title: "设备自动化",
            feature3Desc: "Operit AI 可以控制您的设备、管理文件、发送消息以及与其他应用程序交互。",
            showcase1Title: "游戏制作",
            showcase1Desc: "只需描述您的游戏创意，AI就能帮您设计、实现并打包成可分享的游戏。",
            showcase2Title: "Web开发",
            showcase2Desc: "在手机上设计网页并导出为独立应用。",
            showcase3Title: "悬浮窗与附件",
            showcase3Desc: "使用悬浮窗便捷调用，附件功能轻松共享文件。",
            galleryTitle: "示例画廊",
            galleryDesc: "点击抽卡，查看Operit AI的功能示例。",
            serviceProviders: "我们支持OpenAI/Google接口的AI",
            serviceProvidersDesc: "图片是我们支持的服务商（包括但不限于）",
            quickStartTitle: "快速开始",
            requirementsTitle: "系统要求",
            req1: "Android 8.0+ (API 26+)",
            req2: "建议4GB以上内存",
            req3: "存储空间200MB+",
            installationTitle: "安装步骤",
            step1: "从上方的链接下载最新的APK。",
            step2: "安装应用并根据屏幕引导授予权限。",
            step3: "开始享受您的AI助手！",
            downloadTitle: "下载",
            downloadDesc: "为中国大陆或GitHub访问速度较慢地区的用户提供。",
            downloadApk: "下载 APK (v1.1.5)",
            contributorsTitle: "贡献者",
            coreFeatures: "核心特性",
            aiAssistant: "AI 智能助手",
            aiAssistantDesc: "完全独立运行于您的 Android 设备，是一个和安卓权限和各种工具深度融合的全能助手",
            richTools: "丰富工具集",
            richToolsDesc: "内置超过40种强大工具，从文件操作到网络请求、UI自动化，应有尽有",
            pluginSystem: "插件系统",
            pluginSystemDesc: "强大的插件生态，让功能扩展无限可能",
            gameCreation: "游戏制作",
            gameCreationDesc: "直接在手机上创建和玩游戏，从构思到实现一气呵成",
            webDev: "Web 开发",
            webDevDesc: "在手机上设计网页并导出为独立应用",
            floatingWindow: "悬浮窗模式",
            floatingWindowDesc: "随时调用AI功能，便捷高效"
        }
    };
    
    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        localStorage.setItem('user-lang', lang);
        const currentLangSpan = document.getElementById('current-lang');
        if (currentLangSpan) {
            currentLangSpan.textContent = lang === 'zh' ? '中' : 'En';
        }
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];

                // Re-wire parallax effect for newly added spans
                if (key === 'heroTitleLine1' || key === 'heroTitleLine2') {
                    setupTextParallax();
                }
            }
        });
    };

    const setupLanguageSwitcher = () => {
        const langToggleButton = document.getElementById('language-toggle-btn');
        const langOptions = document.getElementById('language-options');
        if (!langToggleButton || !langOptions) return;

        langToggleButton.addEventListener('click', (e) => {
            e.stopPropagation();
            langOptions.classList.toggle('show');
        });

        document.addEventListener('click', () => langOptions.classList.remove('show'));

        langOptions.addEventListener('click', (e) => {
            if (e.target.classList.contains('language-option')) {
                e.preventDefault();
                setLanguage(e.target.getAttribute('data-lang'));
                langOptions.classList.remove('show');
            }
        });
        
        const savedLang = localStorage.getItem('user-lang') || (navigator.language.startsWith('zh') ? 'zh' : 'en');
        setLanguage(savedLang);
    };

    const updateParticleVisibility = () => {
        const particlesContainer = document.getElementById('particles-js');
        if (!particlesContainer) return;
        
        const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
        // localStorage stores strings, so we must compare to the string 'true'.
        const snowEnabled = localStorage.getItem('snowEffect') === 'true';

        if (isDarkMode && snowEnabled) {
            if (particlesContainer.style.display !== 'block') {
                particlesContainer.style.display = 'block';
            }
            // If particles are not yet loaded, load them.
            if (!window.pJSDom || !window.pJSDom.length) { 
                particlesJS.load('particles-js', 'particlesjs-config.json', function() {
                    console.log('Particles.js loaded');
                });
            }
        } else {
            if (particlesContainer.style.display !== 'none') {
                particlesContainer.style.display = 'none';
            }
            // If particles are loaded, destroy them to save resources.
            if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
                window.pJSDom[0].pJS.fn.vendors.destroypJS();
                window.pJSDom = [];
            }
        }
    };

    const setupThemeSwitcher = () => {
        const checkbox = document.getElementById('theme-toggle-checkbox');
        if (!checkbox) return;

        const applyTheme = (theme, fromUserInteraction = false) => {
            if (fromUserInteraction) {
                document.body.classList.add('theme-transition');
            }

            // On any theme switch, reset the snow effect to its default (off) state.
            localStorage.setItem('snowEffect', 'false');

            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            checkbox.checked = theme === 'dark';
            updateParticleVisibility();

            if (fromUserInteraction) {
                document.body.addEventListener('transitionend', () => {
                    document.body.classList.remove('theme-transition');
                }, { once: true });
            }
        };

        const detectAndApplyTheme = () => {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
        };

        checkbox.addEventListener('change', () => {
            applyTheme(checkbox.checked ? 'dark' : 'light', true);
        });

        detectAndApplyTheme();
    };
    
    const setupSnowToggle = () => {
        const snowToggleBtn = document.getElementById('snow-toggle-btn');
        if (!snowToggleBtn) return;
    
        snowToggleBtn.addEventListener('click', () => {
            // This button is only visible in dark mode, so we just toggle the state.
            const snowEnabled = localStorage.getItem('snowEffect') !== 'false';
            localStorage.setItem('snowEffect', String(!snowEnabled));
            updateParticleVisibility();
        });
    };

    const setupTextParallax = () => {
        const hero = document.querySelector('.hero');
        const specialTexts = document.querySelectorAll('.special-text');

        if (!hero || specialTexts.length === 0) {
            return;
        }

        const onMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { offsetWidth, offsetHeight } = hero;

            const x = (clientX - offsetWidth / 2) / (offsetWidth / 2);
            const y = (clientY - offsetHeight / 2) / (offsetHeight / 2);

            const tiltAmount = 5; 

            specialTexts.forEach(text => {
                text.style.transform = `perspective(1000px) rotateY(${x * tiltAmount}deg) rotateX(${-y * tiltAmount}deg)`;
            });
        };

        const onMouseLeave = () => {
            specialTexts.forEach(text => {
                text.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
            });
        };

        hero.removeEventListener('mousemove', onMouseMove);
        hero.removeEventListener('mouseleave', onMouseLeave);

        hero.addEventListener('mousemove', onMouseMove);
        hero.addEventListener('mouseleave', onMouseLeave);
    };

    const setupProximityGlowEffect = () => {
        const hero = document.querySelector('.hero');
        const silverText = document.querySelector('.silver-text');

        if (!hero || !silverText) return;

        const baseGlowColor = '170, 170, 170';
        const maxGlowOpacity = 0.7;
        const glowRadius = '15px';
        const maxDistance = 300;

        const onMouseMove = (e) => {
            window.requestAnimationFrame(() => {
                const rect = silverText.getBoundingClientRect();
                if (rect.width === 0 && rect.height === 0) return;
                
                const elementCenterX = rect.left + rect.width / 2;
                const elementCenterY = rect.top + rect.height / 2;
                
                const distance = Math.sqrt(Math.pow(e.clientX - elementCenterX, 2) + Math.pow(e.clientY - elementCenterY, 2));
                
                const glowOpacity = Math.min(distance / maxDistance, 1) * maxGlowOpacity;
                
                silverText.style.textShadow = `0 0 ${glowRadius} rgba(${baseGlowColor}, ${glowOpacity})`;
            });
        };

        const onMouseLeave = () => {
            window.requestAnimationFrame(() => {
                silverText.style.textShadow = `0 0 ${glowRadius} rgba(${baseGlowColor}, ${maxGlowOpacity})`;
            });
        };

        hero.addEventListener('mousemove', onMouseMove);
        hero.addEventListener('mouseleave', onMouseLeave);
    };

    // --- Initializations ---
    const initialLang = localStorage.getItem('user-lang') || 'zh';
    setLanguage(initialLang);
    setDaysOnline();
    setupSmoothScroll();
    setupHeaderScrollEffect();
    setupHamburgerMenu();
    setupStatsAnimation();
    setupLanguageSwitcher();
    setupThemeSwitcher();
    setupSnowToggle();
    setupProximityGlowEffect();
    setupTextParallax();
});
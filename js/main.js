document.addEventListener('DOMContentLoaded', function() {
    // Initialize Particles.js
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
});

document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            home: "Home",
            userGuide: "User Manual",
            features: "Features",
            download: "Download",
            heroTitle: "The AI that turns your phone into a true smart assistant.",
            heroSubtitle: "From here, you will witness the creativity of countless users. From here, you will showcase your creativity!",
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
            // Core Features section translations
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
            heroTitle: "将您的手机变成真正智能助手的AI。",
            heroSubtitle: "从这里开始，你将看到无数用户的创造力。从这里开始，你将展示你的创造力！",
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
            // Core Features section translations
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

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    }

    const userLang = navigator.language.startsWith('zh') ? 'zh' : 'en';
    setLanguage(userLang);

    // --- Theme Switcher ---
    const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeToggleCheckbox.checked = theme === 'dark';
    }

    function detectAndApplyTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            applyTheme(systemPrefersDark.matches ? 'dark' : 'light');
        }
    }

    themeToggleCheckbox.addEventListener('change', (e) => {
        applyTheme(e.target.checked ? 'dark' : 'light');
    });

    systemPrefersDark.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
             applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    detectAndApplyTheme();
});
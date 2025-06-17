document.addEventListener('DOMContentLoaded', function() {
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
    const galleryCards = document.querySelectorAll('.gallery-card');
    
    // 删除卡片打散效果
    
    // 删除原有的卡片动画效果代码
    // 保留画廊的动画，但删除其他卡片的动画
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
            galleryDesc: "Click to draw a card and see examples of what Operit AI can do.",
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

    // --- Card Gallery Logic ---
    const gallery = document.getElementById('card-gallery');
    const modal = document.getElementById('drawn-cards-modal');

    const cardImages = [
        'manuals/assets/expamle/065e5ca8a8036c51a7905d206bbb56c.jpg', // writer
        'manuals/assets/expamle/90a1778510df485d788b80d4bc349f9.jpg',  // various_search
        'manuals/assets/expamle/615cf7a99e421356b6d22bb0b9cc87b.jpg',  // daily_life
        'manuals/assets/expamle/731f67e3d7494886c1c1f8639216bf2.jpg',  // super_admin
        'manuals/assets/expamle/71fd917c5310c1cebaa1abb19882a6d.jpg',  // baidu_map
        'manuals/assets/expamle/5fff4b49db78ec01e189658de8ea997.jpg',  // various_output
        'manuals/assets/expamle/6f81901ae47f5a3584167148017d132.jpg'   // super_admin 2
    ];

    // Populate the gallery
    cardImages.forEach(src => {
        const card = document.createElement('div');
        card.classList.add('gallery-card');
        card.style.backgroundImage = `url(${src})`;
        gallery.appendChild(card);
    });

    // Draw cards on click
    gallery.addEventListener('click', () => {
        // Clear previous cards
        modal.innerHTML = '';
        modal.classList.add('visible');

        // Shuffle and pick 3
        const drawn = cardImages.sort(() => 0.5 - Math.random()).slice(0, 3);

        drawn.forEach((src, index) => {
            const card = document.createElement('div');
            card.classList.add('drawn-card');
            card.style.backgroundImage = `url(${src})`;
            
            // Initial position (center)
            card.style.transform = 'translate(-50%, -50%) scale(0)';
            
            modal.appendChild(card);

            // Animate to final position
            setTimeout(() => {
                const angle = (index - 1) * 15; // -15, 0, 15 degrees
                const xPos = (index - 1) * 50; // -50px, 0, 50px
                card.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateX(${xPos}px) scale(1)`;
            }, 100 * index);
        });
    });

    // Close modal on click outside
    modal.addEventListener('click', () => {
        modal.classList.remove('visible');
    });
});

// Example gallery items
const galleryItems = [
    {
        title: "用HTML代码写一个3D游戏",
        subtitle: "AI仅通过内置工具，就可以为您呈现一个动态的3D游戏场景。",
        image: "manuals/assets/expamle/759d86a7d74351675b32acb6464585d.jpg",
        link: "user-guide.html#section-3-1"
    },
    {
        title: "软件打包与部署",
        subtitle: "从编写代码到最终发布，AI可以将软件打包成APK或EXE。",
        image: "manuals/assets/game_maker_packer.jpg",
        link: "user-guide.html#section-2-2"
    },
    {
        title: "制作一个可以联网的MCP",
        subtitle: "让AI拥有联网、读写文件的能力，并将其封装成可分享的MCP。",
        image: "manuals/assets/package_or_MCP/1.jpg",
        link: "user-guide.html#section-2-2"
    },
    {
        title: "2D游戏创作",
        subtitle: "通过简单的对话，让AI为您构思并实现一个经典的2D弹幕射击游戏。",
        image: "manuals/assets/game_maker_show.jpg",
        link: "user-guide.html#section-3-1"
    },
    {
        title: "视频处理",
        subtitle: "内置强大的FFmpeg工具，让AI帮您完成视频格式转换、截取等任务。",
        image: "manuals/assets/d7580a42ae03c723121bd172e1f9e7d.jpg",
        link: "user-guide.html#section-3-1"
    },
    {
        title: "Web开发",
        subtitle: "在手机上设计网页并导出为独立应用。",
        image: "manuals/assets/web_developer.jpg",
        link: "user-guide.html#section-2-2"
    },
    {
        title: "日常生活助手",
        subtitle: "查询天气、设置闹钟、发送短信... 让AI成为你的贴心生活助手。",
        image: "manuals/assets/expamle/615cf7a99e421356b6d22bb0b9cc87b.jpg",
        link: "user-guide.html#section-3-2"
    },
    {
        title: "多平台搜索",
        subtitle: "支持从必应、百度、搜狗、夸克等多个平台获取信息。",
        image: "manuals/assets/expamle/90a1778510df485d788b80d4bc349f9.jpg",
        link: "user-guide.html#section-3-2"
    }
];

// --- 卡池数据 ---
const drawPoolItems = [
    // R
    { title: "初次使用/试用", subtitle: "了解如何开始使用Operit AI，从安装到基本操作。", image: "manuals/assets/user_step/step_for_frist_1.jpg", rarity: "R", link: "user-guide.html#section-2-1" },
    { title: "打包WEB应用", subtitle: "学习如何将AI编写的网页应用打包成独立的APK文件。", image: "manuals/assets/app_packaging.jpg", rarity: "R", link: "user-guide.html#section-2-2" },
    { title: "配置API/模型", subtitle: "自定义你的AI，配置使用不同的API或模型。", image: "manuals/assets/deepseek_API_step/1.png", rarity: "R", link: "user-guide.html#section-2-3" },
    { title: "Shizuku授权", subtitle: "通过Shizuku解锁更多高级功能，提升AI的能力。", image: "manuals/assets/e18954ffd6a4bc8cc465f611fee7b71.jpg", rarity: "R", link: "user-guide.html#section-2-4" },
    { title: "开箱即用功能", subtitle: "探索Operit AI内置的各种实用工具和功能。", image: "manuals/assets/floating_and_attach.jpg", rarity: "R", link: "user-guide.html#section-3-1" },
    { title: "核心工具概览", subtitle: "深入了解Operit AI强大的核心工具集。", image: "manuals/assets/game_maker_chat.jpg", rarity: "R", link: "user-guide.html#section-3-3" },

    // SR
    { title: "包管理与MCP", subtitle: "学习如何使用包管理器和MCP来扩展AI的功能。", image: "manuals/assets/package_list.jpg", rarity: "SR", link: "user-guide.html#section-2-5" },
    { title: "MCP市场", subtitle: "在MCP市场中发现、分享和下载各种社区创建的工具。", image: "manuals/assets/package_or_MCP/4.jpg", rarity: "SR", link: "user-guide.html#section-3-4" },

    // SSR
    { title: "拓展包示例", subtitle: "查看强大的拓展包示例，激发你的创造力。", image: "manuals/assets/webdev/c851e530a258bbbbf41f87dcb907b14.png", rarity: "SSR", link: "user-guide.html#section-3-2" }
];

document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Initialize gallery
    initGallery();
});

// Theme management
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

// Gallery initialization and management
function initGallery() {
    const galleryContainer = document.querySelector('.card-gallery');
    const gallerySection = document.querySelector('.card-gallery-container');
    if (!galleryContainer) return;

    // Clear any existing content
    galleryContainer.innerHTML = '';
    
    // 随机洗牌画廊项目
    const shuffledItems = [...galleryItems].sort(() => 0.5 - Math.random());

    // 只添加所有卡片但初始时大多数隐藏
    shuffledItems.forEach((item, index) => {
        const card = createGalleryCard(item);
        galleryContainer.appendChild(card);
    });

    // Ensure three cards are always visible initially
    const cards = Array.from(galleryContainer.children);
    if (cards.length > 2) {
        cards[0].classList.add('active');
        cards[1].classList.add('next');
        cards[cards.length - 1].classList.add('prev');
    }
    
    // 添加图示提示用户可以拖拽
    const dragHint = document.createElement('div');
    dragHint.className = 'drag-hint';
    dragHint.innerHTML = '<span>← 拖拽查看更多 →</span>';
    galleryContainer.parentElement.appendChild(dragHint);

    // 添加拖动功能
    galleryContainer.classList.add('draggable');
    
    // 拖动变量
    let isDragging = false;
    let startX, moveX;
    let dragThreshold = 50;
    
    // 鼠标事件
    galleryContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX;
        galleryContainer.classList.add('dragging');
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        moveX = e.pageX;
        
        const difference = moveX - startX;
        
        // 如果拖动超过阈值，旋转画廊
        if (Math.abs(difference) > dragThreshold) {
            if (difference > 0) {
                // 向右拖动，显示上一个
                rotateGallery(-1);
            } else {
                // 向左拖动，显示下一个
                rotateGallery(1);
            }
            isDragging = false;
            startX = moveX;
        }
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
        galleryContainer.classList.remove('dragging');
    });
    
    // 触摸事件
    galleryContainer.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].pageX;
    });
    
    galleryContainer.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        moveX = e.touches[0].pageX;
        
        const difference = moveX - startX;
        
        // 如果拖动超过阈值，旋转画廊
        if (Math.abs(difference) > dragThreshold) {
            if (difference > 0) {
                // 向右拖动，显示上一个
                rotateGallery(-1);
            } else {
                // 向左拖动，显示下一个
                rotateGallery(1);
            }
            isDragging = false;
            startX = moveX;
        }
    });
    
    galleryContainer.addEventListener('touchend', () => {
        isDragging = false;
    });

    // Initialize auto-rotation
    let autoRotation = setInterval(() => rotateGallery(1), 5000);
    
    // 当用户交互时停止自动旋转
    galleryContainer.addEventListener('mousedown', () => {
        clearInterval(autoRotation);
        restartAutoRotation();
    });
    
    galleryContainer.addEventListener('touchstart', () => {
        clearInterval(autoRotation);
        restartAutoRotation();
    });

    function restartAutoRotation() {
        clearInterval(autoRotation);
        autoRotation = setInterval(() => rotateGallery(1), 8000); // 重启并设置更长的间隔
    }

    // 添加抽卡按钮事件
    const drawButton = document.querySelector('.draw-button');
    if (drawButton) {
        drawButton.addEventListener('click', () => {
            drawRandomCards();
        });
    }
}

function drawRandomCards() {
    const resultContainer = document.querySelector('.draw-result-container');
    const cardsContainer = resultContainer.querySelector('.draw-cards-container');
    const closeButton = resultContainer.querySelector('.close-draw-button');

    if (!resultContainer || !cardsContainer) return;
    
    // 清空之前的结果
    cardsContainer.innerHTML = '';

    // 从卡池中随机抽取3张
    const drawnItems = [...drawPoolItems].sort(() => 0.5 - Math.random()).slice(0, 3);
    
    drawnItems.forEach((item, index) => {
        const card = createGalleryCard(item);
        card.classList.add('draw-card');
        card.style.animationDelay = `${index * 0.2}s`;
        
        // 添加稀有度标记
        const rarityBadge = document.createElement('div');
        rarityBadge.className = `rarity-badge rarity-${item.rarity.toLowerCase()}`;
        rarityBadge.textContent = item.rarity;
        
        // 插入到 gallery-card-inner 的第一个子元素
        const inner = card.querySelector('.gallery-card-inner');
        if (inner) {
            inner.insertBefore(rarityBadge, inner.firstChild);
        }
        
        cardsContainer.appendChild(card);
    });

    resultContainer.classList.add('show');
    
    const handleClose = () => {
        resultContainer.classList.remove('show');
        resultContainer.removeEventListener('click', closeOnBackdrop);
        closeButton.removeEventListener('click', handleClose);
    };

    const closeOnBackdrop = (e) => {
        if (e.target === resultContainer) {
            handleClose();
        }
    };
    
    closeButton.addEventListener('click', handleClose);
    resultContainer.addEventListener('click', closeOnBackdrop);
}

function createGalleryCard(item) {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    
    const inner = document.createElement('div');
    inner.className = 'gallery-card-inner';
    
    // 如果有链接，添加一个包装链接
    if (item.link) {
        card.addEventListener('click', function() {
            // 只有当卡片是活动的时才触发链接
            if (card.classList.contains('active')) {
                window.location.href = item.link;
            }
        });
        
        // 添加链接样式
        card.classList.add('has-link');
    }
    
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;

    const textContainer = document.createElement('div');
    textContainer.className = 'gallery-card-text';
    
    const title = document.createElement('h4');
    title.textContent = item.title;
    
    const subtitle = document.createElement('p');
    subtitle.textContent = item.subtitle;
    
    inner.appendChild(img);
    textContainer.appendChild(title);
    textContainer.appendChild(subtitle);
    inner.appendChild(textContainer);
    card.appendChild(inner);
    
    if (item.link) {
        card.classList.add('has-link');
        card.addEventListener('click', (e) => {
            // 如果是抽卡结果中的卡片，则阻止默认跳转
            if (e.currentTarget.closest('.draw-result-container')) {
                e.stopPropagation();
                e.preventDefault();
                window.open(item.link, '_blank');
                return;
            }

            // 对于画廊中的活动卡片，进行跳转
            if (card.classList.contains('active')) {
                window.location.href = item.link;
            }
        });
    }
    
    return card;
}

function rotateGallery(direction) {
    const cards = document.querySelectorAll('.gallery-card');
    const cardsArray = Array.from(cards);
    let currentIndex = 0;
    let nextIndex = 0;
    let prevIndex = 0;
    
    cards.forEach((card, index) => {
        if (card.classList.contains('active')) {
            currentIndex = index;
        } else if (card.classList.contains('next')) {
            nextIndex = index;
        } else if (card.classList.contains('prev')) {
            prevIndex = index;
        }
    });
    
    // 所有卡片先清除当前位置类
    cards.forEach(card => {
        card.classList.remove('active', 'next', 'prev');
    });
    
    // 根据拖动方向决定要旋转的方向
    if (direction > 0) {
        // 向左拖动，当前卡片变为prev，next卡片变为active
        cardsArray[currentIndex].classList.add('prev');
        cardsArray[nextIndex].classList.add('active');
        
        // 随机选择一张当前未显示的卡片作为新的next
        let hiddenCards = cardsArray.filter(card => 
            !card.classList.contains('active') && 
            !card.classList.contains('prev') && 
            !card.classList.contains('next')
        );
        
        if (hiddenCards.length > 0) {
            const randomIndex = Math.floor(Math.random() * hiddenCards.length);
            hiddenCards[randomIndex].classList.add('next');
        } else {
            // 如果所有卡片都在显示，就用prevIndex对应的卡片
            cardsArray[prevIndex].classList.add('next');
        }
    } else {
        // 向右拖动，当前卡片变为next，prev卡片变为active
        cardsArray[currentIndex].classList.add('next');
        cardsArray[prevIndex].classList.add('active');
        
        // 随机选择一张当前未显示的卡片作为新的prev
        let hiddenCards = cardsArray.filter(card => 
            !card.classList.contains('active') && 
            !card.classList.contains('prev') && 
            !card.classList.contains('next')
        );
        
        if (hiddenCards.length > 0) {
            const randomIndex = Math.floor(Math.random() * hiddenCards.length);
            hiddenCards[randomIndex].classList.add('prev');
        } else {
            // 如果所有卡片都在显示，就用nextIndex对应的卡片
            cardsArray[nextIndex].classList.add('prev');
        }
    }
}
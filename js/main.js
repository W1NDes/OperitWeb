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
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
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
});
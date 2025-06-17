# Operit Web

网站项目文档 - Operit AI官方网站

*[English documentation below](#english-documentation)*

## 项目概述

Operit Web是Operit AI的官方网站项目，提供产品信息、功能展示和用户手册。该网站采用模块化的CSS和JavaScript结构，易于维护和扩展。

## 文件结构

```
OperitWeb/
  - css/               # CSS样式文件夹
    - main.css         # 主CSS文件，导入所有模块化CSS
    - style.css        # 向后兼容的样式文件
    - variables.css    # CSS变量和主题定义
    - base.css         # 全局基础样式
    - layout.css       # 布局组件样式
    - components.css   # 可重用UI组件样式
    - gallery.css      # 卡片画廊样式
    - features.css     # 功能特性区域样式
    - manual.css       # 用户手册页面样式
    - animations.css   # 动画关键帧定义
    - responsive.css   # 响应式设计媒体查询
    - guide.css        # 用户指南特有样式
  - images/            # 图片资源文件夹
    - examples/        # 示例图片
    - logo.png         # 网站logo
  - js/                # JavaScript文件夹
    - main.js          # 主要脚本和全局功能
    - gallery.js       # 卡片画廊和抽卡功能
    - guide.js         # 用户指南页面脚本
  - manuals/           # 用户手册资源
    - assets/          # 手册相关图片资源
  - index.html         # 网站主页
  - user-guide.html    # 用户手册页面
  - README.md          # 项目文档
```

## CSS架构

CSS文件采用模块化结构，根据功能和关注点分为多个文件：

1. **variables.css** - 定义CSS变量和主题配置（明/暗主题）
2. **base.css** - 基础重置和全局样式
3. **layout.css** - 页面布局相关样式（头部、底部、主内容区）
4. **components.css** - 可复用UI组件（按钮、主题切换开关等）
5. **gallery.css** - 卡片画廊和抽卡结果的样式
6. **features.css** - 功能特性展示区域样式
7. **manual.css** - 用户手册页面特定样式
8. **animations.css** - 所有动画关键帧定义
9. **responsive.css** - 响应式布局的媒体查询
10. **guide.css** - 用户指南页面特有样式

**main.css** 导入所有模块化CSS文件，是HTML页面中引用的主要样式文件。
**style.css** 保留为向后兼容文件，也导入所有模块化CSS。

## JavaScript文件

1. **main.js** - 处理核心功能：
   - 多语言支持
   - 主题切换
   - 滚动效果
   - 其他全局交互

2. **gallery.js** - 处理卡片画廊功能：
   - 卡片轮播
   - 拖拽交互
   - 抽卡功能和动画

3. **guide.js** - 处理用户手册页面功能：
   - 目录导航
   - 内容加载
   - 页面交互

## 主题支持

网站支持亮色和暗色主题，使用CSS变量实现。主题切换通过JavaScript控制，会保存用户偏好到localStorage中。

```javascript
// 主题切换示例代码
themeToggleCheckbox.addEventListener('change', (e) => {
    applyTheme(e.target.checked ? 'dark' : 'light');
});

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggleCheckbox.checked = theme === 'dark';
}
```

CSS变量定义在variables.css中：

```css
:root {
    --primary-color: #2563eb;
    --background-color: #ffffff;
    --text-color: #333333;
    /* 其他变量... */
}

[data-theme="dark"] {
    --primary-color: #60a5fa;
    --background-color: #1f2937;
    --text-color: #e5e7eb;
    /* 其他变量... */
}
```

## 国际化支持

网站支持中文和英文两种语言，通过JavaScript中的翻译对象实现：

```javascript
// 设置语言示例代码
function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

// 使用HTML中的data-i18n属性
<h1 data-i18n="heroTitle">默认文本</h1>
```

## 交互组件

### 卡片画廊

卡片画廊是一个3D轮播组件，支持：

- 左右导航按钮切换
- 鼠标拖动切换
- 自动轮播
- 悬停时暂停自动轮播

关键CSS类：`.gallery-card.active`, `.gallery-card.prev`, `.gallery-card.next`

### 抽卡功能

抽卡功能模拟卡牌抽取体验，具有：

- 随机卡牌抽取
- 稀有度标记（SSR, SR, R）
- 动画效果

## 如何修改和扩展

### 添加新页面

1. 创建新的HTML文件
2. 引入main.css样式表
3. 使用与现有页面相同的头部和底部结构
4. 按需引入相应的JavaScript文件

### 添加新的样式模块

1. 在css文件夹中创建新的CSS文件
2. 将新文件添加到main.css和style.css的导入列表中
3. 在HTML中使用新样式

### 修改主题变量

在variables.css中修改`:root`和`[data-theme="dark"]`选择器中的CSS变量。

## 本地开发

该项目是纯静态网站，不需要构建步骤。可以通过以下方式运行：

1. 使用任何HTTP服务器（如Live Server）提供服务
2. 直接在浏览器中打开HTML文件

## 性能优化

- 所有CSS文件通过导入机制合并，减少HTTP请求
- 通过模块化结构实现更好的缓存控制
- 响应式图片和CSS优化移动端体验

## 兼容性

- 支持所有现代浏览器
- 通过媒体查询支持从桌面到移动设备的各种屏幕尺寸
- 使用CSS变量提供主题支持，在不支持CSS变量的旧浏览器中会回退到默认样式

---

# English Documentation

## Project Overview

Operit Web is the official website project for Operit AI, providing product information, feature showcases, and user manuals. The website adopts a modular CSS and JavaScript structure for easy maintenance and extension.

## File Structure

```
OperitWeb/
  - css/               # CSS style folder
    - main.css         # Main CSS file, imports all modular CSS
    - style.css        # Backward compatibility style file
    - variables.css    # CSS variables and theme definitions
    - base.css         # Global base styles
    - layout.css       # Layout component styles
    - components.css   # Reusable UI component styles
    - gallery.css      # Card gallery styles
    - features.css     # Feature section styles
    - manual.css       # User manual page styles
    - animations.css   # Animation keyframe definitions
    - responsive.css   # Responsive design media queries
    - guide.css        # User guide specific styles
  - images/            # Image resource folder
    - examples/        # Example images
    - logo.png         # Website logo
  - js/                # JavaScript folder
    - main.js          # Main script and global functionality
    - gallery.js       # Card gallery and card drawing functionality
    - guide.js         # User guide page script
  - manuals/           # User manual resources
    - assets/          # Manual-related image resources
  - index.html         # Website homepage
  - user-guide.html    # User manual page
  - README.md          # Project documentation
```

## CSS Architecture

The CSS files adopt a modular structure, divided into multiple files based on functionality and concerns:

1. **variables.css** - Defines CSS variables and theme configurations (light/dark themes)
2. **base.css** - Basic resets and global styles
3. **layout.css** - Page layout related styles (header, footer, main content area)
4. **components.css** - Reusable UI components (buttons, theme toggle switch, etc.)
5. **gallery.css** - Card gallery and card drawing result styles
6. **features.css** - Feature showcase section styles
7. **manual.css** - User manual page specific styles
8. **animations.css** - All animation keyframe definitions
9. **responsive.css** - Media queries for responsive layouts
10. **guide.css** - User guide page specific styles

**main.css** imports all modular CSS files and is the main style file referenced in HTML pages.
**style.css** is kept for backward compatibility and also imports all modular CSS.

## JavaScript Files

1. **main.js** - Handles core functionality:
   - Multi-language support
   - Theme switching
   - Scroll effects
   - Other global interactions

2. **gallery.js** - Handles card gallery functionality:
   - Card carousel
   - Drag interactions
   - Card drawing functionality and animations

3. **guide.js** - Handles user manual page functionality:
   - Table of contents navigation
   - Content loading
   - Page interactions

## Theme Support

The website supports light and dark themes, implemented using CSS variables. Theme switching is controlled through JavaScript and saves user preferences to localStorage.

```javascript
// Theme switching example code
themeToggleCheckbox.addEventListener('change', (e) => {
    applyTheme(e.target.checked ? 'dark' : 'light');
});

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggleCheckbox.checked = theme === 'dark';
}
```

CSS variables are defined in variables.css:

```css
:root {
    --primary-color: #2563eb;
    --background-color: #ffffff;
    --text-color: #333333;
    /* Other variables... */
}

[data-theme="dark"] {
    --primary-color: #60a5fa;
    --background-color: #1f2937;
    --text-color: #e5e7eb;
    /* Other variables... */
}
```

## Internationalization Support

The website supports Chinese and English languages, implemented through translation objects in JavaScript:

```javascript
// Language setting example code
function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

// Using data-i18n attribute in HTML
<h1 data-i18n="heroTitle">Default text</h1>
```

## Interactive Components

### Card Gallery

The card gallery is a 3D carousel component that supports:

- Left/right navigation button switching
- Mouse drag switching
- Automatic rotation
- Pause on hover

Key CSS classes: `.gallery-card.active`, `.gallery-card.prev`, `.gallery-card.next`

### Card Drawing Feature

The card drawing feature simulates a card drawing experience with:

- Random card selection
- Rarity markings (SSR, SR, R)
- Animation effects

## How to Modify and Extend

### Adding New Pages

1. Create a new HTML file
2. Include the main.css stylesheet
3. Use the same header and footer structure as existing pages
4. Include relevant JavaScript files as needed

### Adding New Style Modules

1. Create a new CSS file in the css folder
2. Add the new file to the import list in main.css and style.css
3. Use the new styles in HTML

### Modifying Theme Variables

Modify CSS variables in the `:root` and `[data-theme="dark"]` selectors in variables.css.

## Local Development

This project is a pure static website with no build steps required. It can be run by:

1. Using any HTTP server (like Live Server) to serve it
2. Opening the HTML files directly in a browser

## Performance Optimization

- All CSS files are combined through the import mechanism, reducing HTTP requests
- Modular structure enables better cache control
- Responsive images and CSS optimize the mobile experience

## Compatibility

- Supports all modern browsers
- Supports various screen sizes from desktop to mobile devices through media queries
- Uses CSS variables for theme support, with fallback to default styles in older browsers that don't support CSS variables 
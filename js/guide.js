document.addEventListener('DOMContentLoaded', function() {
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

    // 获取内容容器
    const contentDiv = document.getElementById('content');
    if (!contentDiv) return;
    
    // 目录切换功能
    const tocToggleBtn = document.getElementById('toc-toggle');
    const guideSidebar = document.querySelector('.guide-sidebar');
    const tocContent = document.querySelector('.toc-content');
    const guideContainer = document.querySelector('.guide-container');
    
    // 移动端目录功能
    const mobileTocButton = document.querySelector('.mobile-toc-button');
    const mobileTocMenu = document.querySelector('.mobile-toc-menu');
    const mobileTocClose = document.querySelector('.mobile-toc-close');
    const overlay = document.querySelector('.overlay');
    const mobileTocLinks = document.querySelectorAll('.mobile-toc-list a');
    
    // 初始化移动端目录功能
    if (mobileTocButton && mobileTocMenu && mobileTocClose && overlay) {
        // 打开目录
        mobileTocButton.addEventListener('click', function() {
            mobileTocMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // 防止背景滚动
        });
        
        // 关闭目录
        mobileTocClose.addEventListener('click', function() {
            mobileTocMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = ''; // 恢复背景滚动
        });
        
        // 点击遮罩层关闭目录
        overlay.addEventListener('click', function() {
            mobileTocMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = ''; // 恢复背景滚动
        });
        
        // 点击目录链接后关闭目录
        mobileTocLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileTocMenu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = ''; // 恢复背景滚动
            });
        });
    }
    
    if (tocToggleBtn && guideSidebar && guideContainer) {
        // 检查localStorage中是否有保存的状态
        const tocCollapsed = localStorage.getItem('tocCollapsed') === 'true';
        if (tocCollapsed) {
            guideSidebar.classList.add('collapsed');
            guideContainer.classList.add('toc-collapsed');
        }
        
        // 处理移动端和桌面端的目录切换
        tocToggleBtn.addEventListener('click', function() {
            // 处理移动端
            if (window.innerWidth <= 768) {
                guideSidebar.classList.toggle('mobile-open');
                tocContent.classList.toggle('mobile-open');
                
                // 切换图标
                const toggleIcon = this.querySelector('.toggle-icon');
                if (toggleIcon) {
                    toggleIcon.textContent = guideSidebar.classList.contains('mobile-open') ? '✕' : '☰';
                }
            } 
            // 处理桌面端
            else {
                guideSidebar.classList.toggle('collapsed');
                guideContainer.classList.toggle('toc-collapsed');
                
                // 保存状态到localStorage
                const isCollapsed = guideSidebar.classList.contains('collapsed');
                localStorage.setItem('tocCollapsed', isCollapsed.toString());
            }
        });
        
        // 点击目录链接后关闭目录（移动端）
        const tocLinks = tocContent.querySelectorAll('a');
        tocLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    guideSidebar.classList.remove('mobile-open');
                    tocContent.classList.remove('mobile-open');
                    
                    // 重置图标
                    const toggleIcon = tocToggleBtn.querySelector('.toggle-icon');
                    if (toggleIcon) {
                        toggleIcon.textContent = '☰';
                    }
                }
            });
        });
    }
            
            // 用户手册的Markdown内容
            const guideContent = `
# Operit AI 用户指南

<p align="center">
  <strong>从这里开始，你将看到无数用户的创造力。</strong><br>
  <strong>从这里开始，你将展示你的创造力！</strong>
</p>

---

<h2 id="section-1">✨ 简介</h2>

欢迎使用 **Operit AI**！本指南旨在帮助您快速上手，并充分利用 Operit AI 的强大功能，将您的手机变成一个真正的智能助手。

>*此文档最新更新：2025/6/17*

<h2 id="section-2">🗺️ 基本流程讲解</h2>

<h3 id="section-2-1">初次使用/试用</h3>

初次使用 Operit AI 时，您需要进行简单的设置以授予应用必要权限，从而解锁全部功能。以下是详细步骤：
 >演示版本\`1.1.5\`，之后的版本将在右上角加入 '跳过'

<table style="width: 100%;">
  <thead>
    <tr>
      <th style="width: 25%; text-align: left;">步骤 (Step)</th>
      <th style="width: 45%; text-align: left;">说明与操作 (Explanation & Action)</th>
      <th style="width: 30%; text-align: left;">截图 (Screenshot)</th>
    </tr>
  </thead>
  <tbody>
    <tr id="step-1">
      <td style="vertical-align: top;"><strong>步骤一：阅读我们的协议</strong></td>
      <td style="vertical-align: top; padding-right: 15px;">
        <em>在此声明，数据只在本地和您所提供的API平台之间流动，我们并没有任何服务器</em>
      </td>
      <td style="vertical-align: top;">
        <a href="manuals/assets/user_step/step_for_frist_1.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/user_step/step_for_frist_1.jpg" alt="用户协议及隐私政策" height="280">
        </a>
      </td>
    </tr>
    <tr id="step-2">
      <td style="vertical-align: top;"><strong>步骤二：在系统设置中找到并启用 Operit AI</strong></td>
      <td style="vertical-align: top; padding-right: 15px;">
        您可以直接跳转至设置相关页面，也可能需要在"已安装的应用"列表中，找到 Operit AI 并点击进入。<br>
        <em>在设置列表中找到"Operit AI"，点击以进行下一步配置。</em>
        <blockquote><code>1.1.6</code>以后的版本可以跳过引导</blockquote>
        <blockquote>如果你卡在这里无法授权某些权限，请退出软件并熄屏重试，来跳过引导。因为这个引导仅在第一次进入时有效。</blockquote>
      </td>
      <td style="vertical-align: top;">
        <a href="manuals/assets/user_step/step_for_frist_2.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/user_step/step_for_frist_2.jpg" alt="权限引导" height="280">
        </a>
      </td>
    </tr>
    <tr id="step-3">
      <td style="vertical-align: top;"><strong>步骤三：设置用户偏好</strong></td>
      <td style="vertical-align: top; padding-right: 15px;">
        在第一次我们会建议您去设置，这将会决定AI眼中的你是什么样的。
        <blockquote>后续可通过<code>设置>用户偏好设置</code>进行更改，支持自定义</blockquote>
        <em>打开"使用 Operit AI"的开关，并在系统弹出的确认窗口中点击"允许"。这是安全警告，Operit AI 会妥善使用此权限。</em>
      </td>
      <td style="vertical-align: top;">
        <a href="manuals/assets/user_step/step_for_frist_3.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/user_step/step_for_frist_3.jpg" alt="偏好配置" height="280">
        </a>
      </td>
    </tr>
    <tr id="step-4">
      <td style="vertical-align: top;"><strong>步骤四：配置自己的API</strong></td>
      <td style="vertical-align: top; padding-right: 15px;">
        完成配置后，您就可以返回 Operit AI，开始您的智能助手之旅了！当然您也可以通过使用作者默认API来获得一次完整的体验（每天）。<br>
        <em>配置API后开始使用即可。</em>
        <blockquote>AI的API和模型可在<code>设置>AI模型配置>模型与参数配置/功能模型配置</code>中更改</blockquote>
        <blockquote>模型提示词可在<code>设置>个性化>模型提示词设置</code>处更改，一些模型参数的设置也在这</blockquote>
      </td>
      <td style="vertical-align: top;">
        <a href="manuals/assets/user_step/step_for_frist_4.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/user_step/step_for_frist_4.jpg" alt="配置API后开始使用" height="280">
        </a>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="section-2-2">如何打包AI写好的WEB应用</h3>
<em>以下步骤将演示如何打包由AI完成开发的Web应用。（图片可点击放大）</em>
<br>
<table style="width: 100%;">
  <tbody>
    <tr>
      <td style="text-align: center; padding: 8px; width: 50%;">步骤一：进入打包页面</td>
      <td style="text-align: center; padding: 8px; width: 50%;">步骤二：开始打包</td>
    </tr>
    <tr>
      <td style="text-align: center; padding: 8px; vertical-align: top;">
        <a href="manuals/assets/teach_step/1-1.png" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/teach_step/1-1.png" alt="进入打包" style="max-height: 280px; max-width: 100%; height: auto;">
        </a>
      </td>
      <td style="text-align: center; padding: 8px; vertical-align: top;">
        <a href="manuals/assets/teach_step/1-2.png" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/teach_step/1-2.png" alt="开始打包" style="max-height: 280px; max-width: 100%; height: auto;">
        </a>
      </td>
    </tr>
    <tr>
      <td style="text-align: center; padding: 8px;">步骤三：设置应用信息</td>
      <td style="text-align: center; padding: 8px;">步骤四：下载或分享</td>
    </tr>
    <tr>
      <td style="text-align: center; padding: 8px; vertical-align: top;">
        <a href="manuals/assets/teach_step/1-3.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/teach_step/1-3.jpg" alt="设置信息" style="max-height: 280px; max-width: 100%; height: auto;">
        </a>
      </td>
      <td style="text-align: center; padding: 8px; vertical-align: top;">
        <a href="manuals/assets/teach_step/1-4.jpg" target="_blank" rel="noopener noreferrer">
         <img src="manuals/assets/teach_step/1-4.jpg" alt="下载分享" style="max-height: 280px; max-width: 100%; height: auto;">
        </a>
      </td>
    </tr>
  </tbody>
</table>
<br>

<h3 id="section-2-3">如何配置自己的API/其他模型</h3>

<h4 id="section-2-3-1">配置自己的DeepSeek API</h4>
<em>按照以下步骤，您可以轻松配置好DeepSeek的API，以便在Operit AI中使用。</em>
<p>如果您想配置自己的API（而非使用应用内提供的默认接口），可以参照以下流程：</p>

<table style="width: 100%;">
  <tbody>
    <tr>
      <td colspan="3" style="padding-bottom: 8px;">
        <h5>步骤一：登录/注册 DeepSeek 开放平台</h5>
        <p>首先，您需要访问 DeepSeek 开放平台 并登录您的账户。我们已在软件内部嵌入了deepseek开放平台。如果您是第一次使用，需要先完成注册。</p>
      </td>
    </tr>
    <tr>
      <td style="text-align: center; padding: 8px; vertical-align: top; width: 33%;"><a href="manuals/assets/deepseek_API_step/1.png" target="_blank" rel="noopener noreferrer"><img src="manuals/assets/deepseek_API_step/1.png" alt="DeepSeek 官网" style="max-height: 200px; height: auto; border: 1px solid #ddd; border-radius: 4px;"></a></td>
      <td style="text-align: center; padding: 8px; vertical-align: top; width: 33%;"><a href="manuals/assets/deepseek_API_step/2.png" target="_blank" rel="noopener noreferrer"><img src="manuals/assets/deepseek_API_step/2.png" alt="登录页面" style="max-height: 200px; height: auto; border: 1px solid #ddd; border-radius: 4px;"></a></td>
      <td style="text-align: center; padding: 8px; vertical-align: top; width: 33%;"><a href="manuals/assets/deepseek_API_step/3.png" target="_blank" rel="noopener noreferrer"><img src="manuals/assets/deepseek_API_step/3.png" alt="控制台" style="max-height: 200px; height: auto; border: 1px solid #ddd; border-radius: 4px;"></a></td>
    </tr>
    <tr>
      <td style="vertical-align: top; padding: 8px; width: 33%;">
        <h5>步骤二：充值以获取额度</h5>
        <p>API的调用需要消耗账户额度。您可以根据图五的指引完成充值。即便只是少量充值（例如1元），也足以让您长时间体验V3模型。</p>
      </td>
      <td style="vertical-align: top; padding: 8px; width: 33%;">
        <h5>步骤三：创建并复制API密钥</h5>
        <p>充值成功后，请点击左侧的"创建API"按钮。<strong>请注意：密钥仅在创建时完整显示一次，请务必立即复制并妥善保管。</strong></p>
      </td>
      <td style="vertical-align: top; padding: 8px; width: 33%;">
        <h5>步骤四：在Operit AI中配置密钥</h5>
        <p>创建并复制密钥后，返回Operit AI应用。您可以直接在配置页面输入您的API密钥。</p>
      </td>
    </tr>
    <tr>
      <td style="text-align: center; padding: 8px; vertical-align: top;">
        <a href="manuals/assets/deepseek_API_step/4.png" target="_blank" rel="noopener noreferrer"><img src="manuals/assets/deepseek_API_step/4.png" alt="API密钥页面" style="max-height: 200px; height: auto; border: 1px solid #ddd; border-radius: 4px;"></a>
      </td>
      <td style="text-align: center; padding: 8px; vertical-align: top;">
        <a href="manuals/assets/deepseek_API_step/5.png" target="_blank" rel="noopener noreferrer"><img src="manuals/assets/deepseek_API_step/5.png" alt="创建密钥" style="max-height: 200px; height: auto; border: 1px solid #ddd; border-radius: 4px;"></a>
      </td>
      <td style="text-align: center; padding: 8px; vertical-align: top;">
        <a href="manuals/assets/deepseek_API_step/9.png" target="_blank" rel="noopener noreferrer"><img src="manuals/assets/deepseek_API_step/9.png" alt="在App中配置" style="max-height: 200px; height: auto; border: 1px solid #ddd; border-radius: 4px;"></a>
      </td>
    </tr>
  </tbody>
</table>

<p>我们支持包括gemini在内的大多数模型。如果还有更新的模型我们没有支持，请提醒我们！</p>

<h4 id="section-2-3-2">切换其他AI模型</h4>
<p>您可以按照以下步骤切换和配置您想使用的AI模型：</p>
<table style="width: 100%;">
  <tbody>
    <tr>
      <td style="text-align: center; padding: 8px; width: 50%;">步骤一：进入设置</td>
      <td style="text-align: center; padding: 8px; width: 50%;">步骤二：选择AI模型配置</td>
    </tr>
    <tr>
      <td style="text-align: center; padding: 8px; vertical-align: top;">
        <a href="manuals/assets/model/1.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/model/1.jpg" alt="步骤一" style="height: 280px; width: auto; max-width: 100%;">
        </a>
      </td>
      <td style="text-align: center; padding: 8px; vertical-align: top;">
        <a href="manuals/assets/model/2.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/model/2.jpg" alt="步骤二" style="height: 280px; width: auto; max-width: 100%;">
        </a>
      </td>
    </tr>
    <tr>
      <td style="text-align: center; padding: 8px;">步骤三：模型与参数配置</td>
      <td style="text-align: center; padding: 8px;">步骤四：选择你的模型</td>
    </tr>
    <tr>
      <td style="text-align: center; padding: 8px; vertical-align: top;">
        <a href="manuals/assets/model/3.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/model/3.jpg" alt="步骤三" style="height: 280px; width: auto; max-width: 100%;">
        </a>
      </td>
      <td style="text-align: center; padding: 8px; vertical-align: top;">
         <a href="manuals/assets/model/4.jpg" target="_blank" rel="noopener noreferrer">
           <img src="manuals/assets/model/4.jpg" alt="步骤四" style="height: 280px; width: auto; max-width: 100%;">
         </a>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="section-2-4">Shizuku授权流程</h3>

<p>完成shizuku的配置后，内置包（除<code>coderunner</code>）就都可以用了。</p>

<h3 id="section-2-5">包管理与MCP使用说明</h3>
<p>内置包（除<code>coderunner</code>外）开箱即用。其余拓展包与MCP依赖Termux环境，使用前请确保Termux已在后台运行。</p>

<h4 id="section-2-5-1">包管理启用过程</h4>

<table style="width: 100%; border-collapse: separate; border-spacing: 0 1em;">
    <thead>
      <tr>
       <th style="text-align: center; padding: 8px;">步骤一：进入包管理</th>
        <th style="text-align: center; padding: 8px;">步骤二：启用所需拓展包</th>
      </tr>
     <p>内置包（除<code>coderunner</code>外）开箱即用。其余拓展包与MCP依赖Termux环境，使用前请确保Termux已在后台运行。</p>
    </thead>
    <tbody>
      <tr>
       <td style="text-align: center; padding: 8px; vertical-align: top;">
          <a href="manuals/assets/package_or_MCP/1.jpg" target="_blank" rel="noopener noreferrer"><img src="manuals/assets/package_or_MCP/1.jpg" alt="启用包管理1" style="height: 280px; width: auto; max-width: 100%;"></a>
       </td>
       <td style="text-align: center; padding: 8px; vertical-align: top;">
          <a href="manuals/assets/package_or_MCP/2.jpg" target="_blank" rel="noopener noreferrer"><img src="manuals/assets/package_or_MCP/2.jpg" alt="启用包管理2" style="height: 280px; width: auto; max-width: 100%;"></a>
       </td>
     </tr>
   </tbody>
</table>

<h4 id="section-2-5-2">一键快捷配置环境</h4>
<table border="0" style="width:100%; border-collapse: collapse; text-align: center;">
  <tr style="vertical-align: top;">
    <td style="padding: 5px; width: 33%;">
      <strong>步骤一：进入工具箱</strong><br>
      在主界面或设置中找到"工具箱"入口并点击进入。
    </td>
    <td style="padding: 5px; width: 33%;">
      <strong>步骤二：选择终端自动配置</strong><br>
      在工具箱中，找到并选择"终端自动配置"功能，以开始自动化环境设置。
    </td>
    <td style="padding: 5px; width: 33%;">
      <strong>步骤三：开始配置</strong><br>
      点击"开始配置"按钮，系统将自动完成所需环境的安装和配置。
    </td>
  </tr>
  <tr>
    <td style="padding: 5px;">
      <a href="manuals/assets/package_or_MCP/3.jpg" target="_blank" rel="noopener noreferrer">
        <img src="manuals/assets/package_or_MCP/3.jpg" alt="配置环境1" style="width: 100%; max-width: 200px; height: auto;">
      </a>
    </td>
    <td style="padding: 5px;">
      <a href="manuals/assets/package_or_MCP/4.jpg" target="_blank" rel="noopener noreferrer">
        <img src="manuals/assets/package_or_MCP/4.jpg" alt="配置环境2" style="width: 100%; max-width: 200px; height: auto;">
      </a>
    </td>
    <td style="padding: 5px;">
      <a href="manuals/assets/package_or_MCP/5.jpg" target="_blank" rel="noopener noreferrer">
        <img src="manuals/assets/package_or_MCP/5.jpg" alt="配置环境3" style="width: 100%; max-width: 200px; height: auto;">
      </a>
    </td>
  </tr>
</table>
`;

            // 将内容渲染到页面
            contentDiv.innerHTML = marked.parse(guideContent);
            
            // 添加拓展用法实操部分
            const extensionContent = `
<h2 id="section-3">🚀 拓展用法实操</h2>

<p><em>(本部分将通过实际案例，向您展示如何利用拓展包、计划模式等高级功能，完成更复杂的任务。)</em></p>

<h3 id="section-3-1">🧰 开箱即用</h3>
<p><em>这部分为<strong>内置包</strong></em>
<br>
当你让AI写软件，软件的性能取决于AI的能力。示例中的模型为<code>Deepseel-R1</code>模型</p>

<table style="width: 100%;">
  <thead>
    <tr>
      <th style="width: 20%; text-align: left;">示例 (Example)</th>
      <th style="width: 30%; text-align: left;">说明 (Description)</th>
      <th style="width: 50%; text-align: left;">预览 (Preview)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="vertical-align: top;"><strong>写一个2D弹幕游戏</strong></td>
      <td style="vertical-align: top;">
        通过简单的对话，让AI为您构思并实现一个经典的2D弹幕射击游戏。Operit AI能够调用其基础代码能力，仅使用HTML和JavaScript，从零开始构建出完整的游戏逻辑与动态画面。
      </td>
      <td style="vertical-align: top; text-align: center;">
        <a href="manuals/assets/game_maker_chat.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/game_maker_chat.jpg" alt="2D弹幕游戏聊天" style="width: 100%; height: auto; margin-bottom: 5px;">
        </a>
        <a href="manuals/assets/game_maker_show.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/game_maker_show.jpg" alt="2D弹幕游戏展示" style="width: 100%; height: auto;">
        </a>
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><strong>用HTML代码写一个3D游戏</strong></td>
      <td style="vertical-align: top;">
        无需任何拓展包，Operit AI 仅通过内置的核心工具，就可以直接用HTML和JavaScript代码，为您呈现一个动态的3D游戏场景。
      </td>
      <td style="vertical-align: top; text-align: center;">
        <a href="manuals/assets/expamle/3ddebdde4958ac152eeca436e39c0f6.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/expamle/3ddebdde4958ac152eeca436e39c0f6.jpg" alt="3D游戏示例1" style="width: 100%; height: auto; margin-bottom: 5px;">
        </a>
        <a href="manuals/assets/expamle/759d86a7d74351675b32acb6464585d.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/expamle/759d86a7d74351675b32acb6464585d.jpg" alt="3D游戏示例2" style="width: 100%; height: auto;">
        </a>
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><strong>简单的视频处理</strong></td>
      <td style="vertical-align: top;">
        同样地，应用内置了强大的FFmpeg工具，无需额外安装，即可让AI帮您完成视频格式转换、截取、合并等多种处理任务。
      </td>
      <td style="vertical-align: top; text-align: center;">
        <a href="manuals/assets/d7580a42ae03c723121bd172e1f9e7d.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/d7580a42ae03c723121bd172e1f9e7d.jpg" alt="简单的视频处理示例" style="width: 100%; height: auto;">
        </a>
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><strong>软件打包与部署</strong></td>
      <td style="vertical-align: top;">
        从编写代码到最终发布，Operit AI 可以进一步调用平台工具，将完成的软件打包成适用于安卓（APK）或Windows（EXE）的可执行文件，实现端到端的自动化开发流程。
      </td>
      <td style="vertical-align: top; text-align: center;">
        <a href="manuals/assets/web_developer.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/web_developer.jpg" alt="软件打包示例1" style="width: 100%; height: auto; margin-bottom: 5px;">
        </a>
        <a href="manuals/assets/game_maker_packer.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/game_maker_packer.jpg" alt="软件打包示例2" style="width: 100%; height: auto;">
        </a>
      </td>
    </tr>
  </tbody>
</table>
`;
            contentDiv.innerHTML += marked.parse(extensionContent);
            
            // 添加拓展包部分
            const packagesContent = `
<h3 id="section-3-2">📦 拓展包</h3>

<p>演示版本<code>1.1.6</code>（图片可点击放大）</p>

<table style="width: 100%;">
  <thead>
    <tr>
      <th style="width: 20%; text-align: left;">拓展包 (Package)</th>
      <th style="width: 30%; text-align: left;">功能说明 (Description)</th>
      <th style="width: 50%; text-align: left;">预览 (Preview)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="vertical-align: top;"><code>writer</code></td>
      <td style="vertical-align: top;">
        高级文件编辑和读取功能，支持分段编辑、差异编辑、行号编辑以及高级文件读取操作
      </td>
      <td style="vertical-align: top; text-align: center;">
        <a href="manuals/assets/expamle/065e5ca8a8036c51a7905d206bbb56c.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/expamle/065e5ca8a8036c51a7905d206bbb56c.jpg" alt="writer示例" style="width: 100%; height: auto;">
        </a>
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><code>various_search</code></td>
      <td style="vertical-align: top;">
        多平台搜索功能，支持从必应、百度、搜狗、夸克等平台获取搜索结果
      </td>
      <td style="vertical-align: top; text-align: center;">
        <a href="manuals/assets/expamle/90a1778510df485d788b80d4bc349f9.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/expamle/90a1778510df485d788b80d4bc349f9.jpg" alt="多平台搜索示例1" style="width: 100%; height: auto; margin-bottom: 5px;">
        </a>
        <a href="manuals/assets/expamle/f9b8aeba4878775d1252ad8d5d8620a.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/expamle/f9b8aeba4878775d1252ad8d5d8620a.jpg" alt="多平台搜索示例2" style="width: 100%; height: auto;">
        </a>
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><code>daily_life</code></td>
      <td style="vertical-align: top;">
        日常生活工具集合，包括日期时间查询、设备状态监测、天气搜索、提醒闹钟设置、短信电话通讯等
      </td>
      <td style="vertical-align: top; text-align: center;">
        <a href="manuals/assets/expamle/615cf7a99e421356b6d22bb0b9cc87b.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/expamle/615cf7a99e421356b6d22bb0b9cc87b.jpg" alt="日常生活示例" style="width: 100%; height: auto;">
        </a>
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><code>super_admin</code></td>
      <td style="vertical-align: top;">
        超级管理员工具集，提供终端命令和Shell操作的高级功能
      </td>
      <td style="vertical-align: top; text-align: center;">
        <a href="manuals/assets/expamle/731f67e3d7494886c1c1f8639216bf2.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/expamle/731f67e3d7494886c1c1f8639216bf2.jpg" alt="超级管理员示例1" style="width: 100%; height: auto; margin-bottom: 5px;">
        </a>
        <a href="manuals/assets/expamle/6f81901ae47f5a3584167148017d132.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/expamle/6f81901ae47f5a3584167148017d132.jpg" alt="超级管理员示例2" style="width: 100%; height: auto;">
        </a>
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><code>code_runner</code></td>
      <td style="vertical-align: top;" colspan="2">多语言代码执行能力，支持JavaScript、Python、Ruby、Go和Rust脚本的运行<br><em>你可以在<code>工具箱>终端自动配置</code>中完成以上环境的配置</em></td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><code>baidu_map</code></td>
      <td style="vertical-align: top;">
        百度地图相关功能
      </td>
      <td style="vertical-align: top; text-align: center;">
        <a href="manuals/assets/expamle/71fd917c5310c1cebaa1abb19882a6d.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/expamle/71fd917c5310c1cebaa1abb19882a6d.jpg" alt="百度地图示例" style="width: 100%; height: auto;">
        </a>
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><code>qq_intelligent</code></td>
      <td style="vertical-align: top;" colspan="2">QQ智能助手，通过UI自动化技术实现QQ应用交互</td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><code>time</code></td>
      <td style="vertical-align: top;" colspan="2">提供时间相关功能</td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><code>various_output</code></td>
      <td style="vertical-align: top;">
        提供图片输出功能
      </td>
      <td style="vertical-align: top; text-align: center;">
        <a href="manuals/assets/expamle/5fff4b49db78ec01e189658de8ea997.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/expamle/5fff4b49db78ec01e189658de8ea997.jpg" alt="图片输出示例" style="width: 100%; height: auto;">
        </a>
      </td>
    </tr>
  </tbody>
</table>
`;
            contentDiv.innerHTML += marked.parse(packagesContent);
            
            // 添加核心工具部分
            const toolsContent = `
<h3 id="section-3-3">🛠️ 核心工具</h3>

<table style="width: 100%;">
  <thead>
    <tr>
      <th style="width: 30%; text-align: left;">工具 (Tool)</th>
      <th style="width: 70%; text-align: left;">功能说明 (Description)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><code>sleep</code></td><td>短暂暂停执行</td></tr>
    <tr><td><code>device_info</code></td><td>获取设备详细信息</td></tr>
    <tr><td><code>use_package</code></td><td>激活扩展包</td></tr>
    <tr><td><code>query_problem_library</code></td><td>查询问题库</td></tr>
    <tr><td><code>list_files</code></td><td>列出目录中的文件</td></tr>
    <tr><td><code>read_file</code></td><td>读取文件内容</td></tr>
    <tr><td><code>write_file</code></td><td>写入内容到文件</td></tr>
    <tr><td><code>delete_file</code></td><td>删除文件或目录</td></tr>
    <tr><td><code>file_exists</code></td><td>检查文件是否存在</td></tr>
    <tr><td><code>move_file</code></td><td>移动或重命名文件</td></tr>
    <tr><td><code>copy_file</code></td><td>复制文件或目录</td></tr>
    <tr><td><code>make_directory</code></td><td>创建目录</td></tr>
    <tr><td><code>find_files</code></td><td>搜索匹配文件</td></tr>
    <tr><td><code>zip_files/unzip_files</code></td><td>压缩/解压文件</td></tr>
    <tr><td><code>download_file</code></td><td>从网络下载文件</td></tr>
    <tr><td><code>http_request</code></td><td>发送HTTP请求</td></tr>
    <tr><td><code>multipart_request</code></td><td>上传文件</td></tr>
    <tr><td><code>manage_cookies</code></td><td>管理cookies</td></tr>
    <tr><td><code>visit_web</code></td><td>访问并提取网页内容</td></tr>
    <tr><td><code>get_system_setting</code></td><td>获取系统设置</td></tr>
    <tr><td><code>modify_system_setting</code></td><td>修改系统设置</td></tr>
    <tr><td><code>install_app/uninstall_app</code></td><td>安装/卸载应用</td></tr>
    <tr><td><code>start_app/stop_app</code></td><td>启动/停止应用</td></tr>
    <tr><td><code>get_notifications</code></td><td>获取设备通知</td></tr>
    <tr><td><code>get_device_location</code></td><td>获取设备位置</td></tr>
    <tr><td><code>get_page_info</code></td><td>获取UI屏幕信息</td></tr>
    <tr><td><code>tap</code></td><td>模拟点击坐标</td></tr>
    <tr><td><code>click_element</code></td><td>点击UI元素</td></tr>
    <tr><td><code>set_input_text</code></td><td>设置输入文本</td></tr>
    <tr><td><code>press_key</code></td><td>模拟按键</td></tr>
    <tr><td><code>swipe</code></td><td>模拟滑动手势</td></tr>
    <tr><td><code>find_element</code></td><td>查找UI元素</td></tr>
    <tr><td><code>ffmpeg_execute</code></td><td>执行FFmpeg命令</td></tr>
    <tr><td><code>ffmpeg_info</code></td><td>获取FFmpeg信息</td></tr>
    <tr><td><code>ffmpeg_convert</code></td><td>转换视频文件</td></tr>
  </tbody>
</table>
`;
            contentDiv.innerHTML += marked.parse(toolsContent);

            // 添加MCP市场部分
            const mcpContent = `
<h3 id="section-3-4">🛒 MCP市场</h3>

<p>考虑到手机环境的特殊性，要完整、稳定地配置所有MCP（Model context protocol）所需的环境是相当有挑战性的。因此，直接调用MCP可能会遇到较多困难。</p>
<p>目前，应用内确认可用的MCP主要有 <code>12306</code>。</p>
<p>为了提供更流畅、更可靠的体验，我们已经用更适配安卓系统的方式，将许多核心MCP的功能重制并整合到了内置工具和拓展包中。我们强烈建议您优先使用这些经过优化的功能。</p>

<p>下面是一些目前社区测试可用的MCP：(等待测试人员更新)</p>

<p>（图片可点击放大）</p>

<table style="width: 100%;">
  <thead>
    <tr>
      <th style="width: 25%; text-align: left;">MCP (Package)</th>
      <th style="width: 50%; text-align: left;">功能说明 (Description)</th>
      <th style="width: 25%; text-align: left;">预览 (Preview)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="vertical-align: top;"><code>tavily</code></td>
      <td style="vertical-align: top;">
        Tavily 搜索工具，提供强大的网络搜索能力，可用于研究和信息获取。
      </td>
      <td style="vertical-align: top; text-align: right;">
        <a href="manuals/assets/ee852df3c187771fba0aa92b36a57f8.jpg" target="_blank" rel="noopener noreferrer">
          <img src="manuals/assets/ee852df3c187771fba0aa92b36a57f8.jpg" alt="Tavily搜索示例" height="280">
        </a>
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><code>12306</code></td>
      <td style="vertical-align: top;" colspan="2">
        用于查询12306火车票信息。
      </td>
    </tr>
  </tbody>
</table>
`;
            contentDiv.innerHTML += marked.parse(mcpContent);
            
            // 添加加入我们部分
            const joinUsContent = `
<h2 id="section-5">🎉 加入我们</h2>

<p>我们诚挚地邀请您加入我们的社区，与其他用户交流心得，分享您的创意，或向我们提出宝贵的建议。</p>

<div style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 12px; padding: 16px; margin-top: 1.5em; max-width: 400px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <div style="font-size: 1.1em; font-weight: 600; color: #495057; margin-bottom: 12px;">联系我们</div>
  <div style="display: flex; justify-content: space-between; align-items: center; gap: 15px; margin-bottom: 10px;">
    <span style="font-weight: bold;">GitHub：</span>
    <a href="https://github.com/AAswordman/Operit" target="_blank" style="font-family: 'Courier New', Courier, monospace; color: #007bff; word-break: break-all;">AAswordman/Operit</a>
  </div>
  <div style="margin-top: 15px; font-size: 0.9em; color: #6c757d;">
    <p>我们欢迎您通过GitHub：</p>
    <ul style="padding-left: 20px; margin-top: 8px;">
      <li>提交您使用Operit AI创造的作品</li>
      <li>分享您的创新想法和使用场景</li>
      <li>报告您遇到的问题或提出改进建议</li>
      <li>投稿您的创意和脑洞，一起让Operit变得更强大</li>
    </ul>
  </div>
</div>
`;
            contentDiv.innerHTML += marked.parse(joinUsContent);
            
            // 添加额外的内容（节4-7）
            const additionalContent = `
<h2 id="section-4">❔ 常见问题解答</h2>

<p>这里收录了<strong>最新版本 \`1.1.6\`</strong> 用户群和 issue 的全部问题。
如果您使用的是旧版本，可以来<a href="#section-7">这里找找</a>。</p>

<h3 id="section-4-1">MCP包问题排查</h3>

<p><strong>MCP包不加载问题可能原因</strong></p>
<ul>
<li><strong>Shizuku未正确配置</strong>：请参照<a href="#section-2-4">Shizuku授权流程</a>完成配置。</li>
<li><strong>Termux未正确配置</strong>：请参照<a href="#section-2-5">包管理与MCP使用说明</a>完成配置。</li>
<li><strong>Termux未挂在后台</strong>：在启动软件前，请务必先打开Termux并保持其在后台运行。</li>
</ul>

<p><strong>MCP运行失败原因</strong></p>
<ul>
<li><strong>环境配置问题</strong>：部分MCP插件对运行环境有特殊要求。您需要访问相应插件的GitHub开源地址，根据其文档完成环境配置。关于配置的更多信息，请参考<a href="#section-3-4">MCP市场</a>章节的详细说明。</li>
<li><strong>版本兼容性问题</strong>：更早版本中存在的问题大多已在后续更新中得到解决。我们强烈建议您下载并安装最新版本以获取最佳体验。</li>
</ul>

<p>您可以从<a href="https://github.com/AAswordman/Operit/releases">Release页面</a>下载最新APK。</p>

<h2 id="section-6">💡 许愿池</h2>

<p>以下是我们正在计划或正在开发中的功能：</p>

<ul>
<li><strong>核心功能增强</strong>:
<ul>
<li>加入TTS（文字转语音）和语音识别模型，并进一步实现更自然的对话系统。</li>
<li>实现全新的 \`任务模式\` 来替代现有的 \`计划模式\`，让AI可以主动、智能地执行和跟进长期任务。</li>
</ul>
</li>
<li><strong>用户体验优化</strong>:
<ul>
<li>实现一个更美观、更现代、更友好的交互界面。</li>
<li>支持多语言，让全球用户都能无障碍使用。</li>
</ul>
</li>
<li><strong>社区与生态</strong>:
<ul>
<li>我们会认真对待社区（如Issue、QQ群）中提出的每一个建议，并努力将它们变为现实。</li>
<li>推广！推广！推广！让更多人认识并使用Operit AI。</li>
</ul>
</li>
</ul>

<p>有好的想法或功能建议？您可以通过GitHub Issues提交，也可以关注我们未来的更新计划，也许您期待的功能已经在路上！</p>

<h2 id="section-7">📜 朝花夕拾 (旧版本问题解答)</h2>

<h3 id="1-1-5-版本"><code>1.1.5</code>版本</h3>

<p><em>(相关问题)</em></p>

<h3 id="1-1-3-以前"><code>1.1.3</code>以前</h3>

<p><em>(相关问题)</em></p>

<h4 id="gemini格式未做适配">Gemini格式未做适配</h4>
<p>新版本已解决，支持了更多模型</p>

<h4 id="termux">Termux</h4>

<p>##### 类型一 Termux版本不正确<br>
##### 类型二 MCP包不加载<br>
软件运行时建议将Termux挂后台</p>

<p>后续将通过内置Termux解决这类问题</p>
`;

            contentDiv.innerHTML += marked.parse(additionalContent);

            // 为TOC添加点击事件，支持平滑滚动
            document.querySelectorAll('#guide-toc-list a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
            
                    if (targetElement) {
            window.scrollTo({
                            top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
            
                        // 更新活动状态
                        document.querySelectorAll('#guide-toc-list a').forEach(a => {
                            a.classList.remove('active');
                        });
            this.classList.add('active');
                    }
        });
    });
    // 直接在页面中加载内容

    // 回到顶部按钮
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
        });
    });
    }

    // 主题切换处理
    const themeToggle = document.getElementById('theme-toggle-checkbox');
    if (themeToggle) {
        // 如果有主题切换功能，确保其正常工作
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            themeToggle.checked = savedTheme === 'dark';
        }
        
        themeToggle.addEventListener('change', function(e) {
            const theme = e.target.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    }
}); 
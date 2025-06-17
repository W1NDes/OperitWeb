document.addEventListener('DOMContentLoaded', function() {
    // 获取内容容器
    const contentDiv = document.getElementById('content');
    if (!contentDiv) return;

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

    // 将Markdown转换为HTML
    contentDiv.innerHTML = marked.parse(guideContent);

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
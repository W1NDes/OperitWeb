export const guideContent = `
# Operit AI 用户指南

<p align="center">
  <strong>从这里开始，你将看到无数用户的创造力。</strong><br>
  <strong>从这里开始，你将展示你的创造力！</strong>
</p>

---

## ✨ 简介

欢迎使用 **Operit AI**！本指南旨在帮助您快速上手，并充分利用 Operit AI 的强大功能，将您的手机变成一个真正的智能助手。

> *此文档最新更新：2025/6/17*

## 🗺️ 基本流程讲解

### 初次使用/试用

初次使用 Operit AI 时，您需要进行简单的设置以授予应用必要权限，从而解锁全部功能。以下是详细步骤：

> 演示版本 \`1.1.5\`，之后的版本将在右上角加入 '跳过'

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
        <a href="/manuals/assets/user_step/step_for_frist_1.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/user_step/step_for_frist_1.jpg" alt="用户协议及隐私政策" style="max-width: 100%; height: auto;">
        </a>
      </td>
    </tr>
    <tr id="step-2">
      <td style="vertical-align: top;"><strong>步骤二：在系统设置中找到并启用 Operit AI</strong></td>
      <td style="vertical-align: top; padding-right: 15px;">
        您可以直接跳转至设置相关页面，也可能需要在"已安装的应用"列表中，找到 Operit AI 并点击进入。<br>
        <em>在设置列表中找到"Operit AI"，点击以进行下一步配置。</em>
        <blockquote>\`1.1.6\`以后的版本可以跳过引导</blockquote>
        <blockquote>如果你卡在这里无法授权某些权限，请退出软件并熄屏重试，来跳过引导。因为这个引导仅在第一次进入时有效。</blockquote>
      </td>
      <td style="vertical-align: top;">
        <a href="/manuals/assets/user_step/step_for_frist_2.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/user_step/step_for_frist_2.jpg" alt="权限引导" style="max-width: 100%; height: auto;">
        </a>
      </td>
    </tr>
    <tr id="step-3">
      <td style="vertical-align: top;"><strong>步骤三：设置用户偏好</strong></td>
      <td style="vertical-align: top; padding-right: 15px;">
        在第一次我们会建议您去设置，这将会决定AI眼中的你是什么样的。
        <blockquote>后续可通过\`设置>用户偏好设置\`进行更改，支持自定义</blockquote>
        <em>打开"使用 Operit AI"的开关，并在系统弹出的确认窗口中点击"允许"。这是安全警告，Operit AI 会妥善使用此权限。</em>
      </td>
      <td style="vertical-align: top;">
        <a href="/manuals/assets/user_step/step_for_frist_3.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/user_step/step_for_frist_3.jpg" alt="偏好配置" style="max-width: 100%; height: auto;">
        </a>
      </td>
    </tr>
    <tr id="step-4">
      <td style="vertical-align: top;"><strong>步骤四：配置自己的API</strong></td>
      <td style="vertical-align: top; padding-right: 15px;">
        完成配置后，您就可以返回 Operit AI，开始您的智能助手之旅了！当然您也可以通过使用作者默认API来获得一次完整的体验（每天）。<br>
        <em>配置API后开始使用即可。</em>
        <blockquote>AI的API和模型可在\`设置>AI模型配置>模型与参数配置/功能模型配置\`中更改</blockquote>
        <blockquote>模型提示词可在\`设置>个性化>模型提示词设置\`处更改，一些模型参数的设置也在这</blockquote>
      </td>
      <td style="vertical-align: top;">
        <a href="/manuals/assets/user_step/step_for_frist_4.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/user_step/step_for_frist_4.jpg" alt="配置API后开始使用" style="max-width: 100%; height: auto;">
        </a>
      </td>
    </tr>
  </tbody>
</table>

### 如何打包AI写好的WEB应用
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
        <a href="/manuals/assets/teach_step/1-1.png" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/teach_step/1-1.png" alt="进入打包" style="max-width: 100%; height: auto;">
        </a>
      </td>
      <td style="text-align: center; padding: 8px; vertical-align: top;">
        <a href="/manuals/assets/teach_step/1-2.png" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/teach_step/1-2.png" alt="开始打包" style="max-width: 100%; height: auto;">
        </a>
      </td>
    </tr>
    <tr>
      <td style="text-align: center; padding: 8px;">步骤三：设置应用信息</td>
      <td style="text-align: center; padding: 8px;">步骤四：下载或分享</td>
    </tr>
    <tr>
      <td style="text-align: center; padding: 8px; vertical-align: top;">
        <a href="/manuals/assets/teach_step/1-3.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/teach_step/1-3.jpg" alt="设置信息" style="max-width: 100%; height: auto;">
        </a>
      </td>
      <td style="text-align: center; padding: 8px; vertical-align: top;">
        <a href="/manuals/assets/teach_step/1-4.jpg" target="_blank" rel="noopener noreferrer">
         <img src="/manuals/assets/teach_step/1-4.jpg" alt="下载分享" style="max-width: 100%; height: auto;">
        </a>
      </td>
    </tr>
  </tbody>
</table>
<br>

### 如何配置自己的API/其他模型

#### 配置自己的DeepSeek API
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
      <td style="text-align: center; padding: 8px; vertical-align: top; width: 33%;"><a href="/manuals/assets/deepseek_API_step/1.png" target="_blank" rel="noopener noreferrer"><img src="/manuals/assets/deepseek_API_step/1.png" alt="DeepSeek 官网" style="width: 100%; height: auto;"></a></td>
      <td style="text-align: center; padding: 8px; vertical-align: top; width: 33%;"><a href="/manuals/assets/deepseek_API_step/2.png" target="_blank" rel="noopener noreferrer"><img src="/manuals/assets/deepseek_API_step/2.png" alt="登录页面" style="width: 100%; height: auto;"></a></td>
      <td style="text-align: center; padding: 8px; vertical-align: top; width: 33%;"><a href="/manuals/assets/deepseek_API_step/3.png" target="_blank" rel="noopener noreferrer"><img src="/manuals/assets/deepseek_API_step/3.png" alt="控制台" style="width: 100%; height: auto;"></a></td>
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
        <a href="/manuals/assets/deepseek_API_step/4.png" target="_blank" rel="noopener noreferrer"><img src="/manuals/assets/deepseek_API_step/4.png" alt="API密钥页面" style="width: 100%; height: auto;"></a>
      </td>
      <td style="text-align: center; padding: 8px; vertical-align: top;">
        <a href="/manuals/assets/deepseek_API_step/5.png" target="_blank" rel="noopener noreferrer"><img src="/manuals/assets/deepseek_API_step/5.png" alt="创建密钥" style="width: 100%; height: auto;"></a>
      </td>
      <td style="text-align: center; padding: 8px; vertical-align: top;">
        <a href="/manuals/assets/deepseek_API_step/9.png" target="_blank" rel="noopener noreferrer"><img src="/manuals/assets/deepseek_API_step/9.png" alt="在App中配置" style="width: 100%; height: auto;"></a>
      </td>
    </tr>
  </tbody>
</table>

<p>我们支持包括gemini在内的大多数模型。如果还有更新的模型我们没有支持，请提醒我们！</p>

#### 切换其他AI模型
<p>您可以按照以下步骤切换和配置您想使用的AI模型：</p>
<table style="width: 100%;">
  <tbody>
    <tr>
      <td style="text-align: center; padding: 8px; width: 50%;">步骤一：进入设置</td>
      <td style="text-align: center; padding: 8px; width: 50%;">步骤二：选择AI模型配置</td>
    </tr>
    <tr>
      <td style="text-align: center; padding: 8px; vertical-align: top;">
        <a href="/manuals/assets/model/1.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/model/1.jpg" alt="步骤一" style="max-width: 100%; height: auto;">
        </a>
      </td>
      <td style="text-align: center; padding: 8px; vertical-align: top;">
        <a href="/manuals/assets/model/2.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/model/2.jpg" alt="步骤二" style="max-width: 100%; height: auto;">
        </a>
      </td>
    </tr>
    <tr>
      <td style="text-align: center; padding: 8px;">步骤三：模型与参数配置</td>
      <td style="text-align: center; padding: 8px;">步骤四：选择你的模型</td>
    </tr>
    <tr>
      <td style="text-align: center; padding: 8px; vertical-align: top;">
        <a href="/manuals/assets/model/3.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/model/3.jpg" alt="步骤三" style="max-width: 100%; height: auto;">
        </a>
      </td>
      <td style="text-align: center; padding: 8px; vertical-align: top;">
         <a href="/manuals/assets/model/4.jpg" target="_blank" rel="noopener noreferrer">
           <img src="/manuals/assets/model/4.jpg" alt="步骤四" style="max-width: 100%; height: auto;">
         </a>
      </td>
    </tr>
  </tbody>
</table>

### Shizuku授权流程

<p>完成shizuku的配置后，内置包（除\`coderunner\`）就都可以用了。</p>

### 包管理与MCP使用说明
<p>内置包（除\`coderunner\`外）开箱即用。其余拓展包与MCP依赖Termux环境，使用前请确保Termux已在后台运行。</p>

#### 包管理启用过程

<table style="width: 100%; border-collapse: separate; border-spacing: 0 1em;">
    <thead>
      <tr>
       <th style="text-align: center; padding: 8px;">步骤一：进入包管理</th>
        <th style="text-align: center; padding: 8px;">步骤二：启用所需拓展包</th>
      </tr>
    </thead>
    <tbody>
      <tr>
       <td style="text-align: center; padding: 8px; vertical-align: top;">
          <a href="/manuals/assets/package_or_MCP/1.jpg" target="_blank" rel="noopener noreferrer"><img src="/manuals/assets/package_or_MCP/1.jpg" alt="启用包管理1" style="max-width: 100%; height: auto;"></a>
       </td>
       <td style="text-align: center; padding: 8px; vertical-align: top;">
          <a href="/manuals/assets/package_or_MCP/2.jpg" target="_blank" rel="noopener noreferrer"><img src="/manuals/assets/package_or_MCP/2.jpg" alt="启用包管理2" style="max-width: 100%; height: auto;"></a>
       </td>
     </tr>
   </tbody>
</table>

#### 一键快捷配置环境
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
      <a href="/manuals/assets/package_or_MCP/3.jpg" target="_blank" rel="noopener noreferrer">
        <img src="/manuals/assets/package_or_MCP/3.jpg" alt="配置环境1" style="max-width: 100%; height: auto;">
      </a>
    </td>
    <td style="padding: 5px;">
      <a href="/manuals/assets/package_or_MCP/4.jpg" target="_blank" rel="noopener noreferrer">
        <img src="/manuals/assets/package_or_MCP/4.jpg" alt="配置环境2" style="max-width: 100%; height: auto;">
      </a>
    </td>
    <td style="padding: 5px;">
      <a href="/manuals/assets/package_or_MCP/5.jpg" target="_blank" rel="noopener noreferrer">
        <img src="/manuals/assets/package_or_MCP/5.jpg" alt="配置环境3" style="max-width: 100%; height: auto;">
      </a>
    </td>
  </tr>
</table>

## 🚀 拓展用法实操

*(本部分将通过实际案例，向您展示如何利用拓展包、计划模式等高级功能，完成更复杂的任务。)*

### 🧰 开箱即用
<em>这部分为<strong>内置包</strong></em>
<br>
当你让AI写软件，软件的性能取决于AI的能力。示例中的模型为\`Deepseek-R1\`模型

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
        <a href="/manuals/assets/game_maker_chat.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/game_maker_chat.jpg" alt="2D弹幕游戏聊天" style="width: 30%; height: auto; margin-bottom: 5px;">
        </a>
        <a href="/manuals/assets/game_maker_show.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/game_maker_show.jpg" alt="2D弹幕游戏展示" style="width: 30%; height: auto;">
        </a>
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><strong>用HTML代码写一个3D游戏</strong></td>
      <td style="vertical-align: top;">
        无需任何拓展包，Operit AI 仅通过内置的核心工具，就可以直接用HTML和JavaScript代码，为您呈现一个动态的3D游戏场景。
      </td>
      <td style="vertical-align: top; text-align: center;">
        <a href="/manuals/assets/expamle/3ddebdde4958ac152eeca436e39c0f6.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/expamle/3ddebdde4958ac152eeca436e39c0f6.jpg" alt="3D游戏示例1" style="width: 30%; height: auto; margin-bottom: 5px;">
        </a>
        <a href="/manuals/assets/expamle/759d86a7d74351675b32acb6464585d.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/expamle/759d86a7d74351675b32acb6464585d.jpg" alt="3D游戏示例2" style="width: 30%; height: auto;">
        </a>
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><strong>简单的视频处理</strong></td>
      <td style="vertical-align: top;">
        同样地，应用内置了强大的FFmpeg工具，无需额外安装，即可让AI帮您完成视频格式转换、截取、合并等多种处理任务。
      </td>
      <td style="vertical-align: top; text-align: center;">
        <a href="/manuals/assets/d7580a42ae03c723121bd172e1f9e7d.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/d7580a42ae03c723121bd172e1f9e7d.jpg" alt="简单的视频处理示例" style="width: 30%; height: auto;">
        </a>
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><strong>软件打包与部署</strong></td>
      <td style="vertical-align: top;">
        从编写代码到最终发布，Operit AI 可以进一步调用平台工具，将完成的软件打包成适用于安卓（APK）或Windows（EXE）的可执行文件，实现端到端的自动化开发流程。
      </td>
      <td style="vertical-align: top; text-align: center;">
        <a href="/manuals/assets/web_developer.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/web_developer.jpg" alt="软件打包示例1" style="width: 30%; height: auto; margin-bottom: 5px;">
        </a>
        <a href="/manuals/assets/game_maker_packer.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/game_maker_packer.jpg" alt="软件打包示例2" style="width: 30%; height: auto;">
        </a>
      </td>
    </tr>
  </tbody>
</table>

### 📦 拓展包

<p><em>演示版本 \`1.1.6\`</em><br>
（图片可点击放大）</p>

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
      <td style="vertical-align: top;">\`writer\`</td>
      <td style="vertical-align: top;">
        高级文件编辑和读取功能，支持分段编辑、差异编辑、行号编辑以及高级文件读取操作
      </td>
      <td style="vertical-align: top; text-align: center;">
        <a href="/manuals/assets/expamle/065e5ca8a8036c51a7905d206bbb56c.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/expamle/065e5ca8a8036c51a7905d206bbb56c.jpg" alt="writer示例" style="width: 30%; height: auto;">
        </a>
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top;">\`various_search\`</td>
      <td style="vertical-align: top;">
        多平台搜索功能，支持从必应、百度、搜狗、夸克等平台获取搜索结果
      </td>
      <td style="vertical-align: top; text-align: center;">
        <a href="/manuals/assets/expamle/90a1778510df485d788b80d4bc349f9.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/expamle/90a1778510df485d788b80d4bc349f9.jpg" alt="多平台搜索示例1" style="width: 30%; height: auto; margin-bottom: 5px;">
        </a>
        <a href="/manuals/assets/expamle/f9b8aeba4878775d1252ad8d5d8620a.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/expamle/f9b8aeba4878775d1252ad8d5d8620a.jpg" alt="多平台搜索示例2" style="width: 30%; height: auto;">
        </a>
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top;">\`daily_life\`</td>
      <td style="vertical-align: top;">
        日常生活工具集合，包括日期时间查询、设备状态监测、天气搜索、提醒闹钟设置、短信电话通讯等
      </td>
      <td style="vertical-align: top; text-align: center;">
        <a href="/manuals/assets/expamle/615cf7a99e421356b6d22bb0b9cc87b.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/expamle/615cf7a99e421356b6d22bb0b9cc87b.jpg" alt="日常生活示例" style="width: 30%; height: auto;">
        </a>
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top;">\`super_admin\`</td>
      <td style="vertical-align: top;">
        超级管理员工具集，提供终端命令和Shell操作的高级功能
      </td>
      <td style="vertical-align: top; text-align: center;">
        <a href="/manuals/assets/expamle/731f67e3d7494886c1c1f8639216bf2.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/expamle/731f67e3d7494886c1c1f8639216bf2.jpg" alt="超级管理员示例1" style="width: 30%; height: auto; margin-bottom: 5px;">
        </a>
        <a href="/manuals/assets/expamle/6f81901ae47f5a3584167148017d132.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/expamle/6f81901ae47f5a3584167148017d132.jpg" alt="超级管理员示例2" style="width: 30%; height: auto;">
        </a>
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top;">\`code_runner\`</td>
      <td style="vertical-align: top;" colspan="2">多语言代码执行能力，支持JavaScript、Python、Ruby、Go和Rust脚本的运行<br><em>你可以在\`工具箱>终端自动配置\`中完成以上环境的配置</em></td>
    </tr>
    <tr>
      <td style="vertical-align: top;">\`baidu_map\`</td>
      <td style="vertical-align: top;">
        百度地图相关功能
      </td>
      <td style="vertical-align: top; text-align: center;">
        <a href="/manuals/assets/expamle/71fd917c5310c1cebaa1abb19882a6d.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/expamle/71fd917c5310c1cebaa1abb19882a6d.jpg" alt="百度地图示例" style="width: 30%; height: auto;">
        </a>
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top;">\`qq_intelligent\`</td>
      <td style="vertical-align: top;" colspan="2">QQ智能助手，通过UI自动化技术实现QQ应用交互</td>
    </tr>
    <tr>
      <td style="vertical-align: top;">\`time\`</td>
      <td style="vertical-align: top;" colspan="2">提供时间相关功能</td>
    </tr>
    <tr>
      <td style="vertical-align: top;">\`various_output\`</td>
      <td style="vertical-align: top;">
        提供图片输出功能
      </td>
      <td style="vertical-align: top; text-align: center;">
        <a href="/manuals/assets/expamle/5fff4b49db78ec01e189658de8ea997.jpg" target="_blank" rel="noopener noreferrer">
          <img src="/manuals/assets/expamle/5fff4b49db78ec01e189658de8ea997.jpg" alt="图片输出示例" style="width: 30%; height: auto;">
        </a>
      </td>
    </tr>
  </tbody>
</table>

### 🛠️ 核心工具

<table>
  <thead>
    <tr>
      <th>工具 (Tool)</th>
      <th>功能说明 (Description)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>\`sleep\`</td><td>短暂暂停执行</td></tr>
    <tr><td>\`device_info\`</td><td>获取设备详细信息</td></tr>
    <tr><td>\`use_package\`</td><td>激活扩展包</td></tr>
    <tr><td>\`query_problem_library\`</td><td>查询问题库</td></tr>
    <tr><td>\`list_files\`</td><td>列出目录中的文件</td></tr>
    <tr><td>\`read_file\`</td><td>读取文件内容</td></tr>
    <tr><td>\`write_file\`</td><td>写入内容到文件</td></tr>
    <tr><td>\`delete_file\`</td><td>删除文件或目录</td></tr>
    <tr><td>\`file_exists\`</td><td>检查文件是否存在</td></tr>
    <tr><td>\`move_file\`</td><td>移动或重命名文件</td></tr>
    <tr><td>\`copy_file\`</td><td>复制文件或目录</td></tr>
    <tr><td>\`make_directory\`</td><td>创建目录</td></tr>
    <tr><td>\`find_files\`</td><td>搜索匹配文件</td></tr>
    <tr><td>\`zip_files/unzip_files\`</td><td>压缩/解压文件</td></tr>
    <tr><td>\`download_file\`</td><td>从网络下载文件</td></tr>
    <tr><td>\`http_request\`</td><td>发送HTTP请求</td></tr>
    <tr><td>\`multipart_request\`</td><td>上传文件</td></tr>
    <tr><td>\`manage_cookies\`</td><td>管理cookies</td></tr>
    <tr><td>\`visit_web\`</td><td>访问并提取网页内容</td></tr>
    <tr><td>\`get_system_setting\`</td><td>获取系统设置</td></tr>
    <tr><td>\`modify_system_setting\`</td><td>修改系统设置</td></tr>
    <tr><td>\`install_app/uninstall_app\`</td><td>安装/卸载应用</td></tr>
    <tr><td>\`start_app/stop_app\`</td><td>启动/停止应用</td></tr>
    <tr><td>\`get_notifications\`</td><td>获取设备通知</td></tr>
    <tr><td>\`get_device_location\`</td><td>获取设备位置</td></tr>
    <tr><td>\`get_page_info\`</td><td>获取UI屏幕信息</td></tr>
    <tr><td>\`tap\`</td><td>模拟点击坐标</td></tr>
    <tr><td>\`click_element\`</td><td>点击UI元素</td></tr>
    <tr><td>\`set_input_text\`</td><td>设置输入文本</td></tr>
    <tr><td>\`press_key\`</td><td>模拟按键</td></tr>
    <tr><td>\`swipe\`</td><td>模拟滑动手势</td></tr>
    <tr><td>\`find_element\`</td><td>查找UI元素</td></tr>
    <tr><td>\`ffmpeg_execute\`</td><td>执行FFmpeg命令</td></tr>
    <tr><td>\`ffmpeg_info\`</td><td>获取FFmpeg信息</td></tr>
    <tr><td>\`ffmpeg_convert\`</td><td>转换视频文件</td></tr>
  </tbody>
</table>

### 🛒 MCP市场

#### MCP配置流程
<p>在Operit AI中配置和管理MCP（模型上下文协议）插件，可以极大地扩展AI的能力。以下是详细的配置步骤：</p>
<table style="width: 100%; border-collapse: separate; border-spacing: 0 1em;">
    <thead>
      <tr>
       <th style="text-align: center; padding: 8px;">步骤一：进入MCP市场</th>
        <th style="text-align: center; padding: 8px;">步骤二：选择并部署MCP</th>
      </tr>
    </thead>
    <tbody>
      <tr>
       <td style="text-align: center; padding: 8px; vertical-align: top;">
          <p>从主菜单进入"拓展中心"，然后选择"MCP市场"。</p>
          <a href="/manuals/assets/package_or_MCP/7.jpg" target="_blank" rel="noopener noreferrer"><img src="/manuals/assets/package_or_MCP/7.jpg" alt="进入MCP市场" style="max-width: 100%; height: auto;"></a>
       </td>
       <td style="text-align: center; padding: 8px; vertical-align: top;">
          <p>浏览可用的MCP，选择您需要的插件，然后点击"部署"按钮开始自动配置。</p>
          <a href="/manuals/assets/package_or_MCP/8.jpg" target="_blank" rel="noopener noreferrer"><img src="/manuals/assets/package_or_MCP/8.jpg" alt="部署MCP" style="max-width: 100%; height: auto;"></a>
       </td>
     </tr>
   </tbody>
</table>

#### MCP工作机制
<table style="width: 100%; margin-top: 1em;">
  <tbody>
    <tr>
      <td style="width: 30%; padding: 12px; vertical-align: top;">
        我们的MCP服务器通过Termux运行在本地，并和软件进行交互。MCP会在软件打开的时候进行尝试启动，启动命令由每个插件配置中的\`arg\`参数以及\`env\`的环境变量决定。
      </td>
      <td style="width: 60%; padding: 12px; vertical-align: top; text-align: center;">
        <img src="/manuals/assets/41ebc2ec5278bd28e8361e3eb72128d.jpg" alt="MCP配置示例" style="width: 30%; height: auto; border-radius: 4px;">
      </td>
    </tr>
  </tbody>
</table>

#### MCP下载和部署机制
<p>由于环境特殊，并且MCP的生态本身就杂乱不堪，README文档质量参差不齐，所以我们加入了自动匹配包结构的机制。目前支持识别Node.js和Python两种语言编写的包。</p>
<p>下载MCP时，应用会直接获取仓库的ZIP压缩包，下载到\`Download/Operit/\`目录下，并修改一个JSON文件加入ID。如有需要，您也可以在软件内导入自定义MCP或手动将文件放入该目录。</p>
<h5>部署机制</h5>
<p>我们将在部署时为两种项目结构自动生成执行命令。</p>
<table style="width: 100%; margin-top: 1em;">
  <thead>
    <tr>
      <th style="width: 50%; padding: 12px; text-align: left;">Python包</th>
      <th style="width: 50%; padding: 12px; text-align: left;">Node.js包</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 12px; vertical-align: top;">
        对于Python包，我们会先尝试使用\`pip\`安装依赖，然后自动生成一个启动命令的配置。您可以在部署时通过"自定义部署命令"来查看和修改。
      </td>
      <td style="padding: 12px; vertical-align: top;">
        对于Node.js包，我们会先尝试进行换源，然后使用\`npm\`或\`pnpm\`下载依赖。如果项目是TypeScript编写的，我们会尝试编译项目；如果是JavaScript，则会尝试直接获取入口文件。最后，系统将生成一份配置代码，启动命令会指向入口文件或编译后的文件。
      </td>
    </tr>
  </tbody>
</table>
> 以上的两种识别模式对于很多包而言都是通用的。当然，也总会有一些意外情况。
> <b>注意：</b>部署和启动之前，包文件都会被复制到Termux内部进行操作。也就是说，只有下载的原始压缩包才会存放在外部的\`Download\`路径下。

#### MCP常见问题
<table style="width: 100%; border-collapse: separate; border-spacing: 0 1em;">
  <tbody>
    <tr>
      <td style="width: 30%; vertical-align: middle; padding-right: 15px;">有的插件需要key，但是这部分需要手动加入。如图，请根据readme，把key写在启动环境变量，否则会报错。</td>
      <td style="width: 60%; vertical-align: middle;"><img src="/manuals/assets/package_or_MCP/7b8ec8ba567c3c670d6a063121614fe.jpg" alt="配置key" style="max-width: 100%; height: auto;"></td>
    </tr>
    <tr>
      <td style="width: 30%; vertical-align: middle; padding-right: 15px;">插件的部署情况可以手动进入termux进行查看，方式如下。在这里，build文件夹为部署中自动编译后的结果，里面有我们启动需要的文件路径。</td>
      <td style="width: 60%; vertical-align: middle;"><img src="/manuals/assets/package_or_MCP/401cda27abf79b9d0311816947b1bdd.jpg" alt="查看部署" style="max-width: 100%; height: auto;"></td>
    </tr>
    <tr>
      <td style="width: 30%; vertical-align: middle; padding-right: 15px;">你可以尝试运行它，以此修正你的启动命令(图中由于缺少key，启动失败)</td>
      <td style="width: 60%; vertical-align: middle;"><img src="/manuals/assets/package_or_MCP/0946d845d9adad20bbd039a93d1196f.jpg" alt="修正启动命令" style="max-width: 100%; height: auto;"></td>
    </tr>
  </tbody>
</table>

> **注意:** 有的包带了docker文件，但是我们是不支持docker的，请忽视它。

> **注意:** 我们的环境termux是linux，有一些win才能用的包要运行.exe，比如playwright，那当然是不支持的了。

### ⏳ 计划模式
\`1.1.6\`及以后版本不复存在

适用于AI长时间工作，但跟没开计划模式的区别不大（甚至没开的效果更好）。将在后续版本删除，并用\`任务模式\`替换

>\`任务模式\`下，AI可能主动给您发消息

>注：不正当的使用将加快token的消耗

## ❔ 常见问题解答

<p>这里收录了<strong>最新版本 \`1.1.6\`</strong> 用户群和 issue 的全部问题。
如果您使用的是旧版本，可以来<a href="#section-7">这里找找</a>。</p>

### MCP包问题排查

**MCP包不加载问题可能原因**
- **Shizuku未正确配置**：请参照[Shizuku授权流程](#shizuku授权流程)完成配置。
- **Termux未正确配置**：请参照[包管理与MCP使用说明](#包管理与mcp使用说明)完成配置。
- **Termux未挂在后台**：在启动软件前，请务必先打开Termux并保持其在后台运行。

**MCP运行失败原因**
- **环境配置问题**：部分MCP插件对运行环境有特殊要求。您需要访问相应插件的GitHub开源地址，根据其文档完成环境配置。关于配置的更多信息，请参考[MCP市场](#-mcp市场)章节的详细说明。
- **版本兼容性问题**：更早版本中存在的问题大多已在后续更新中得到解决。我们强烈建议您下载并安装最新版本以获取最佳体验。

您可以从[Release页面](https://github.com/AAswordman/Operit/releases)下载最新APK。

## 🎉 加入我们

### 联系我们
- **创意提交：** [GitHub Issues](https://github.com/AAswordman/Operit/issues)

我们欢迎您：
- 提交您使用Operit AI创造的优秀作品
- 分享您的创新想法和使用场景
- 报告您遇到的问题或提出改进建议
- 投稿您的创意和脑洞，一起让Operit变得更强大

## 💡 许愿池

以下是我们正在计划或正在开发中的功能：

- **核心功能增强**:
  - 加入TTS（文字转语音）和语音识别模型，并进一步实现更自然的对话系统。
  - 实现全新的 \`任务模式\` 来替代现有的 \`计划模式\`，让AI可以主动、智能地执行和跟进长期任务。

- **用户体验优化**:
  - 实现一个更美观、更现代、更友好的交互界面。
  - 支持多语言，让全球用户都能无障碍使用。

- **社区与生态**:
  - 我们会认真对待社区（如Issue、QQ群）中提出的每一个建议，并努力将它们变为现实。
  - 推广！推广！推广！让更多人认识并使用Operit AI。

有好的想法或功能建议？您可以通过GitHub Issues提交，也可以关注我们未来的更新计划，也许您期待的功能已经在路上！
`; 
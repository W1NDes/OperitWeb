 
import React, { useState, useEffect, useRef } from 'react';
import { Layout, Anchor, Button, theme } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { toString } from 'mdast-util-to-string';
import { guideContent } from '../content/guide';
import ReturnCodeGenerator from '../components/ReturnCodeGenerator';

const { Content, Sider } = Layout;

interface AnchorItem {
  key: string;
  href: string;
  title: string;
  children?: AnchorItem[];
}

// Helper to recursively get text from React children
const getReactChildrenText = (children: any): string => {
  if (Array.isArray(children)) {
    return children.map(getReactChildrenText).join('');
  }
  if (typeof children === 'object' && children !== null && children.props) {
    return getReactChildrenText(children.props.children);
  }
  return children?.toString() || '';
};

// Unified function to create a slug/id from a title
const createSlug = (text: string): string => {
  // A simplified regex to remove many common emojis.
  const emojiRegex = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

  return text
    .toLowerCase()
    .replace(emojiRegex, '')
    .trim()
    .replace(/[\s/]+/g, '-') // Replace spaces and slashes with a single dash
    .replace(/[^\u4e00-\u9fa5a-z0-9-]/g, '') // Keep CJK, alphanumeric, and dashes
    .replace(/--+/g, '-') // Replace multiple dashes with a single dash
    .replace(/^-+/, '') // Trim dash from the start
    .replace(/-+$/, ''); // Trim dash from the end
};

// 根据环境动态设置基础路径
// 在开发环境中，我们假设 manuals 目录位于 public 文件夹下
// 在生产环境中，基于实际部署路径调整
const basePath = import.meta.env.PROD ? '/OperitWeb' : '';


interface TocItem {
  level: number;
  title: string;
  id: string;
  children?: TocItem[];
}

const GuidePage: React.FC = () => {
  const { token } = theme.useToken();
  const [toc, setToc] = useState<TocItem[]>([]);
  const [siderCollapsed, setSiderCollapsed] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // 响应式处理 - 小屏幕默认收起
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSiderCollapsed(true);
      }
    };

    // 初始检查
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Generate TOC from markdown content using remark to ensure consistency
    try {
      const tocTree: TocItem[] = [];
      let parent: TocItem | null = null;

      const processor = unified()
        .use(remarkParse)
        .use(() => (tree: any) => {
          tree.children.forEach((node: any) => {
            if (node.type === 'heading' && (node.depth === 2 || node.depth === 3)) {
              const title = toString(node);
              const id = createSlug(title);

              if (node.depth === 2) {
                const newItem: TocItem = { level: 2, title, id, children: [] };
                tocTree.push(newItem);
                parent = newItem;
              } else if (node.depth === 3) {
                const newItem: TocItem = { level: 3, title, id };
                if (parent) {
                  parent.children?.push(newItem);
                } else {
                  // Handle case where h3 appears before h2
                  tocTree.push(newItem);
                }
              }
            }
          });
        })
        .use(remarkStringify);

      processor.processSync(guideContent);
      setToc(tocTree);
    } catch (error) {
      console.error("Failed to generate TOC from markdown:", error);
      setToc([]); // Set TOC to empty on error to prevent further issues
    }
  }, []);

  // 预处理Markdown内容，修正图片路径
  const processedGuideContent = guideContent
    .replace(/src="\/manuals\//g, `src="${basePath}/manuals/`)
    .replace(/href="\/manuals\//g, `href="${basePath}/manuals/`);

  const generateAnchorItems = (tocItems: TocItem[]): AnchorItem[] => {
    return tocItems.map(item => ({
      key: item.id,
      href: `#${item.id}`,
      title: item.title,
      children: item.children && item.children.length > 0
        ? generateAnchorItems(item.children)
        : undefined,
    }));
  };

  const createHeadingId = (children: any): string => {
    const headingText = getReactChildrenText(children);
    return createSlug(headingText);
  };

  // Split markdown by the placeholder and render the components
  const renderContent = () => {
    const parts = processedGuideContent.split('[RETURN_CODE_GENERATOR_PLACEHOLDER]');
    
    const markdownComponents = {
      h1: ({ children, ...props }: any) => (
        <h1 id={createHeadingId(children)} style={{ color: token.colorTextHeading }} {...props}>
          {children}
        </h1>
      ),
      h2: ({ children, ...props }: any) => (
        <h2 id={createHeadingId(children)} style={{ color: token.colorTextHeading }} {...props}>
          {children}
        </h2>
      ),
      h3: ({ children, ...props }: any) => (
        <h3 id={createHeadingId(children)} style={{ color: token.colorTextHeading }} {...props}>
          {children}
        </h3>
      ),
      h4: ({ children, ...props }: any) => (
        <h4 id={createHeadingId(children)} style={{ color: token.colorTextHeading }} {...props}>
          {children}
        </h4>
      ),
      h5: ({ children, ...props }: any) => (
        <h5 id={createHeadingId(children)} style={{ color: token.colorTextHeading }} {...props}>
          {children}
        </h5>
      ),
      p: ({ children, ...props }: any) => (
        <p style={{ color: token.colorText }} {...props}>
          {children}
        </p>
      ),
      li: ({ children, ...props }: any) => (
        <li style={{ color: token.colorText }} {...props}>
          {children}
        </li>
      ),
      strong: ({ children, ...props }: any) => (
        <strong style={{ color: token.colorTextHeading }} {...props}>
          {children}
        </strong>
      ),
      em: ({ children, ...props }: any) => (
        <em style={{ color: token.colorText }} {...props}>
          {children}
        </em>
      ),
      a: ({ children, ...props }: any) => (
        <a style={{ color: token.colorLink }} {...props}>
          {children}
        </a>
      ),
      table: ({ children, ...props }: any) => (
        <div style={{ overflowX: 'auto', marginBottom: 16 }}>
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse',
            border: `1px solid ${token.colorBorderSecondary}`
          }} {...props}>
            {children}
          </table>
        </div>
      ),
      th: ({ children, ...props }: any) => (
        <th style={{ 
          padding: '12px 8px',
          backgroundColor: token.colorFillAlter,
          border: `1px solid ${token.colorBorderSecondary}`,
          textAlign: 'left',
          fontWeight: 600,
          color: token.colorTextHeading
        }} {...props}>
          {children}
        </th>
      ),
      td: ({ children, ...props }: any) => (
        <td style={{ 
          padding: '12px 8px',
          border: `1px solid ${token.colorBorderSecondary}`,
          verticalAlign: 'top',
          color: token.colorText
        }} {...props}>
          {children}
        </td>
      ),
      blockquote: ({ children, ...props }: any) => (
        <blockquote style={{
          margin: '16px 0',
          paddingLeft: 16,
          borderLeft: `4px solid ${token.colorPrimary}`,
          backgroundColor: token.colorFillAlter,
          padding: '8px 16px',
          borderRadius: 4,
          color: token.colorText
        }} {...props}>
          {children}
        </blockquote>
      ),
      code: ({ children, className, ...props }: any) => {
        const isInline = !className;
        return (
          <code
            style={{
              backgroundColor: isInline ? token.colorFillTertiary : token.colorFillQuaternary,
              padding: isInline ? '2px 4px' : '8px 12px',
              borderRadius: isInline ? 3 : 6,
              fontSize: '0.875em',
              fontFamily: 'SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace',
              color: token.colorText,
              border: isInline ? 'none' : `1px solid ${token.colorBorderSecondary}`,
              display: isInline ? 'inline' : 'block',
              margin: isInline ? 0 : '8px 0'
            }}
            {...props}
          >
            {children}
          </code>
        );
      },
      pre: ({ children, ...props }: any) => (
        <pre
          style={{
            backgroundColor: token.colorFillQuaternary,
            padding: '12px',
            borderRadius: 6,
            border: `1px solid ${token.colorBorderSecondary}`,
            overflow: 'auto',
            margin: '16px 0',
            color: token.colorText
          }}
          {...props}
        >
          {children}
        </pre>
      )
    };

    return (
      <>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
          components={markdownComponents}
        >
          {parts[0]}
        </ReactMarkdown>
        
        {parts.length > 1 && <ReturnCodeGenerator />}
        
        {parts.length > 1 && parts[1] && (
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {parts[1]}
          </ReactMarkdown>
        )}
      </>
    );
  };

  return (
    <Layout style={{ minHeight: '100vh', background: 'transparent' }}>
      {/* 侧边栏切换按钮 */}
      <Button
        type="primary"
        icon={siderCollapsed ? <MenuOutlined /> : <CloseOutlined />}
        onClick={() => setSiderCollapsed(!siderCollapsed)}
        style={{
          position: 'fixed',
          top: 120,
          left: siderCollapsed ? 16 : 280 - 48,
          zIndex: 1001,
          width: 32,
          height: 32,
          minWidth: 32,
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          boxShadow: `0 2px 8px ${token.colorTextQuaternary}`,
          border: 'none',
          borderRadius: '4px',
          background: siderCollapsed ? token.colorPrimary : token.colorFillSecondary,
          backdropFilter: 'blur(8px)'
        }}
        title={siderCollapsed ? '展开目录' : '收起目录'}
        size="small"
      />

      <Sider 
        width={280} 
        collapsed={siderCollapsed}
        collapsedWidth={0}
        style={{ 
          background: token.colorBgContainer, 
          padding: siderCollapsed ? 0 : '20px 16px',
          borderRight: `1px solid ${token.colorSplit}`,
          position: 'fixed',
          height: '100vh',
          overflow: 'auto',
          zIndex: 1000,
          transition: 'all 0.3s ease'
        }}
      >
        {!siderCollapsed && (
          <>
            <h3 style={{ marginBottom: 16, fontSize: 16, fontWeight: 600, color: token.colorTextHeading }}>目录</h3>
            <Anchor
              affix={false}
              showInkInFixed
              items={generateAnchorItems(toc)}
              targetOffset={80}
            />
          </>
        )}
      </Sider>
      
      <Layout style={{ 
        marginLeft: siderCollapsed ? 0 : 280, 
        background: 'transparent',
        transition: 'margin-left 0.3s ease'
      }}>
        <Content 
          ref={contentRef}
          style={{ 
            padding: '20px 40px 40px',
            background: token.colorBgContainer,
            minHeight: 'calc(100vh - 88px)',
            marginTop: 88
          }}
        >
          <div style={{ 
            maxWidth: 900, 
            margin: '0 auto',
            color: token.colorText
          }}>
            {renderContent()}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default GuidePage; 
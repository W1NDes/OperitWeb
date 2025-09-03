 
import React, { useState, useEffect, useRef } from 'react';
import { Layout, Anchor, BackTop, Button } from 'antd';
import { UpOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { guideContent } from '../content/guide';
import ReturnCodeGenerator from '../components/ReturnCodeGenerator';

const { Content, Sider } = Layout;

interface TocItem {
  level: number;
  title: string;
  id: string;
}

const GuidePage: React.FC = () => {
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
    // Generate TOC from markdown content
    const lines = guideContent.split('\n');
    const newToc: TocItem[] = [];
    
    lines.forEach((line: string) => {
      if (line.startsWith('## ')) {
        const title = line.replace('## ', '').trim();
        const id = title.toLowerCase()
          .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
          .replace(/\s+/g, '-') // Replace spaces with hyphens
          .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
        newToc.push({ level: 2, title, id });
      } else if (line.startsWith('### ')) {
        const title = line.replace('### ', '').trim();
        const id = title.toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/^-+|-+$/g, '');
        newToc.push({ level: 3, title, id });
      }
    });
    setToc(newToc);
  }, []);

  const generateAnchorItems = () => {
    return toc.map(item => ({
      key: item.id,
      href: `#${item.id}`,
      title: item.title,
      children: item.level === 2 ? 
        toc
          .filter(subItem => subItem.level === 3)
          .slice(toc.findIndex(t => t === item) + 1)
          .slice(0, toc.slice(toc.findIndex(t => t === item) + 1).findIndex(t => t.level === 2))
          .map(subItem => ({
            key: subItem.id,
            href: `#${subItem.id}`,
            title: subItem.title,
          })) 
        : undefined
    })).filter(item => item.title);
  };

  const createHeadingId = (children: any): string => {
    const headingText = Array.isArray(children) ? children.join('') : children;
    return headingText?.toString().toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/^-+|-+$/g, '') || '';
  };

  // Split markdown by the placeholder and render the components
  const renderContent = () => {
    const parts = guideContent.split('[RETURN_CODE_GENERATOR_PLACEHOLDER]');
    
    return (
      <>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ children, ...props }) => (
              <h2 id={createHeadingId(children)} {...props}>
                {children}
              </h2>
            ),
            h3: ({ children, ...props }) => (
              <h3 id={createHeadingId(children)} {...props}>
                {children}
              </h3>
            ),
            h4: ({ children, ...props }) => (
              <h4 id={createHeadingId(children)} {...props}>
                {children}
              </h4>
            ),
            table: ({ children, ...props }) => (
              <div style={{ overflowX: 'auto', marginBottom: 16 }}>
                <table style={{ 
                  width: '100%', 
                  borderCollapse: 'collapse',
                  border: '1px solid #d9d9d9'
                }} {...props}>
                  {children}
                </table>
              </div>
            ),
            th: ({ children, ...props }) => (
              <th style={{ 
                padding: '12px 8px',
                backgroundColor: '#fafafa',
                border: '1px solid #d9d9d9',
                textAlign: 'left',
                fontWeight: 600
              }} {...props}>
                {children}
              </th>
            ),
            td: ({ children, ...props }) => (
              <td style={{ 
                padding: '12px 8px',
                border: '1px solid #d9d9d9',
                verticalAlign: 'top'
              }} {...props}>
                {children}
              </td>
            ),
            blockquote: ({ children, ...props }) => (
              <blockquote style={{
                margin: '16px 0',
                paddingLeft: 16,
                borderLeft: '4px solid #1890ff',
                backgroundColor: '#f6f8fa',
                padding: '8px 16px',
                borderRadius: 4
              }} {...props}>
                {children}
              </blockquote>
            ),
            code: ({ children, className, ...props }) => {
              const isInline = !className;
              return (
                <code
                  style={{
                    backgroundColor: isInline ? '#f5f5f5' : 'transparent',
                    padding: isInline ? '2px 4px' : 0,
                    borderRadius: isInline ? 3 : 0,
                    fontSize: '0.875em',
                    fontFamily: 'SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace'
                  }}
                  {...props}
                >
                  {children}
                </code>
              );
            }
          }}
        >
          {parts[0]}
        </ReactMarkdown>
        
        {parts.length > 1 && <ReturnCodeGenerator />}
        
        {parts.length > 1 && parts[1] && (
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children, ...props }) => (
                <h2 id={createHeadingId(children)} {...props}>
                  {children}
                </h2>
              ),
              h3: ({ children, ...props }) => (
                <h3 id={createHeadingId(children)} {...props}>
                  {children}
                </h3>
              ),
              h4: ({ children, ...props }) => (
                <h4 id={createHeadingId(children)} {...props}>
                  {children}
                </h4>
              ),
            }}
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
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          border: 'none',
          borderRadius: '4px',
          background: siderCollapsed ? '#1890ff' : 'rgba(0, 0, 0, 0.45)',
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
          background: '#fff', 
          padding: siderCollapsed ? 0 : '20px 16px',
          borderRight: '1px solid #f0f0f0',
          position: 'fixed',
          height: '100vh',
          overflow: 'auto',
          zIndex: 1000,
          transition: 'all 0.3s ease'
        }}
      >
        {!siderCollapsed && (
          <>
            <h3 style={{ marginBottom: 16, fontSize: 16, fontWeight: 600 }}>目录</h3>
            <Anchor
              affix={false}
              showInkInFixed
              items={generateAnchorItems()}
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
            background: '#fff',
            minHeight: 'calc(100vh - 88px)',
            marginTop: 88
          }}
        >
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            {renderContent()}
          </div>
        </Content>
      </Layout>
      
      <BackTop>
        <div style={{
          height: 40,
          width: 40,
          lineHeight: '40px',
          borderRadius: 4,
          backgroundColor: '#1890ff',
          color: '#fff',
          textAlign: 'center',
          fontSize: 14,
        }}>
          <UpOutlined />
        </div>
      </BackTop>
    </Layout>
  );
};

export default GuidePage; 
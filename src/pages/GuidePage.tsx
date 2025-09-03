import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;

const menuItems = [
  { key: '/guide', label: <Link to="/guide">欢迎</Link> },
  { key: 'quick-start', label: <Link to="/guide/quick-start">快速上手</Link> },
  {
    key: 'guides',
    label: '核心指南',
    children: [
      { key: 'packaging-apps', label: <Link to="/guide/guides/packaging-apps">打包Web应用</Link> },
      { key: 'configuring-api', label: <Link to="/guide/guides/configuring-api">配置API</Link> },
      { key: 'features', label: <Link to="/guide/guides/features">功能介绍</Link> },
      { key: 'mcp-market', label: <Link to="/guide/guides/mcp-market">MCP市场</Link> },
    ],
  },
  {
    key: 'tools',
    label: '实用工具',
    children: [
      { key: 'return-code-generator', label: <Link to="/guide/tools/return-code-generator">邀请返回码生成器</Link> },
    ],
  },
  { key: 'faq', label: <Link to="/guide/faq">常见问题</Link> },
];

const GuidePage: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [broken, setBroken] = useState(false);
  const location = useLocation();

  const isToolPage = location.pathname.startsWith('/guide/tools/');

  const getSelectedKeys = () => {
    const path = location.pathname.split('/').pop() || 'quick-start';
    if (location.pathname === '/guide' || location.pathname === '/guide/') {
      return ['/guide'];
    }
    if (location.pathname.includes('/guide/tools/')) {
      return [path];
    }
    return [path];
  };
  
  const getDefaultOpenKeys = () => {
    if (location.pathname.includes('/guide/guides')) {
      return ['guides'];
    }
    if (location.pathname.includes('/guide/tools')) {
      return ['tools'];
    }
    return [];
  };

  return (
    <Layout style={{ minHeight: 'calc(100vh - 64px)', paddingTop: 64, background: 'transparent' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        breakpoint="md"
        collapsedWidth="0"
        onBreakpoint={setBroken}
        trigger={null}
        style={{
          overflow: 'auto',
          height: 'calc(100vh - 64px)',
          background: darkMode ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)',
          backdropFilter: 'blur(10px)',
          borderRight: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)',
        }}
      >
        <Menu
          theme={darkMode ? 'dark' : 'light'}
          mode="inline"
          selectedKeys={getSelectedKeys()}
          defaultOpenKeys={getDefaultOpenKeys()}
          items={menuItems}
          style={{ height: '100%', borderRight: 0, background: 'transparent' }}
            />
      </Sider>
      <Layout style={{ background: 'transparent' }}>
        {broken && (
          <Button
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              position: 'fixed',
              top: 74,
              left: 16,
              zIndex: 100,
            }}
            type="primary"
            shape="circle"
          />
        )}
        <Content style={{ padding: isToolPage ? '0' : '24px', margin: 0, minHeight: 280 }}>
          {isToolPage ? (
            <Outlet />
          ) : (
            <div style={{
              background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(10px)',
              border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
              borderRadius: '12px',
              padding: '24px'
            }}>
              <Outlet />
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default GuidePage; 
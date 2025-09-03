import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';

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
  { key: 'faq', label: <Link to="/guide/faq">常见问题</Link> },
];

const GuidePage: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);
  const location = useLocation();

  const getSelectedKeys = () => {
    const path = location.pathname.split('/').pop() || 'quick-start';
    if (location.pathname === '/guide' || location.pathname === '/guide/') {
      return ['/guide'];
    }
    return [path];
  };
  
  const getDefaultOpenKeys = () => {
    if (location.pathname.includes('/guide/guides')) {
      return ['guides'];
    }
    return [];
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Layout style={{ minHeight: 'calc(100vh - 64px)', paddingTop: 64, background: 'transparent' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint="md"
        collapsedWidth="0"
        trigger={
          <div style={{ position: 'fixed', top: 74, left: collapsed ? 10 : 210, zIndex: 100 }}>
            <MenuOutlined style={{ color: darkMode ? 'white' : 'black' }} />
          </div>
        }
        style={{
          overflow: 'auto',
          height: 'calc(100vh - 64px)',
          position: 'fixed',
          left: 0,
          top: 64,
          bottom: 0,
          background: darkMode ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)',
          backdropFilter: 'blur(10px)',
          borderRight: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)',
          zIndex: 10
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
      <Layout style={{ marginLeft: collapsed ? 0 : 200, transition: 'margin-left 0.2s', background: 'transparent' }}>
        <Content style={{ padding: '24px', margin: 0, minHeight: 280 }}>
          <div style={{
            background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
            borderRadius: '12px',
            padding: '24px'
          }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default GuidePage; 
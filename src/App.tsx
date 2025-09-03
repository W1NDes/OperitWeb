import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import GuidePage from './pages/GuidePage';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [darkMode]);

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Router basename={import.meta.env.PROD ? '/OperitWeb' : '/'}>
        <Routes>
          <Route 
            path="/" 
            element={
              <MainLayout 
                darkMode={darkMode} 
                setDarkMode={setDarkMode} 
                language={language} 
                setLanguage={setLanguage} 
              />
            }
          >
            <Route index element={<HomePage darkMode={darkMode} language={language} />} />
            <Route path="guide" element={<GuidePage />} />
            {/* 在这里添加其他路由 */}
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App; 
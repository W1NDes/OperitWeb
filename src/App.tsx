import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import GuidePage from './pages/GuidePage';
import GuideIndex from './pages/GuideIndex';
import MarkdownRenderer from './components/MarkdownRenderer';
import GuideContent from './pages/GuideContent';

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
            <Route path="guide" element={<GuidePage darkMode={darkMode} />}>
              <Route index element={<GuideIndex />} />
              <Route path="quick-start" element={<MarkdownRenderer file="quick-start" />} />
              <Route path="guides/:slug" element={<GuideContent />} />
              <Route path="faq" element={<MarkdownRenderer file="faq" />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App; 
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import GuidePage from './pages/GuidePage';
import { translations } from './translations';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');

  const t = (key: string) => {
    const translation = translations[language] as Record<string, string>;
    return translation[key] || key;
  };

  return (
    <Router>
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
  );
}

export default App; 
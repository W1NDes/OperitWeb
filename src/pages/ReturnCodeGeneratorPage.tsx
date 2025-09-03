import React from 'react';
import ReturnCodeGenerator from '../components/ReturnCodeGenerator';

const ReturnCodeGeneratorPage: React.FC = () => {
  return (
    <div style={{ 
      padding: '24px',
      height: '100%',
      width: '100%'
    }}>
      <ReturnCodeGenerator />
    </div>
  );
};

export default ReturnCodeGeneratorPage; 
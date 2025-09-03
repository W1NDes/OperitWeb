import React from 'react';
import { useParams } from 'react-router-dom';
import MarkdownRenderer from '../components/MarkdownRenderer';

const GuideContent: React.FC = () => {
  const params = useParams();
  const filePath = params.category ? `${params.category}/${params.slug}` : params.slug;
  return <MarkdownRenderer file={filePath || ''} />;
};

export default GuideContent; 
import React from 'react';
import { useParams } from 'react-router-dom';
import MarkdownRenderer from '../components/MarkdownRenderer';

const GuideContent: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  return <MarkdownRenderer file={`guides/${slug}`} />;
};

export default GuideContent; 
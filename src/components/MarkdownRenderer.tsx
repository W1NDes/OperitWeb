import React, { useState, useEffect, type ComponentProps } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Spin, Alert, Image } from 'antd';
import './MarkdownRenderer.css';
import remarkImageGallery from '../remark/remarkImageGallery';

// Omit 'ref' from the standard 'code' component props to avoid type conflicts with SyntaxHighlighter
type CodeComponentProps = Omit<ComponentProps<'code'>, 'ref'>;

interface MarkdownRendererProps {
  file: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ file }) => {
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}content/docs/${file}.md`);
        if (response.ok) {
          const text = await response.text();
          setMarkdown(text);
        } else {
          throw new Error(`Failed to fetch markdown file: ${file}.md`);
        }
      } catch (err) {
        console.error(`Failed to load markdown file: ${file}.md`, err);
        setError('无法加载文档内容，请稍后再试。');
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, [file]);

  const urlTransform = (uri: string) => {
    // Prepend the base URL to absolute paths to fix image loading on GitHub Pages.
    if (uri.startsWith('/') && !uri.startsWith('//')) {
      const baseUrl = import.meta.env.BASE_URL;
      const cleanedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
      return `${cleanedBaseUrl}${uri}`;
    }
    return uri;
  };

  if (loading) {
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return <Alert message="错误" description={error} type="error" showIcon />;
  }

  return (
    <div className="markdown-body">
      <Image.PreviewGroup>
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkImageGallery]}
          rehypePlugins={[rehypeRaw]}
          urlTransform={urlTransform}
          components={{
            code({ node, inline, className, children, ...props }: CodeComponentProps & { inline?: boolean; node?: any; }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus as any}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
            img: ({ node: _node, onClick: _onClick, ...props }) => <Image {...props} />,
            p: ({ node, children, ...props }) => {
              const hasImage = node?.children.some(
                (child: any) => child.type === 'element' && child.tagName === 'img'
              );

              if (hasImage) {
                return (
                  <div className="paragraph-with-image" {...props}>
                    {children}
                  </div>
                );
              }
              return <p {...props}>{children}</p>;
            },
          }}
        >
          {markdown}
        </ReactMarkdown>
      </Image.PreviewGroup>
    </div>
  );
};

export default MarkdownRenderer; 
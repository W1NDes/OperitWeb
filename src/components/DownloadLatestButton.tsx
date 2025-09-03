import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

interface DownloadLatestButtonProps {
  downloadText: string;
}

const DownloadLatestButton: React.FC<DownloadLatestButtonProps> = ({ downloadText }) => {
  const [downloadUrl, setDownloadUrl] = useState<string>('https://github.com/AAswordman/Operit/releases');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLatestRelease = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.github.com/repos/AAswordman/Operit/releases/latest');
        if (!response.ok) {
          throw new Error(`GitHub API request failed with status ${response.status}`);
        }
        const data = await response.json();
        const apkAsset = data.assets?.find((asset: any) => asset.name.endsWith('.apk'));
        if (apkAsset) {
          setDownloadUrl(apkAsset.browser_download_url);
        }
      } catch (error) {
        console.error('Error fetching GitHub release:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatestRelease();
  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        type="primary"
        size="large"
        icon={<DownloadOutlined />}
        style={{
          height: 52,
          fontSize: 18,
          paddingLeft: 36,
          paddingRight: 36,
          borderRadius: '8px',
          boxShadow: '0 4px 15px rgba(24, 144, 255, 0.2)'
        }}
        href={downloadUrl}
        target="_blank"
        loading={isLoading}
      >
        {downloadText}
      </Button>
    </motion.div>
  );
};

export default DownloadLatestButton; 
import { useState, useEffect } from 'react';

interface GitHubStats {
  stargazersCount: number;
  forksCount: number;
  contributorsCount: number;
  loading: boolean;
  error: string | null;
}

interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
}

interface GitHubContributor {
  login: string;
  contributions: number;
}

const useGitHubStats = (owner: string, repo: string): GitHubStats => {
  const [stats, setStats] = useState<GitHubStats>({
    stargazersCount: 0,
    forksCount: 0,
    contributorsCount: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchGitHubStats = async () => {
      try {
        setStats(prev => ({ ...prev, loading: true, error: null }));

        // 获取仓库基本信息
        const repoResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        if (!repoResponse.ok) {
          throw new Error(`HTTP error! status: ${repoResponse.status}`);
        }
        const repoData: GitHubRepo = await repoResponse.json();

        // 获取贡献者信息
        const contributorsResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contributors`);
        if (!contributorsResponse.ok) {
          throw new Error(`HTTP error! status: ${contributorsResponse.status}`);
        }
        const contributorsData: GitHubContributor[] = await contributorsResponse.json();

        if (isMounted) {
          setStats({
            stargazersCount: repoData.stargazers_count,
            forksCount: repoData.forks_count,
            contributorsCount: contributorsData.length,
            loading: false,
            error: null,
          });
        }
      } catch (error) {
        if (isMounted) {
          setStats(prev => ({
            ...prev,
            loading: false,
            error: error instanceof Error ? error.message : '获取数据失败',
          }));
        }
      }
    };

    fetchGitHubStats();

    // 清理函数
    return () => {
      isMounted = false;
    };
  }, [owner, repo]);

  return stats;
};

export default useGitHubStats; 
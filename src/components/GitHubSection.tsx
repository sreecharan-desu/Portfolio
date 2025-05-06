/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Element } from 'react-scroll'
import { FaGithub, FaStar, FaExternalLinkAlt } from 'react-icons/fa'
import { BiGitRepoForked } from 'react-icons/bi'
import { IoMdAnalytics } from 'react-icons/io'

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
  topics: string[]
  homepage: string | null
}

interface GitHubStats {
  public_repos: number
  followers: number
  following: number
}

const GitHubSection = () => {
  const [repos, setRepos] = useState<Repository[]>([])
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [_loading, setLoading] = useState(true)
  const [_selectedRepo, setSelectedRepo] = useState<Repository | null>(null)
  const [filter, setFilter] = useState<string>('all')
  const username = 'sreecharan-desu'

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`)
        const userData = await userResponse.json()
        setStats({
          public_repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
        })

        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        )
        const reposData = await reposResponse.json()
        setRepos(reposData)
      } catch (error) {
        console.error('Error fetching GitHub data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  const languageColors: { [key: string]: string } = {
    TypeScript: 'bg-blue-500',
    JavaScript: 'bg-yellow-400',
    Python: 'bg-green-500',
    Java: 'bg-red-500',
    HTML: 'bg-orange-500',
    CSS: 'bg-pink-500',
  }

  const languages = Array.from(new Set(repos.map(repo => repo.language).filter(Boolean)))

  const filteredRepos = filter === 'all' ? repos : repos.filter(repo => repo.language === filter)

  return (
    <Element name='github' className='min-h-screen py-16 bg-black'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-white mb-12 text-center'>GitHub Activity</h2>
        <p className='text-gray-300 text-sm max-w-2xl mx-auto text-center mb-12'>
          Explore my open source journey and contributions
        </p>

        {/* GitHub Stats */}
        {stats && (
          <div className='grid grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto'>
            {Object.entries(stats).map(([key, value]) => (
              <div
                key={key}
                className='bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-gray-600 transition-colors duration-300 text-center'
              >
                <p className='text-2xl font-bold text-white'>{value}</p>
                <p className='text-gray-300 text-sm capitalize'>{key.replace('_', ' ')}</p>
              </div>
            ))}
          </div>
        )}

        {/* Language Filter */}
        <div className='flex flex-wrap justify-center gap-2 mb-8'>
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg ${
              filter === 'all'
                ? 'bg-gray-800 text-white'
                : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
            } transition-colors duration-300`}
          >
            All
          </button>
          {languages.map(lang => (
            <button
              key={lang}
              onClick={() => setFilter(lang)}
              className={`px-4 py-2 rounded-lg ${
                filter === lang
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
              } transition-colors duration-300`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Repositories Grid */}
        <motion.div layout className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <AnimatePresence>
            {filteredRepos.map(repo => (
              <motion.div
                key={repo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className='bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-gray-600 transition-colors duration-300'
                onClick={() => setSelectedRepo(repo)}
              >
                <div className='flex items-start justify-between'>
                  <div>
                    <h3 className='text-2xl font-bold text-white mb-2 flex items-center gap-2'>
                      {repo.name}
                      <IoMdAnalytics className='text-white' />
                    </h3>
                    <p className='text-gray-300 text-sm mb-4 line-clamp-2'>{repo.description}</p>
                  </div>
                  <a
                    href={repo.html_url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white hover:text-gray-300'
                  >
                    <FaGithub className='text-2xl' />
                  </a>
                </div>

                <div className='flex flex-wrap items-center gap-4'>
                  {repo.language && (
                    <div className='flex items-center gap-1'>
                      <span
                        className={`w-3 h-3 rounded-full ${languageColors[repo.language] || 'bg-gray-400'}`}
                      />
                      <span className='text-sm text-gray-300'>{repo.language}</span>
                    </div>
                  )}
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-white' />
                    <span className='text-sm text-gray-300'>{repo.stargazers_count}</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <BiGitRepoForked className='text-white' />
                    <span className='text-sm text-gray-300'>{repo.forks_count}</span>
                  </div>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-1 text-white hover:text-gray-300'
                    >
                      <FaExternalLinkAlt className='text-sm' />
                      <span className='text-sm'>Live Demo</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Profile Button */}
        <div className='text-center mt-12'>
          <a
            href={`https://github.com/${username}`}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300'
          >
            <FaGithub className='text-xl' />
            View GitHub Profile
          </a>
        </div>
      </div>
    </Element>
  )
}

export default GitHubSection
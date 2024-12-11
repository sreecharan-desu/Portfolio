/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Element } from 'react-scroll'
import { FaGithub, FaStar, FaExternalLinkAlt } from 'react-icons/fa'
import { BiGitRepoForked } from 'react-icons/bi'
import { IoMdPulse } from 'react-icons/io'

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
          following: userData.following
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

  const filteredRepos = filter === 'all' 
    ? repos 
    : repos.filter(repo => repo.language === filter)

  return (
    <Element name="github" className="py-16 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
      {/* Background Animation */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            GitHub Activity
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my open source journey and contributions
          </p>
        </motion.div>

        {/* GitHub Stats with Hover Effects */}
        {stats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto"
          >
            {Object.entries(stats).map(([key, value]) => (
              <motion.div
                key={key}
                className="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.p 
                  className="text-2xl font-bold text-gray-900"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                >
                  {value}
                </motion.p>
                <p className="text-gray-600 capitalize">{key.replace('_', ' ')}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Language Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full ${
              filter === 'all' 
                ? 'bg-gray-900 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            } transition-colors`}
          >
            All
          </motion.button>
          {languages.map(lang => (
            <motion.button
              key={lang}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(lang)}
              className={`px-4 py-2 rounded-full ${
                filter === lang 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
            >
              {lang}
            </motion.button>
          ))}
        </motion.div>

        {/* Repositories Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence>
            {filteredRepos.map((repo) => (
              <motion.div
                key={repo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
                onClick={() => setSelectedRepo(repo)}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      {repo.name}
                      <motion.span
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <IoMdPulse className="text-orange-500" />
                      </motion.span>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{repo.description}</p>
                  </div>
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <FaGithub className="text-2xl text-gray-700" />
                  </motion.div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4">
                  {repo.language && (
                    <div className="flex items-center gap-1">
                      <motion.span 
                        className={`w-3 h-3 rounded-full ${languageColors[repo.language] || 'bg-gray-400'}`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-sm text-gray-600">{repo.language}</span>
                    </div>
                  )}
                  <motion.div 
                    className="flex items-center gap-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaStar className="text-yellow-400" />
                    <span className="text-sm text-gray-600">{repo.stargazers_count}</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    <BiGitRepoForked className="text-gray-600" />
                    <span className="text-sm text-gray-600">{repo.forks_count}</span>
                  </motion.div>
                  {repo.homepage && (
                    <motion.a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-orange-500 hover:text-orange-600"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Profile Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-xl" />
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </Element>
  )
}

export default GitHubSection 
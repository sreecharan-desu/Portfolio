import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFileDownload } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast'

const ResumeButton = () => {
  const [isVisible, setIsVisible] = useState(true)

  const handleDownload = async () => {
    try {
      const response = await fetch('/DESU-SREECHARAN-RESUME.pdf') // Update with your resume path
      if (!response.ok) throw new Error('Download failed')

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'DESU-SREECHARAN-RESUME.pdf')
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(url)

      toast.success('Resume downloaded successfully!')
      setIsVisible(false)
    } catch (error) {
      toast.error('Failed to download resume. Please try again.')
      console.error('Download error:', error)
    }
  }

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            onClick={handleDownload}
            className='fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-40 flex items-center gap-2 px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300'
          >
            <FaFileDownload className='text-lg' />
            <span className='text-sm font-medium'>Resume</span>
          </motion.button>
        )}
      </AnimatePresence>
      <Toaster
        position='bottom-center'
        toastOptions={{
          success: {
            style: {
              background: '#1f2937', // gray-800
              color: '#ffffff',
              border: '1px solid #4b5563', // gray-600
            },
          },
          error: {
            style: {
              background: '#1f2937', // gray-800
              color: '#ffffff',
              border: '1px solid #4b5563', // gray-600
            },
          },
          duration: 3000,
        }}
      />
    </>
  )
}

export default ResumeButton
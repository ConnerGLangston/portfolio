import { motion } from 'framer-motion'

export default function Resume() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto px-4 py-12"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Resume</h2>
        <a
          href="/Conner_Langston_Resume_2025.pdf"
          download
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500"
        >
          Download PDF
        </a>
      </div>
      <div className="w-full h-screen border rounded-lg shadow dark:border-gray-700">
        <iframe
          src="/Conner_Langston_Resume_2025.pdf"
          className="w-full h-full"
          title="Resume"
        />
      </div>
    </motion.section>
  )
}

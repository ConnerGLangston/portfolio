import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-4 py-20 text-center"
    >
      <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
        Hi, I'm Conner Langston
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Cybersecurity student & software engineer intern from Apex, NC.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          to="/projects"
          className="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500"
        >
          See my work
        </Link>
        <a
          href="https://www.linkedin.com/in/conner-langston"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray/10"
        >
          LinkedIn
        </a>
      </div>
    </motion.section>
  )
}

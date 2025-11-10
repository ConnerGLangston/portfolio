import { motion } from 'framer-motion'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'

export default function Resume() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: 'GPA', value: '3.26' },
            { label: 'Graduation', value: 'May 2026' },
            { label: 'Major', value: 'Cybersecurity' },
          ].map((s) => (
            <div key={s.label} className="glass text-center p-4">
              <p className="text-2xl font-bold gradient-text">{s.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold gradient-text">Resume</h2>
          <a
            href="Conner_Langston_Resume_2025.pdf"
            download
            className="btn-primary flex items-center gap-2"
          >
            <ArrowDownTrayIcon className="w-5 h-5" /> Download PDF
          </a>
        </div>

        <div className="w-full h-[75vh] rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
          <iframe
            src="Conner_Langston_Resume_2025.pdf"
            className="w-full h-full"
            title="Resume"
          />
        </div>

        <div className="mt-4 text-center">
          <a
            href="Conner_Langston_Resume_2025.pdf"
            download
            className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Having trouble viewing? Download directly.
          </a>
        </div>
      </motion.div>
    </div>
  )
}
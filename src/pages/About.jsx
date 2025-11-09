import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        I grew up in <strong className="text-indigo-600">Apex, NC</strong> and am pursuing a B.S. in
        Cybersecurity at Penn State with a Smeal Business Certificate, graduating May 2026.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Last summer I engineered a QR-authentication system at Pearson that cut K-5 login time from
        4 minutes to 5 seconds. I like full-stack work, network security, and building tools that
        make life easier for real users.
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        When I'm not coding you'll find me running, experimenting in the kitchen, or cheering on the
        Nittany Lions.
      </p>
    </motion.section>
  )
}

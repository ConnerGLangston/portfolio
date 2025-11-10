import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row items-center gap-10 mb-20"
      >
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold gradient-text mb-4">Hi, I'm Conner Langston</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Cybersecurity student & software engineer intern from Apex, NC.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link to="/projects" className="btn-primary">View My Work</Link>
            <a href="https://linkedin.com/in/conner-langston" target="_blank" rel="noreferrer" className="btn-secondary">LinkedIn</a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500 to-navy rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <img
              src="/headshot.jpg"
              alt="Conner Langston"
              className="relative w-64 h-64 object-cover rounded-full shadow-lg"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/256x256/6366f1/ffffff?text=CL')}
            />
          </div>
        </div>
      </motion.section>

      {/* Highlights */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { emoji: '🧑‍💻', title: 'Full-Stack Developer', desc: 'React • Node • AWS' },
            { emoji: '🔒', title: 'Cybersecurity Focus', desc: 'Ghidra • Snort • Wireshark' },
            { emoji: '🌐', title: 'Network Security', desc: 'TCP/IP • iPerf • IDS' },
          ].map((h) => (
            <div key={h.title} className="glass card-hover p-6 text-center">
              <div className="text-3xl mb-2">{h.emoji}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{h.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{h.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Skills & Tech */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mb-16">
        <h2 className="text-3xl font-bold gradient-text text-center mb-6">Skills & Technologies</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {['React', 'Node.js', 'AWS', 'Java', 'Python', 'SQL', 'Ghidra', 'Snort'].map((s) => (
            <span key={s} className="px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-medium">
              {s}
            </span>
          ))}
        </div>
      </motion.section>

      {/* CTA Banner */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="glass text-center p-8 bg-gradient-to-r from-navy to-indigo-600 text-white">
        <h3 className="text-2xl font-bold mb-2">Let's build something secure together</h3>
        <p className="mb-4">Feel free to reach out for collaborations or opportunities.</p>
        <Link to="/contact" className="btn-secondary bg-white/20 border-white text-white hover:bg-white/30">
          Get In Touch
        </Link>
      </motion.section>
    </div>
  )
}
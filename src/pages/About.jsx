import { motion } from 'framer-motion'
import { AcademicCapIcon, BriefcaseIcon, CpuChipIcon, MapPinIcon } from '@heroicons/react/24/solid'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass p-6 mb-8">
        <h2 className="text-3xl font-bold gradient-text mb-4">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          I grew up in <span className="font-semibold text-navy dark:text-indigo-400">Apex, NC</span> and am pursuing a B.S. in Cybersecurity at Penn State with a Smeal Business Certificate, graduating May 2026.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Last summer I engineered a QR-authentication system at Pearson that cut K-5 login time from 4 minutes to 5 seconds. I love full-stack work, network security, and building tools that make life easier for real users.
        </p>
      </motion.section>

      {/* Timeline */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8">
        <h3 className="text-2xl font-semibold gradient-text mb-4">Experience & Education</h3>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <BriefcaseIcon className="w-6 h-6 text-indigo-600 mt-1" />
            <div>
              <p className="font-semibold">Software Engineer Intern – Pearson</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Jun 2025 – Aug 2025 • Durham, NC</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">Engineered QR-authentication system supporting 5M+ use cases, reducing login time from 4 min to 5 s.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <AcademicCapIcon className="w-6 h-6 text-indigo-600 mt-1" />
            <div>
              <p className="font-semibold">B.S. Cybersecurity – Penn State</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Expected May 2026 • University Park, PA</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">Smeal Business Certificate • GPA 3.26</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills grid */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <h3 className="text-2xl font-semibold gradient-text mb-4">Technical Skills</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: <CpuChipIcon className="w-5 h-5" />, title: 'Languages', items: 'Java, JavaScript, Python, SQL, HTML' },
            { icon: <MapPinIcon className="w-5 h-5" />, title: 'Tools', items: 'AWS, Git, Ghidra, Snort, Wireshark, Node.js' },
          ].map((s) => (
            <div key={s.title} className="glass p-4 flex items-start gap-3">
              <div className="text-indigo-600">{s.icon}</div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">{s.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{s.items}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
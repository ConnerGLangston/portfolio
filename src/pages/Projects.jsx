import { motion } from 'framer-motion'

const projects = [
  {
    title: 'QR Scanner Integrated App',
    desc: 'Reduced K-5 login time from 4 min to 5 s. React + Node + PingAM + AWS S3/EC2.',
    tech: ['React', 'Node.js', 'PingAM', 'AWS'],
    repo: 'https://github.com/ConnerGLangston/qr-portal',
    demo: 'https://qr-demo.connerlangston.com'
  },
  {
    title: 'iPerf Network Optimizer',
    desc: 'TCP throughput testing to find bottlenecks across distributed nodes.',
    tech: ['iPerf', 'Bash', 'Python'],
    repo: 'https://github.com/ConnerGLangston/iperf-tools'
  },
  {
    title: 'Credential Vulnerability Assessment',
    desc: 'Static binary analysis with Ghidra & IDA Pro; brute-force & hash attacks.',
    tech: ['Ghidra', 'IDA Pro', 'Python'],
    repo: 'https://github.com/ConnerGLangston/cred-vuln-assess'
  },
  {
    title: 'Intrusion Detection System',
    desc: 'Real-time malicious traffic detection using Snort with tuned rule-sets.',
    tech: ['Snort', 'Linux', 'Wireshark'],
    repo: 'https://github.com/ConnerGLangston/snort-ids'
  }
]

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Card key={p.title} {...p} />
        ))}
      </div>
    </motion.section>
  )
}

function Card({ title, desc, tech, repo, demo }) {
  return (
    <div className="rounded-xl border dark:border-gray-700 p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{desc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <a
          href={repo}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-indigo-600 hover:underline"
        >
          GitHub
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-indigo-600 hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}

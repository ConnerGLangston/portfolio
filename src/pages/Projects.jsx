import { motion } from 'framer-motion'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'

const projects = [
  {
    title: 'QR Scanner Integrated App',
    desc: 'Reduced K-5 student login time from 4 minutes to 5 seconds with scalable QR authentication. Teacher portal for account/QR management.',
    tech: ['React', 'Node.js', 'PingAM', 'AWS S3', 'AWS EC2', 'SHA512'],
    repo: 'https://github.com/ConnerGLangston/qr-portal',
    demo: 'https://qr-demo.connerlangston.com',
    featured: true,
  },
  {
    title: 'iPerf Network Optimizer',
    desc: 'TCP throughput testing to find bottlenecks across distributed nodes for secure bandwidth allocation.',
    tech: ['iPerf', 'Bash', 'Python', 'TCP/IP'],
    repo: 'https://github.com/ConnerGLangston/iperf-tools',
  },
  {
    title: 'Credential Vulnerability Assessment',
    desc: 'Static binary analysis with Ghidra & IDA Pro; brute-force & hash attacks to expose password weaknesses.',
    tech: ['Ghidra', 'IDA Pro', 'Python', 'Security Analysis'],
    repo: 'https://github.com/ConnerGLangston/cred-vuln-assess',
  },
  {
    title: 'Intrusion Detection System',
    desc: 'Real-time malicious traffic detection using Snort with tuned rule-sets and anomaly detection.',
    tech: ['Snort', 'Linux', 'Wireshark'],
    repo: 'https://github.com/ConnerGLangston/snort-ids',
  },
]

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-3xl font-bold gradient-text text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`glass card-hover p-6 ${p.featured ? 'md:col-span-2' : ''}`}
            >
              {p.featured && (
                <span className="inline-block px-3 py-1 mb-3 text-xs rounded-full bg-gradient-to-r from-indigo-600 to-navy text-white">
                  Featured Project
                </span>
              )}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary text-sm flex items-center gap-2"
                >
                  <CodeBracketIcon className="w-4 h-4" /> Code
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-sm flex items-center gap-2"
                  >
                    <EyeIcon className="w-4 h-4" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
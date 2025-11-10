import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-3xl font-bold gradient-text text-center mb-8">Get In Touch</h2>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <a
            href="mailto:conner.langston@icloud.com"
            className="glass card-hover p-4 flex items-center gap-3 text-gray-800 dark:text-white"
          >
            <EnvelopeIcon className="w-6 h-6 text-indigo-600" />
            <span className="text-sm">conner.langston@icloud.com</span>
          </a>
          <a
            href="https://linkedin.com/in/conner-langston"
            target="_blank"
            rel="noreferrer"
            className="glass card-hover p-4 flex items-center gap-3 text-gray-800 dark:text-white"
          >
            <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-sm">LinkedIn</span>
          </a>
          <div className="glass p-4 flex items-center gap-3 text-gray-800 dark:text-white">
            <MapPinIcon className="w-6 h-6 text-indigo-600" />
            <span className="text-sm">Apex, NC</span>
          </div>
        </div>

        {/* Contact form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="glass p-6 space-y-4"
        >
          <p className="hidden"><label>Don’t fill this out: <input name="bot-field" /></label></p>
          <input type="hidden" name="form-name" value="contact" />

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input type="text" name="name" required className="input-style" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input type="email" name="email" required className="input-style" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
            <textarea name="message" rows={5} required className="input-style" />
          </div>
          <button type="submit" className="btn-primary w-full">Send Message</button>
        </form>
      </motion.div>
    </div>
  )
}
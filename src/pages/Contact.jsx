import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-2xl mx-auto px-4 py-12"
    >
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Contact</h2>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="space-y-4"
      >
        <p className="hidden">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <input type="hidden" name="form-name" value="contact" />

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500"
        >
          Send
        </button>
      </form>

      <div className="mt-8 text-gray-600 dark:text-gray-300">
        <p>
          Or reach me directly at{' '}
          <a
            href="mailto:conner.langston@icloud.com"
            className="text-indigo-600 hover:underline"
          >
            conner.langston@icloud.com
          </a>{' '}
          and{' '}
          <a
            href="https://www.linkedin.com/in/conner-langston"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </motion.section>
  )
}

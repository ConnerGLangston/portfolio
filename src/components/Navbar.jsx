import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [dark, setDark] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    dark
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [dark])

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold gradient-text">Conner Langston</Link>

        {/* desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition ${
                location.pathname === l.to ? 'text-indigo-600' : ''
              }`}
            >
              {l.label}
              {location.pathname === l.to && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600" />
              )}
            </Link>
          ))}
          <button onClick={() => setDark(!dark)} className="w-6 h-6">
            {dark ? <SunIcon className="text-yellow-400" /> : <MoonIcon className="text-gray-700" />}
          </button>
        </div>

        {/* mobile button */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden w-6 h-6">
          {mobileOpen ? <XMarkIcon /> : <Bars3Icon />}
        </button>
      </nav>

      {/* mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
    >
      {children}
    </Link>
  )
}

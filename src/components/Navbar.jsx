import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export default function Navbar() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-gray-800 dark:text-white">
          Conner Langston
        </Link>
        <div className="flex items-center gap-4">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <button onClick={() => setDark(!dark)} className="w-6 h-6">
            {dark ? <SunIcon className="text-yellow-400" /> : <MoonIcon className="text-gray-700" />}
          </button>
        </div>
      </nav>
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

import React from 'react'

function Header({ darkMode, toggleDarkMode }: { darkMode: boolean, toggleDarkMode: () => void }) {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://placehold.co/40x40" 
            alt="AI EduLearn logo" 
            className="mr-2"
          />
          <h1 className="text-2xl font-bold gradient-text">AI EduLearn</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition">Home</a>
          <a href="#" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition">Courses</a>
          <a href="#" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition">Progress</a>
          <a href="#" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition">Ask AI</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition">
            Sign In
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

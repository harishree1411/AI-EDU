import React, { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <HeroSection />
    </div>
  )
}

export default App

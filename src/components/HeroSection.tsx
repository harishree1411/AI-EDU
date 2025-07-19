import React from 'react'

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Learn Smarter With <span className="gradient-text">AI Assistance</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Personalized learning powered by artificial intelligence to help you master new concepts faster and more effectively.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition shadow-md">
                Explore Courses
              </button>
              <button className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                Ask AI
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import WorkExperience from './components/WorkExperience'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="workexperience">
          <WorkExperience />
        </section>
      </main>
    </div>
  )
}

export default App

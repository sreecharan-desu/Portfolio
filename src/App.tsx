import ErrorBoundary from './components/ErrorBoundary'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Timeline from './components/Timeline'
import YouTubeSection from './components/YouTubeSection'

const App = () => {

  return (
    <ErrorBoundary>
        <>
        <PortfolioV2 />
        </>
    </ErrorBoundary>
  )
}

export default App



function PortfolioV2() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
          <Hero />
          <About />
          <Projects />
          <Skills/>
          <Timeline/>
          <YouTubeSection/>
          <Footer />
  </div>)
}
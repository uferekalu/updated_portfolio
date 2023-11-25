import AboutSection from './components/AboutSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectSection from './components/ProjectSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className='container px-6 mt-24 py-4 mx-auto'>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
    </main>
  )
}

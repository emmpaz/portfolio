
import './App.css'
import Background from './lib/Background'
import About from './sections/About'
import Hero from './sections/Hero'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import { useInView } from 'react-intersection-observer'
import Projects from './sections/Projects'


function App() {

  const [heroRef, heroInView] = useInView({
    threshold: 0.4,
    triggerOnce: false,
  })

  const [aboutRef, aboutInView] = useInView({
    threshold: 0.4,
    triggerOnce: false,
  })

  const [experienceRef, experienceInView] = useInView({
    threshold: 0.4,
    triggerOnce: false,
  })

  const [contactRef, contactInView] = useInView({
    threshold: 0.4,
    triggerOnce: false,
  })

  const [projectRef, projectInView] = useInView({
    threshold: 0.4,
    triggerOnce: false,
  })

  return (
    <Background>
      <Hero reference={heroRef} inView={heroInView} />
      <div className="h-48 w-full" />
      <About reference={aboutRef} inView={aboutInView} />
      <div className="h-48 w-full" />
      <Experience reference={experienceRef} inView={experienceInView} />
      <div className="h-48 w-full" />
      <Projects reference={projectRef} inView={projectInView}/>
      <div className="h-48 w-full" />
      <Contact reference={contactRef} inView={contactInView} />
    </Background>
  )
}

export default App;

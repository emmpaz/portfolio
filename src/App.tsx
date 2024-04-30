
import './App.css'
import Background from './lib/bg'
import About from './sections/About'
import Hero from './sections/Hero'
import Experience from './sections/Experience'
import Contact from './sections/Contact'


function App() {


  return (
    <Background>
      <Hero/>
      <div className='h-48 w-full'/>
      <About/>
      <div className='h-48 w-full'/>
      <Experience/>
      <div className='h-48 w-full'/>
      <Contact/>
    </Background>
  )
}

export default App

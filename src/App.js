
import './css/App.css';
import Home from './Home.js';
import Projects from './Projects.js';
import bg from './background-smaller.png';
import DotRing from './DotRing';
import About from './About';
import Tom from './Tom';
import { useState } from 'react';
import Paz from './Paz';

function App() {
  const [project, setProject] = useState({state: false, whichProject : ""});

  const toggleHandler = (which) => {
    setProject(project => ({
      state: !project.state,
      whichProject: which
    }));
  }
  return (
    <div className="App">
      <DotRing/>
      <div className='bg-container'>
        <div className='black'></div>
        <img className='bg' src={bg}></img>
      </div>
      <div className='section-container'>
        <div className='section'>
          <Home/>
        </div>
        <div className='section'>
          <Projects tomState={project} setting={toggleHandler}/>
          {(project.whichProject === "tom") ? <Tom tomState={project} setting={toggleHandler}/> : <></>}
          {(project.whichProject === "paz") ? <Paz pazState={project} setting={toggleHandler}/> : <></>}
        </div>
        <div className='section'>
          <About/>
        </div>
      </div>
    </div>
  );
}

export default App;

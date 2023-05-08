
import './App.css';
import Home from './Home.js';
import Projects from './Projects.js';
import bg from './background-smaller.png';
import DotRing from './DotRing';
import About from './About';
import Tom from './Tom';
import { useState } from 'react';

function App() {
  const [tom, setTom] = useState(false);

  const toggleHandler = () => {
    setTom(!tom);
  }
  return (
    <div className="App">
      <DotRing/>
      <div className='bgContainer'>
        <div className='black'></div>
        <img className='bg' src={bg}></img>
      </div>
      <div className='sectionContainer'>
        <div className='section'>
          <Home/>
        </div>
        <div className='section'>
          <Projects tomState={tom} setting={toggleHandler}/>
            <Tom tomState={tom} setting={toggleHandler}/>
          
        </div>
        <div className='section'>
          <About/>
        </div>
      </div>
    </div>
  );
}

export default App;

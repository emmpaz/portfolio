
import './App.css';
import Home from './Home.js';
import Projects from './Projects.js';
import bg from './background-smaller.png';
import DotRing from './DotRing';

function App() {
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
          <Projects/>
        </div>
        <div className='section'>
          TEST 3
        </div>
      </div>
    </div>
  );
}

export default App;

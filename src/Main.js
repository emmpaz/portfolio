
import './css/App.css';
import Home from './Home.js';
import bg from './background-smaller.png';
import DotRing from './DotRing';

function Main() {
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
      </div>
    </div>
  );
}

export default Main;


import './css/App.css';
import Projects from './Projects.js';
import About from './About';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Paz from './Paz';
import Tom from './Tom';
import Oasis from './Oasis';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="projects/paz" element={<Paz/>}/>
        <Route path="projects/tom" element={<Tom/>}/>
        <Route path="projects/oasis" element={<Oasis/>}/>
      </Routes>
    </Router>
  );
}

export default App;

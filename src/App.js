
import './css/App.css';
import Projects from './Projects.js';
import About from './About';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;

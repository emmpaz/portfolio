import './css/Projects.css';
import github from './icons/github-white.png';
import linkedin from './icons/linkedin-white.png';
import twitter from './icons/twitter-white.png';
import bg from './background-smaller.png';
import DotRing from './DotRing';
import { MouseContext } from "./mouse-context";
import { useContext } from 'react';

function Projects(props) {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    return (
        <div className="App">
      <DotRing/>
      <div className='bg-container'>
        <div className='black'></div>
        <img className='bg' src={bg}></img>
      </div>
      <div className='section-container'>
        <div className='section'>
        <div className={'projects-container'}>
        <div className='icon-container'>
            <div className='icon-container-flex'>
                <img onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}  src={github} />
                <img onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}  src={linkedin} />
                <img onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}  src={twitter} />
            </div>
        </div>
        <div className='projects-list-container'>
            <div className='projects-list-container-flex'>
                <div className='tom-container'>
                    <p onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")} onClick={() => {props.setting("tom")}} className='tom'>tom concrete.</p>
                </div>
                <div className='paz-container'>
                    <p onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")} onClick={() => {props.setting("paz")}} className='paz'>paz construction.</p>
                </div>
                 <div className='university-container'>
                    <p onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")} className='university'>university projects.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
      </div>
    </div> 
    );
}

export default Projects;
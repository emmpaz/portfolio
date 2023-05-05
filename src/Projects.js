import './Projects.css';
import github from './icons/github-white.png';
import linkedin from './icons/linkedin-white.png';
import twitter from './icons/twitter-white.png';
import { MouseContext } from "./mouse-context";
import { useContext } from 'react';

function Projects() {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    return ( 
        <div className='HomeContainer'>
        <div className='IconContainer'>
            <div className='IconContainer-flex'>
                <img onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}  src={github} />
                <img onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}  src={linkedin} />
                <img onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}  src={twitter} />
            </div>
        </div>
        <div className='name-and-welome-container'>
            <div className='name-and-welome-container-flex'>
                <div className='tom-container'>
                    <p onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")} className='tom'>tom concrete.</p>
                </div>
                <div className='paz-container'>
                    <p onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")} className='paz'>paz construction.</p>
                </div>
                 <div className='university-container'>
                    <p onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")} className='university'>university projects.</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Projects;
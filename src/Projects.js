import './css/Projects.css';
import github from './icons/github-white.png';
import linkedin from './icons/linkedin-white.png';
import twitter from './icons/twitter-white.png';
import bg from './background-smaller.png';
import DotRing from './DotRing';
import { MouseContext } from "./mouse-context";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Projects(props) {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    const navigate = useNavigate();

    return (
        <div className="App">
            <DotRing />
            <div className='bg-container'>
                <div className='black'></div>
                <img className='bg' src={bg}></img>
            </div>
            <div className='section-container'>
                <div className='section'>
                    <div className='projects-container'>
                        <div className='icon-container'>
                            <div className='icon-container-flex'>
                            <a href='https://github.com/emmpaz' target="_blank" className='logo-container-link-paz'>
                    <img onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")} src={github} />
                </a>
                <a href='https://www.linkedin.com/in/emmanuelpaz23/' target="_blank" className='logo-container-link-paz'>
                    <img onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")} src={linkedin} />
                </a>
                <a href='https://twitter.com/swe_emmanuel' target="_blank" className='logo-container-link-paz>'>
                    <img onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")} src={twitter} />
                </a>
                            </div>
                        </div>
                        <div className='projects-to-home-container'>
                            <p onMouseEnter={() => cursorChangeHandler("hovered")}
                                        onMouseLeave={() => cursorChangeHandler("")} onClick={() => {navigate("/"); cursorChangeHandler("")}}>
                                home
                            </p>
                        </div>
                        <div className='projects-list-container'>
                            <div className='projects-list-container-flex'>
                                <div className='tom-container'>
                                    <p onMouseEnter={() => cursorChangeHandler("hovered")}
                                        onMouseLeave={() => cursorChangeHandler("")} onClick={() => { navigate("/projects/tom"); cursorChangeHandler("") }} className='tom'>tom concrete.</p>
                                </div>
                                <div className='paz-container'>
                                    <p onMouseEnter={() => cursorChangeHandler("hovered")}
                                        onMouseLeave={() => cursorChangeHandler("")} onClick={() => { navigate("/projects/paz"); cursorChangeHandler("") }} className='paz'>paz construction.</p>
                                </div>
                                <div className='university-container'>
                                <a href='https://github.com/emmpaz' target="_blank" className='logo-container-link-paz>' style={{textDecoration : 'none'}}>
                                    <p onMouseEnter={() => cursorChangeHandler("hovered")}
                                        onMouseLeave={() => cursorChangeHandler("")} className='university'>other projects.</p>
                                </a>
                                </div>
                                <div className='more-to-come-container'>
                                    <p>more to come.</p>
                                </div>
                            </div>
                            <div className='projects-description-flex'>
                                <p>
                                    here are some of my projects
                                    that i have designed and developed.
                                    most of these are my start to
                                    web designing. my other projects directs you to all my github
                                    which contains university projects, personal projects and my internship project.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
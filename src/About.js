import './css/About.css';
import github from './icons/github-white.png';
import linkedin from './icons/linkedin-white.png';
import twitter from './icons/twitter-white.png';
import { MouseContext } from "./mouse-context";
import { useContext } from 'react';

import bg from './background-smaller.png';
import DotRing from './DotRing';
import { useNavigate } from 'react-router-dom';

function About() {
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
                    <div className='about-container'>
                        <div className='icon-container'>
                            <div className='icon-container-flex'>
                            <a href='https://github.com/emmpaz' target="_blank" >
                    <img onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")} src={github} />
                </a>
                <a href='https://www.linkedin.com/in/emmanuelpaz23/' target="_blank" >
                    <img onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")} src={linkedin} />
                </a>
                <a href='https://twitter.com/swe_emmanuel' target="_blank" className='logo-container-link-paz>'>
                    <img onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")} src={twitter} />
                </a>
                            </div>
                        </div>
                        <div className='about-to-home-container'>
                            <p onMouseEnter={() => cursorChangeHandler("hovered")}
                                        onMouseLeave={() => cursorChangeHandler("")} onClick={() => {navigate("/"); cursorChangeHandler("")}}>
                                home
                            </p>
                        </div>
                        <div className='about-content-container'>
                            <div className='about'>
                                my name is emmanuel paz and i am a developer
                                turned web designer. i began designing in 2022 with degree in software engineering. my vision for creating designs
                                is to portray my clients vision in an aesthetic design.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
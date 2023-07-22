import github from './icons/github-white.png';
import linkedin from './icons/linkedin-white.png';
import twitter from './icons/twitter-white.png';
import { MouseContext } from "./mouse-context";
import { useContext } from 'react';
import bg from './background-smaller.png';
import DotRing from './DotRing';
import './css/Paz.css';
import logo from './logo.png';
import { useNavigate } from 'react-router-dom';

function Paz(props) {

    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    const navigate = useNavigate();

    return (
        <div className='App'>
            <DotRing />
            <div className='bg-container'>
                <div className='black'></div>
                <img className='bg' src={bg}></img>
            </div>
            <div className='section-container'>
                <div className='section'>
                    <div className='paz-container-display'>
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
                        <div className='back-container'>
                            <p onMouseEnter={() => cursorChangeHandler("hovered")}
                                onMouseLeave={() => cursorChangeHandler("")} onClick={() => { navigate("/projects"); cursorChangeHandler("") }}>BACK</p>
                        </div>
                        <div className='content-container'>
                            <div className='logo-container-paz'>
                                <a href='https://pazconstruction.co' target="_blank" className='logo-container-link-paz'>
                                    <img onMouseEnter={() => cursorChangeHandler("hovered")}
                                        onMouseLeave={() => cursorChangeHandler("")} src={logo} />
                                </a>
                            </div>
                            <div className='text-container'>
                                <div className='role-container'>
                                    <p className='role-title'>role</p>
                                    <p>web developer</p>
                                </div>
                                <div className='description-container'>
                                    <p className='description-title'>description</p>
                                    <p>I designed this website using Figma. Once designed, I developed this site using React. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Paz;
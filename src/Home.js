import { useNavigate } from 'react-router-dom';
import './css/Home.css';
import github from './icons/github-white.png';
import linkedin from './icons/linkedin-white.png';
import twitter from './icons/twitter-white.png';
import { MouseContext } from "./mouse-context";
import { useContext } from 'react';

function Home() {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    const navigate = useNavigate();

    return (
        <div className='home-container'>
            <div className='icon-container'>
                <div className='icon-container-flex'>
                    <a href='https://github.com/emmpaz' target="_blank">
                        <img onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")} src={github} />
                    </a>
                    <a href='https://www.linkedin.com/in/emmanuelpaz23/' target="_blank">
                        <img onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")} src={linkedin} />
                    </a>
                    <a href='https://twitter.com/swe_emmanuel' target="_blank">
                        <img onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")} src={twitter} />
                    </a>
                </div>
            </div>
            <div className='name-and-welome-container'>
                <div className='name-and-welome-container-flex'>
                    <div className='message-container-flex'>
                        <p>plz view on desktop. currently developing for mobile.</p>
                    </div>
                    <div className='name-container'>
                        <p className='name'>emmanuel</p>
                    </div>
                    <div className='welcome-container'>
                        <p className='welcome'>welcome to my portfolio.</p>
                    </div>
                </div>
            </div>
            <div className='catergory-container'>
                <div className='catergory-container-flex'>
                    <p onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")} onClick={() => { navigate("/projects"); cursorChangeHandler("") }}>projects</p>
                    <p onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")} onClick={() => { navigate("/about"); cursorChangeHandler("") }}>about</p>
                    <a href='mailto: mannypaz15@gmail.com' style={{textDecoration : 'none'}}>
                        <p onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}>contact</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
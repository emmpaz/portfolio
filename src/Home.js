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

    const projectHandler = () => {
        navigate("/projects");
    }

    return (
        <div className='home-container'>
            <div className='icon-container'>
                <div className='icon-container-flex'>
                    <img onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")} src={github} />
                    <img onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")} src={linkedin} />
                    <img onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")} src={twitter} />
                </div>
            </div>
            <div className='name-and-welome-container'>
                <div className='name-and-welome-container-flex'>
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
                        onMouseLeave={() => cursorChangeHandler("")} onClick={() => {projectHandler()}}>projects</p>
                    <p onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}>about</p>
                    <p onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}>contact</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
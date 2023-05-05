import './Home.css';
import github from './icons/github-white.png';
import linkedin from './icons/linkedin-white.png';
import twitter from './icons/twitter-white.png';
import { MouseContext } from "./mouse-context";
import { useContext } from 'react';

function Home() {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    return (
        <div className='HomeContainer'>
            <div className='IconContainer'>
                <div className='IconContainer-flex'>
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
                    <div className='NameContainer'>
                        <p className='Name'>emmanuel</p>
                    </div>
                    <div className='WelcomeContainer'>
                        <p className='welcome'>welcome to my portfolio.</p>
                    </div>
                </div>
            </div>
            <div className='CatergoryContainer'>
                <div className='CatergoryContainer-flex'>
                    <p onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}>projects</p>
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
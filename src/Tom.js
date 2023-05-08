import github from './icons/github-white.png';
import linkedin from './icons/linkedin-white.png';
import twitter from './icons/twitter-white.png';
import { MouseContext } from "./mouse-context";
import { useContext } from 'react';
import './Tom.css';

function Tom(props){
    
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    return (
        <div className={(props.tomState) ? 'TomContainer' : 'TomContainerNone'}>
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
            <div className='about-container'>
                <div className='about'>
                my name is emmanuel paz and i am a developer
                turned web designer. I began designing in 2022 with degree in software engineering. My vision for creating designs
                is to potray my clients vision in an aesthetic design.
                </div>
            </div>
            <div>
                <p onClick={() => {props.setting()}}>BACK</p>
            </div>
        </div>
    );
}

export default Tom;
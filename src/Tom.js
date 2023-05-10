import github from './icons/github-white.png';
import linkedin from './icons/linkedin-white.png';
import twitter from './icons/twitter-white.png';
import { MouseContext } from "./mouse-context";
import { useContext } from 'react';
import './css/Tom.css';
import logo from './Tom Concrete-13.png';

function Tom(props) {

    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    return (
        <div className={(props.tomState.state) ? 'tom-container-display' : 'tom-container-none'}>
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
            <div className='back-container'>
                <p onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")} onClick={() => { props.setting("") }}>BACK</p>
            </div>
            <div className='content-container'>
                <div className='logo-container-tom'>
                    <a href='https://tomconcrete.co' target="_blank" className='logo-container-link-tom'>
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
                        <p>dsnjakdnsadjkasndjkasdjsdakdnkansknadlsan</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tom;
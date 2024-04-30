
import spotify from '../assets/spotify.png';
import linkedin from '../assets/linkedin.png';
import git from '../assets/git.png';

function Contact(){
    return(
        <div className="h-screen w-full font-incon text-slate-50">
            <div className="h-full w-full flex justify-center items-center">
                <div className='pr-2 w-96'>
                    <p className="text-2xl py-2">Contact</p>
                    <p className='text-sm'>Connect with me on Linkedin and follow my Spotify account to see what I listen to while coding, working out, on a plane</p>
                </div>
                <div className='pl-2'>
                    <a href="https://open.spotify.com/user/mannypaz_" target='_blank'>
                        <img src={spotify} className="h-10 w-10 my-3"/>
                    </a>
                    <a href='https://www.linkedin.com/in/emmanuelpaz23/' target='_blank'>
                        <img src={linkedin} className="h-10 w-10 my-3"/>
                    </a>
                    <a href='https://github.com/emmpaz' target='_blank'>
                        <img src={git} className="h-10 w-10"/>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Contact;
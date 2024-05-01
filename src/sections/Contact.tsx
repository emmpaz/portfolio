
import spotify from '../assets/icons/spotify.png';
import linkedin from '../assets/icons/linkedin.png';
import git from '../assets/icons/git.png';

function Contact({ reference, inView }: { reference: any; inView: boolean }){
    return(
        <div className={`h-screen w-full grid section opacity-0 transform translate-y-20 transition duration-2000 ease-out ${
            inView ? 'opacity-100 translate-y-0' : ''
        }}`} ref={reference}>
            <div className="h-full w-full flex-col flex sm:flex-row justify-center items-center text-slate-50 font-incon">
                <div className='p-2 w-2/3 max-w-96 min-w-80'>
                    <p className="text-2xl py-2">Contact</p>
                    <p className='text-sm'>Connect with me on Linkedin and follow my Spotify account to see what I listen to while coding, working out, on a plane</p>
                </div>
                <div className='sm:pl-2 sm:block flex justify-center items-center'>
                    <a href="https://open.spotify.com/user/mannypaz_" target='_blank'>
                        <img src={spotify} className="h-10 w-10 m-3"/>
                    </a>
                    <a href='https://www.linkedin.com/in/emmanuelpaz23/' target='_blank'>
                        <img src={linkedin} className="h-10 w-10 m-3"/>
                    </a>
                    <a href='https://github.com/emmpaz' target='_blank'>
                        <img src={git} className="h-10 w-10 m-3"/>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Contact;
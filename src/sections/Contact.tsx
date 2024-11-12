
import spotify from '../assets/icons/spotify.png';
import linkedin from '../assets/icons/linkedin.png';
import git from '../assets/icons/git.png';

function Contact({ reference, inView }: { reference: any; inView: boolean }){
    return(
        <div className={`min-h-screen w-full grid grid-rows-1 section opacity-0 transform transition duration-2000 ease-out ${
            inView ? 'opacity-100 translate-y-0' : ''
        }}`} ref={reference}>
            <div className="h-full w-full flex-col flex sm:flex-row justify-center items-center text-slate-50 font-incon ">
                <div className='p-2 w-2/3 max-w-96 min-w-80'>
                    <p className="text-2xl py-2">contact</p>
                    <p className='text-sm'>connect with me on linkedin and follow my spotify account to see what I listen to while coding, working out, on a plane or running</p>
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
            <div className="h-fit self-end text-slate-50 font-incon grid justify-center pb-2">
                    emmanuel paz © 2024
            </div>
        </div>
    )
}

export default Contact;
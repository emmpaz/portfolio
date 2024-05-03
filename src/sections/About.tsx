

import plane from '../assets/icons/plane.png';
import headphones from '../assets/icons/headphones.png';
import dumbbell from '../assets/icons/dumbbell.png';
import me from '../assets/pics/me.png';

function About({ reference, inView }: { reference: any; inView: boolean }) {
    return (
        <div className={`min-h-screen w-full grid section opacity-0 transform transition duration-2000 ease-out ${inView ? 'opacity-100 translate-y-0' : ''
            }}`} ref={reference}>
            <div className="flex justify-center items-center md:flex-row flex-col">
                <div className="text-slate-50 font-incon flex flex-col justify-center items-center md:w-1/2 h-full p-10">
                    <h1 className='text-2xl text-center'>Hello my name is Emmanuel Paz.</h1>
                    <div className="max-w-2xl pt-10">
                        <p className=" text-center">
                            After graduting in May '23 from Iowa State and a grewsome job search,
                            I am proud to start my Software Engineering career at Okta as a DSA (Developer Support Associate).
                        </p>
                        <p className='pt-5 text-center'>
                            I enjoy full-stack developement, but I am currently focusing on gaining a deeper understanding in frontend developement (Next.js) and cloud deployment with CI/CD.
                        </p>
                        <p className="pt-5 text-center">
                            I am from a small town from Kansas, moved to Chicago and now moving to Salt Lake City.
                            Being a first-generation college graduate has given me a unique drive to excel wherever I am.
                        </p>
                    </div>
                    <div className="flex w-full justify-between max-w-md mt-10">
                        <div className={`fade-icons ${inView ? 'animate' : ''} w-10 h-10`}>
                            <img src={plane} className='w-full' />
                        </div>
                        <div className={`fade-icons ${inView ? 'animate' : ''} w-10 h-10`}>
                            <img src={headphones} className='w-full' />
                        </div>
                        <div className={`fade-icons ${inView ? 'animate' : ''} w-10 h-10`}>
                            <img src={dumbbell} className="w-full" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <p>I enjoy traveling, listening to music and lifting heavy things.</p>
                    </div>
                </div>
                <div className="w-1/2 max-w-64">
                    <img src={me} className="w-full rounded-md" />
                </div>
            </div>
        </div>
    )
}

export default About;
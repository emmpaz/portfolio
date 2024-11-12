

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
                    <h1 className='text-2xl text-center'>hello my name is emmanuel paz.</h1>
                    <div className="max-w-2xl pt-10">
                        <p className=" text-center">
                            after graduating in May '23 from Iowa State with a degree in software engineering and a minor spanish,
                            i am proud to start my software engineering career at okta as a DSA (Developer Support Associate).
                        </p>
                        <p className='pt-5 text-center'>
                            i enjoy full-stack developement, but I am currently focusing on gaining a deeper understanding in frontend developement (Next.js) and cloud deployment with CI/CD.
                        </p>
                        <p className="pt-5 text-center">
                            i am from a small town from kansas but am currently in salt lake city 🏔️.
                            being first-generation college graduate has given me a unique drive to excel wherever I am.
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
                        <p>i enjoy traveling, listening to music and lifting heavy things.</p>
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
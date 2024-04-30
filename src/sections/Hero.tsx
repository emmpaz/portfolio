import { useEffect, useRef } from "react";
import Typed from "typed.js";




function Hero({ reference, inView }: { reference: any; inView: boolean }){


    const el = useRef(null);
    const typed = useRef<Typed | null>(null);

    useEffect(() => {
        const options = {
            strings : [
                'welcome to my portfolio.',
                'take your time and look around.',
                ':)'
            ],
            typeSpeed: 70,
            backSpeed: 50
        };
        typed.current = new Typed(el.current, options);

        return () => typed.current?.destroy();

    }, [])

    return(
        <div className={`h-screen w-full grid section opacity-0 transform translate-y-20 transition duration-2000 ease-out ${
            inView ? 'opacity-100 translate-y-0' : ''
        }`} ref={reference}>
            <div className=" text-slate-50 font-incon text-lg  justify-self-center self-center">
                <h1 className="text-6xl font-semibold">Emmanuel Paz</h1>
                <div className="flex">
                    <h2 ref={el}/>
                </div>
                <p className="text-xs text-center pt-20 ease-in transition duration-2000 fade-in-text">scroll</p>
            </div>
        </div>
    )
}

export default Hero;
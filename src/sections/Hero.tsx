import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import spotify from '../assets/icons/spotify.png';
import play from '../assets/icons/player/play.png';
import pause from '../assets/icons/player/pause.png';
import back from '../assets/icons/player/left.png';
import forward from '../assets/icons/player/right.png';

interface Song{
    title: string,
    artist: string,
    duration: number
}

const songs : Song[] = [
    {
        title: "Kentucky",
        artist: "Hippo Campus",
        duration: 180
    },
    {
        title: "Nights",
        artist: "Frank Ocean",
        duration: 210
    },
    {
        title: "Vertigo",
        artist: "Khalid",
        duration: 270
    },
    {
        title: "Jesus Lord",
        artist: "Kanye West",
        duration: 573
    }
]

function Hero({ reference, inView }: { reference: any; inView: boolean }) {


    const el = useRef(null);
    const typed = useRef<Typed | null>(null);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        let interval: number;

        if(isPlaying){
            interval = setInterval(() => {
                setElapsedTime((prev) => {
                    if(prev >= songs[currentSongIndex].duration){
                        handleForwardClick();
                        return 0;
                    }
                    return prev + 1;
                });
            }, 1000)
        }
        
        return () => clearInterval(interval);


    }, [isPlaying, currentSongIndex]);

    useEffect(() => {
        const options = {
            strings: [
                'welcome to my portfolio.',
                'above are my favorite songs.',
                'look through them.',
                "then you can move on."
            ],
            typeSpeed: 70,
            backSpeed: 50
        };
        typed.current = new Typed(el.current, options);

        return () => typed.current?.destroy();
    }, []);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleBackClick = () => {
        setCurrentSongIndex((prev) => (prev === 0 ? songs.length - 1: prev - 1));
        setElapsedTime(0);
        setIsPlaying(true);
    }

    const handlePlayPauseClick = () => setIsPlaying((prev) => !prev);

    const handleForwardClick = () => {
        setCurrentSongIndex((prev) => (prev === songs.length - 1 ? 0: prev + 1));
        setElapsedTime(0);
        setIsPlaying(true);
    }

    const progress = (elapsedTime / songs[currentSongIndex].duration) * 100;

    return (
        <div className={`h-screen w-full grid grid-rows-3 section opacity-0 transform transition duration-2000 ease-out ${inView ? 'opacity-100 translate-y-0' : ''
            }`} ref={reference}>
            <div className="h-fit text-slate-50 font-incon self-center w-full flex justify-center">
                <div className="border-2 flex flex-col p-5 h-fit w-11/12 rounded-lg" style={{maxWidth: '25rem'}}>
                    <div className="flex w-full">
                        <a className="mr-2 mt-1 flex-shrink-0 h-fit" href="https://open.spotify.com/user/mannypaz_" target="_blank">
                            <img src={spotify} className="w-8 h-8" />
                        </a>
                        <div className="flex flex-col w-full">
                            <div>
                                <p>{songs[currentSongIndex].title}</p>
                                <p>{songs[currentSongIndex].artist}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <p>{formatTime(elapsedTime)}</p>
                                <div className="ml-2 border transition-all duration-1000" style={{width: `${progress}%`}}/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <button 
                            onClick={handleBackClick}
                            className="pr-2"
                        >
                            <img src={back} className="h-5 w-5 flex-shrink-0"/>
                        </button>
                        <button 
                            onClick={handlePlayPauseClick}
                            className="px-1"
                        >
                            <img src={(isPlaying ? pause : play)} className="h-5 w-5 flex-shrink-0"/>
                        </button>
                        <button 
                            onClick={handleForwardClick}
                            className="pl-2"
                        >
                            <img src={forward} className="h-5 w-5 flex-shrink-0"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-full text-slate-50 font-incon text-lg w-full flex flex-col justify-center items-center">
                <h1 className="text-6xl font-semibold">Emmanuel Paz</h1>
                <div className="flex">
                    <h2 ref={el} />
                </div>
            </div>
            <div className="h-fit grid text-slate-50 font-incon text-lg pb-5 self-end">
                <p className="text-xs ease-in transition duration-2000 fade-in-text justify-self-center">scroll</p>
            </div>
        </div>
    )
}

export default Hero;
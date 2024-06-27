import { motion } from "framer-motion";

const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};


function Card(
    {
        title,
        timeline,
        location,
        company,
        inView
    }:
    {
        title: string,
        timeline: string,
        bullets?: string[],
        location: string,
        company: string,
        inView: boolean
    }
){

    return(
        <motion.div 
        variants={item}
        className={` ${inView ? 'opacity-100' : 'opacity-0'} w-10/12 border-l pl-2 my-2 transition-opacity duration-1000`}>
            <div className="flex justify-between">
                <p className="text-xs">{timeline}</p>
                <p className="text-sm opacity-50">{location}</p>
            </div>
            <p className="text-lg">{title}</p>
            <p className="text-sm opacity-50">{company}</p>
        </motion.div>
    )
}

export default Card;
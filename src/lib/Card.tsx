


function Card(
    {
        title,
        timeline,
        location,
        company,
        delay,
        inView
    }:
    {
        title: string,
        timeline: string,
        bullets?: string[],
        location: string,
        company: string,
        delay: number,
        inView: boolean
    }
){

    return(
        <div className={` ${inView ? 'opacity-100' : 'opacity-0'} w-10/12 border-l pl-2 my-2 transition-opacity duration-1000 delay-${delay}`}>
            <div className="flex justify-between">
                <p className="text-xs">{timeline}</p>
                <p className="text-sm opacity-50">{location}</p>
            </div>
            <p className="text-lg">{title}</p>
            <p className="text-sm opacity-50">{company}</p>
        </div>
    )
}

export default Card;



function Card(
    {
        title,
        timeline,
        location,
        company
    }:
    {
        title: string,
        timeline: string,
        bullets?: string[],
        location: string,
        company: string
    }
){

    return(
        <div className=" w-10/12 border-l pl-2 my-2">
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
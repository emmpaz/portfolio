import ProjectCard from "../lib/ProjectCard";



function Projects({ reference, inView }: { reference: any; inView: boolean }){
    const projects = [
        {
            title: "TrueImpact",
            description: "A volunteering certification system",
            tags: [
                "Next.js", "Tailwind", "AWS", "Docker"
            ],
            githubLink: "https://github.com/emmpaz/operationv",
        },
        {
            title: "Cacyno",
            description: "A blackjack game",
            tags: [
                "Android", "Volley", "Web Sockets"
            ],
            githubLink: "https://github.com/emmpaz/Cacyno",
        },
        {
            title: "PrairieLearn",
            description: "An open-source assignment platform hosted on university infrastructure",
            tags: [
                "Docker", "Nginx", "Javascript"
            ],
            githubLink: "https://github.com/emmpaz",
        },
        {
            title: "Tom Concrete LLC",
            description: "Website for a construction company",
            tags: [
                "React"
            ],
            githubLink: "https://github.com/emmpaz/tomconstruction",
            website: true,
            link: "https://tomconcrete.co/"
        },
        {
            title: "Oasis Coffee Shop",
            description: "Website for my coffee shop",
            tags: [
                "React"
            ],
            githubLink: "https://github.com/oasiscoffee/oasis",
            website: true,
            link: "https://oasiscoffeeshop.co"
        }

    ]
    return(
        <div className={`min-h-screen w-full grid section opacity-0 transform transition duration-2000 ease-out ${
            inView ? 'opacity-100 translate-y-0' : ''
        }}`} ref={reference}>
            <div className="h-full w-full flex text-slate-50 font-incon justify-center">
                <div className="flex flex-col items-center max-w-5xl">
                    <h1 className="text-2xl">Projects</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {
                            projects.map(i =>  <ProjectCard {...i}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
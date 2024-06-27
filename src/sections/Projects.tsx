import ProjectCard from "../lib/ProjectCard";
import { motion } from "framer-motion";


const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Controls the delay between each child animation
      },
    },
  };

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
                "Next.js", "CDN (Cloudinary)"
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
        },
        {
            title: "URL Shortener",
            description: "A url shortener with an expiration option",
            tags: [
                "Next.js", "Tailwind", "Redis DB"
            ],
            githubLink: "https://github.com/emmpaz/url-shortener",
            website: true,
            link: "https://shrt3r.netlify.app/"
        },
        {
            title: "Aura",
            description: "A minimilistic music player for work",
            tags: [
                "Next.js", "Tailwind", "Auth0", "Google Apis", "Framer"
            ],
            githubLink : "https://github.com/emmpaz/Aura",
            website: true,
            link: "https://auramusic.netlify.app/"
        }
    ]
    
    return(
        <div className={`min-h-screen w-full grid section opacity-0 transform transition duration-2000 ease-out ${
            inView ? 'opacity-100 translate-y-0' : ''
        }}`} ref={reference}>
            <div className="h-full w-full flex text-slate-50 font-incon justify-center">
                <div className="flex flex-col items-center max-w-5xl">
                    <h1 className="text-2xl">Projects</h1>
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                        variants={container}
                        animate={inView  ? 'visible' : 'hidden'}
                        >
                        {
                            projects.map(i =>  <ProjectCard {...i}/>)
                        }
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
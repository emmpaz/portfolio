import git from '../assets/icons/git.png';
import ext from '../assets/icons/link.png';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    githubLink: string;
    website ?: boolean;
    link ?: string;
}

function ProjectCard({ title, description, tags, githubLink, website, link }: ProjectCardProps) {
    return (
        <div className="border rounded-lg p-6 m-3">
            <div className="flex">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            {website && 
                <a href={link} target='_blank'>
                    <img src={ext} className="h-4 pl-1"/>
                </a>
            }
            </div>
            <p className=" text-gray-400 mb-4 text-sm">{description}</p>
            <div className="flex flex-wrap mb-4">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-indigo-600 text-white rounded-full px-2 text-xs font-semibold mr-2 mb-2"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex justify-between">
                <a href={githubLink}>
                    <img src={git} className="w-7"/>
                </a>
            </div>
        </div>
    );
}


export default ProjectCard;
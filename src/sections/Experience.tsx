import Card from "../lib/Card";
import resume from '../assets/Emmanuel_Paz_Resume.pdf';
import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2, // Controls the delay between each child animation
        },
    },
};

function Experience({ reference, inView }: { reference: any; inView: boolean }) {

    return (
        <motion.div className={`min-h-screen w-full grid section opacity-0 transform transition duration-2000 ease-out ${inView ? 'opacity-100 translate-y-0' : ''
            }}`} ref={reference}>
            <div className="w-full h-full font-incon text-slate-50 flex justify-center items-center flex-col sm:flex-row ">
                <motion.div 
                    variants={container}
                    animate={inView ? 'visible' : 'hidden'}
                    className="w-1/2 max-w-xl min-w-80 flex flex-col items-center">
                    {/* <Card
                        title="Developer Support Engineer"
                        timeline="Aug. 2024 - Present"
                        bullets = {[
                            "Developed coding problems and solutions for training multiple LLM coding chatbots for performing data analytics",
                            "Evaluated code quality produced by AI models for correctness, performance, and helpfulness to the user",
                            "Train models with languages including Python, Javascript, C++, NodeJS, ReactJS, and ExpressJS",
                            "Participated in code reviews, making sure submissions were correct and followed style guidelines"
                        ]}
                        
                        location="Salt Lake City, UT"
                        company="Okta"
                    /> */}
                    <Card
                        title="Prompt Engineer"
                        timeline="Dec. 2023 - Present"
                        bullets={[
                            "Developed coding problems and solutions for training multiple LLM coding chatbots for performing data analytics",
                            "Evaluated code quality produced by AI models for correctness, performance, and helpfulness to the user",
                            "Train models with languages including Python, Javascript, C++, NodeJS, ReactJS, and ExpressJS",
                            "Participated in code reviews, making sure submissions were correct and followed style guidelines"
                        ]}
                        location="Chicago, IL"
                        company="Data Annotation"
                        inView={inView}
                    />
                    <Card
                        title="Web Developer"
                        timeline="Sep. 2022 - Feb. 2023"
                        bullets={[
                            "Initiated and pitched the concept for a user-friendly website using React.js, securing a contract valued at $800",
                            "Improved website navigation with React Routes, making it easy for users to explore, resulting in positive feedback",
                            "Leveraging CSS/HTML to website look great on all devices by using CSS for responsiveness"
                        ]}
                        location="United States"
                        company="Tom Concrete LLC"
                        inView={inView}
                    />
                    <Card
                        title="Software Engineering Intern"
                        timeline="June 2022 - August 2022"
                        bullets={[
                            "Collaborated a team to build a web app for a retail services client that needed a centralized dashboard",
                            "Served as lead backend engineer to create all API endpoints powered by Spring Boot, SQL and Azure Cloud",
                            "Contributed to frontend focusing on the REST API calls (CRUD) using Axios to ensure consistency in data",
                            "Appeared to daily scrum meetings about UI/Architecture design, feature discovery, and application development"
                        ]}
                        location="Chicago, IL"
                        company="Publicis Sapient"
                        inView={inView}
                    />
                </motion.div>
                <div className="mt-10 sm:mt-0">
                    <p>See <a href={resume} target="_blank" className=" underline">resume</a> for details</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Experience;
import { AnimateOnScroll } from "animate-on-scroll-framer"
import { Settings } from "@mui/icons-material"
import { FaArrowRight } from "react-icons/fa6"
import ProjectCard from "./ProjectCard"
import {  useState } from "react"
import { ProjectInfo } from "./ProjectCard"
import projects from "../../assets/data/project"
import { Link } from "react-router-dom"
function Project() {
    const [project] = useState<ProjectInfo[]>(projects)
    const onlyThree = project.filter((pro, index) => index <= 2 && pro)
  return (
   <>
               <div className="absolute top-[2400px] md:top-[430%] xl:top-[2000px]  w-[100%]" >
            <AnimateOnScroll duration={4} animation='fadeInUp'>
            <h3 className='text-white font-medium text-center' >My Projects <Settings/></h3>
            <h2 className='text-center text-white text-3xl md:text-4xl font-bold mt-5'>My Recent Projects</h2>
            <div className="mt-3 text-center md:w-[600px] m-auto">
                <p className="text-light  text-white">As a full stack developer, it is more than necessary to create useful, revolutionary, and long-term projects. So here are some excerpts from my recent projects that I am proud of.</p>
            </div>
            <div className="mt-11 flex flex-wrap w-[100%] gap-4 justify-evenly">
               {onlyThree.map((pro, index) =>  <ProjectCard key={index} title={pro.title} img={pro.img} link={pro.link} infos={pro.infos}/>)}
            </div>
            </AnimateOnScroll>
            <div className="mt-10 flex justify-center">
            <Link  to='/projects' className='bg-blue-700 py-4 shadow-md shadow-blue-600 px-3 md:px-10 rounded font-bold text-white'> See More<FaArrowRight className='inline mx-3'/></Link>
            </div>
        </div>
   </>
  )
}

export default Project

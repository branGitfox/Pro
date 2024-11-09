import { AnimateOnScroll } from "animate-on-scroll-framer"
import { Settings, Title } from "@mui/icons-material"
import { FaArrowRight } from "react-icons/fa6"
import ProjectCard from "./ProjectCard"


function Project() {
  return (
   <>
               <div className="absolute top-[2200px] md:top-[1000px] lg:top-[1800px] w-[100%]" >
            <AnimateOnScroll duration={4} animation='fadeInUp'>
            <h3 className='text-white font-medium text-center' >My Projects <Settings/></h3>
            <h2 className='text-center text-white text-3xl md:text-4xl font-bold mt-5'>My Recent Projects</h2>
            <div className="mt-3 text-center md:w-[600px] m-auto">
                <p className="text-light  text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur odit facilis labore quibusdam accusamus a vitae, accusantium deserunt nemo quos distinctio incidunt assumenda delectus, dicta quia doloribus dolorum! Quasi!</p>
            </div>
            <div className="mt-11 flex flex-wrap w-[100%] gap-y-4 justify-evenly">
                <ProjectCard title={'gg'} img="rr" link="frf" infos={'df'}/>
            </div>
            </AnimateOnScroll>
            <div className="mt-10 flex justify-center">
            <a  href='' className='bg-blue-700 py-4 shadow-md shadow-blue-600 px-3 md:px-10 rounded font-bold text-white'> See More<FaArrowRight className='inline mx-3'/></a>
                
            </div>
        </div>
   </>
  )
}

export default Project

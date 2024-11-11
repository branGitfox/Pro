import { AnimateOnScroll } from "animate-on-scroll-framer"
import { Settings } from "@mui/icons-material"
import { FaArrowRight } from "react-icons/fa6"
import ProjectCard from "./ProjectCard"
import { useEffect, useState } from "react"
import { ProjectInfo } from "./ProjectCard"
import projects from "../../assets/data/project"
import axios from 'axios'
interface Github {
  public_repos:number,
  followers:number,
  following:number

}
function Project() {
    const [project] = useState<ProjectInfo[]>(projects)
    const [data, setData] = useState<Github>()
    const [repos, setRepos] = useState<number|undefined>(0)
    const [followers, setFollowers] = useState<number|undefined>(0)
    const [following, setFollowing] = useState<number|undefined>(0)

    const getGithubData =  async () => {
      
          await axios.get('https://api.github.com/users/BranGitfox')
          .then(res => setData({public_repos:res.data.public_repos, followers:res.data.followers, following:res.data.following}))
          .then(() =>setFollowers(data?.followers))
          .then(() =>setRepos(data?.public_repos))
          .then(() =>setFollowing(data?.following))
          .catch(err => console.log(err.message))
     
    }

    useEffect(() => {
        getGithubData()

           setInterval(() => {
         
            if(typeof repos !== 'undefined'){
                for(let i=0; i< repos;i++) {
                    
                }
            }
      }, 500)
      }, [])
      
   
  
    
  return (
   <>
               <div className="absolute top-[2200px] md:top-[1800px]  w-[100%]" >
            <AnimateOnScroll duration={4} animation='fadeInUp'>
            <h3 className='text-white font-medium text-center' >My Projects <Settings/></h3>
            <h2 className='text-center text-white text-3xl md:text-4xl font-bold mt-5'>My Recent Projects</h2>
            <div className="mt-3 text-center md:w-[600px] m-auto">
                <p className="text-light  text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur odit facilis labore quibusdam accusamus a vitae, accusantium deserunt nemo quos distinctio incidunt assumenda delectus, dicta quia doloribus dolorum! Quasi!</p>
            </div>
            <div className="mt-11 flex flex-wrap w-[100%] gap-y-4 justify-evenly">
               {project.map((pro, index) =>  <ProjectCard key={index} title={pro.title} img={pro.img} link={pro.link} infos={pro.infos}/>)}
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

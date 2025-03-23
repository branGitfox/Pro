
import { useState } from "react"
import Projects, { datas, ProjectType } from "../../data/project"
import ProjectCard from "../projectCard/ProjectCard"

function Project() {
    const [projects] = useState<Projects[]>(datas)
    const [filter, setFilter] = useState<ProjectType>('webApp')

    const changeFilter =  (filter:ProjectType) => {
        setFilter(filter)
    }

    const filteredProjects = projects.filter((project) => project.type === filter)

  return (
    <>


    <div className="bg-neutral-900 bg-linear-to-t from-black to-transparent">
      <div className="max-w-5xl px-4 xl:px-0 py-24 mx-auto">

        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Mes Projets</h2>
          <p className="mt-1 text-neutral-400">Voici quelques projets que je fait personnel et collaboratif avec lesquel j'ai pu m'expertiser dans mon domaine et resoudre des problemes specifiques.</p>
        </div>
        <div className="max-w-[429px] mx-auto  bg-transparent border-1 border-gray-700 mb-5 h-10 rounded-full flex-col z-50">
            <button onClick={() => changeFilter('webApp')} className={`${filter==='webApp'?'bg-slate-600':'bg-slate-700'} text-neutral-300 h-full px-3 rounded-l-full  ` }>Application Web</button>
            <button onClick={() => changeFilter('website')} className={`${filter==='website'?'bg-slate-600':'bg-slate-700'} text-neutral-300 h-full px-3  hover:bg-slate-600`}>Site Web</button>
            <button onClick={() => changeFilter('utils')} className={`${filter==='utils'?'bg-slate-600':'bg-slate-700'} text-neutral-300 h-full px-3 rounded-r-full hover:bg-slate-600`}>Outils De Developpement</button>


           
        </div>
        {
          filteredProjects.map((filteredProjects, index) =>  <ProjectCard datas={filteredProjects} key={index} theme='dark'/>
          )
         
        }
          
      </div>
    </div>
    </>
  )
}

export default Project
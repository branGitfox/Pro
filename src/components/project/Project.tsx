
import { useState } from "react"
import Projects, { datas } from "../../data/project"
import ProjectCard from "../projectCard/ProjectCard"
function Project() {
    const [projects] = useState<Projects[]>(datas)
  return (
    <>


    <div className="bg-neutral-900 bg-linear-to-t from-black to-transparent">
      <div className="max-w-5xl px-4 xl:px-0 py-24 mx-auto">

        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Mes Projets</h2>
          <p className="mt-1 text-neutral-400">Voici quelques projets que je fait personnel et collaboratif avec lesquel j'ai pu m'expertiser dans mon domaine et resoudre des problemes specifiques.</p>
        </div>
        <div className="max-w-[429px] mx-auto  bg-transparent border-1 border-gray-700 mb-5 h-10 rounded-full flex-col ">
            <button className="bg-slate-600 text-neutral-300 h-full px-3 rounded-l-full">Application Web</button>
            <button className="bg-slate-700 text-neutral-300 h-full px-3 ">Site Web</button>
            <button className="bg-slate-700 text-neutral-300 h-full px-3 rounded-r-full">Outils De Developpement</button>


           
        </div>
        {
          projects.map((project, index) =>  <ProjectCard datas={project} key={index} theme='dark'/>
)
         
        }
          
      </div>
    </div>
    </>
  )
}

export default Project
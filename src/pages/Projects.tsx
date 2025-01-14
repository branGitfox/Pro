import { FaLink } from "react-icons/fa6"
import { useState } from "react";
import projects from "../assets/data/project";
import { ProjectInfo } from '../components/Project/ProjectCard';

function Projects() {
  const [project] = useState<ProjectInfo[]>(projects);
  const [filter, setFilter] = useState<string>("All");
  const filtered = project.filter((pr) => {
    if(filter === 'All'){
      return true
    }

    if(filter ==='Web' && pr.category === 'Web'){
      return true
    }

    if(filter ==='Mobile' && pr.category === 'Mobile'){
      return true
    }
  });

  const matchFilter = (filter: string) => {
    setFilter(filter);
  };
  return (
    <>
       <div className="absolute w-[100%]   top-[200px]">

              <h1 className="font-bold text-white text-center text-4xl">All of my Projects</h1>
              <div className="mt-8 flex  w-[100%] md:w-[700px] m-auto flex-wrap gap-4 justify-evenly">

                  <button
                  
                    onClick={() => matchFilter("All")}
                    className={`py-2 px-4 border-blue-600  border-2 rounded-3xl ${
                      filter === "All" ? "bg-blue-600" : ""
                    } text-white hover:bg-blue-600 cursor-pointer`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => matchFilter("Web")}
                    className={`py-2 px-4 border-blue-600  ${
                      filter === "Web" ? "bg-blue-600" : ""
                    } border-2 rounded-3xl text-white hover:bg-blue-600 cursor-pointer`}
                  >
                    Web Development
                  </button>
                  <button
                    onClick={() => matchFilter("Mobile")}
                    className={`py-2 px-4 border-blue-600 ${
                      filter === "Mobile" ? "bg-blue-600" : ""
                    }  border-2 rounded-3xl text-white hover:bg-blue-600 cursor-pointer`}
                  >
                    Mobile App
                  </button>
                </div>
        
              <div className="mt-11  flex flex-wrap w-[100%] gap-10 justify-evenly ">
                {
                  filtered.map((pr, index) =><div key={index} className="w-[320px] h-[380px] rounded-lg bg-gray-900 p-4">
                  <img src={pr.img} className='w-[100%] h-[55%] rounded-lg' alt="" />
                  <h2 className='text-white font-bold mt-3 '>{pr.title}</h2>
                  <p className="mt-2 font-light
                  text-white">
                    {pr.infos}
                  </p>
                  <div className="mt-3">
                      <a href={pr.link} className="text-blue-600">View project <FaLink className='inline mx-2'/></a>
                  </div>
      </div> )
                }
              
              </div>
              
       </div>
    </>
  )
}

export default Projects

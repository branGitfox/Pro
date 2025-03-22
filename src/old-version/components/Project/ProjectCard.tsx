import { FaLink } from "react-icons/fa6"
export type ProjectInfo = {
    title:String,
    img:string,
    link:string,
    infos:String,
    category?:string
}
function ProjectCard(props:ProjectInfo) {
  return (
    <>
          <div className="w-[320px] h-[380px] rounded-lg bg-gray-900 p-4">
                        <img src={props.img} className='w-[100%] h-[55%] rounded-lg' alt="" />
                        <h2 className='text-white font-bold mt-3 '>{props.title}</h2>
                        <p className="mt-2 font-light
                        text-white">
                          {props.infos}
                        </p>
                        <div className="mt-3">
                            <a href={props.link} className="text-blue-600">View project <FaLink className='inline mx-2'/></a>
                        </div>
            </div>
    </>
  )
}

export default ProjectCard

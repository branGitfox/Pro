import { AnimateOnScroll } from "animate-on-scroll-framer"
import { Settings } from "@mui/icons-material"
import { FaLink, FaArrowRight } from "react-icons/fa6"


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
            <div className="w-[320px] h-[380px] rounded-lg bg-gray-900 p-4">
                        <img src="" className='w-[100%] h-[55%] rounded-lg' alt="" />
                        <h2 className='text-white font-bold mt-3 '>PHP-NTL-Library</h2>
                        <p className="mt-2 font-light
                        text-white">
                           obis fugiat. Molestias voluptatem accusamus molestiae excepturi! obis fugiat.  accusamus molestiae excepturi!
                        </p>
                        <div className="mt-3">
                            <a href="" className="text-blue-600">View project <FaLink className='inline mx-2'/></a>
                        </div>
                </div>
                <div className="w-[320px] h-[380px] rounded-lg bg-gray-900 p-4">
                        <img src="" className='w-[100%] h-[55%] rounded-lg' alt="" />
                        <h2 className='text-white font-bold mt-3 '>PHP-NTL-Library</h2>
                        <p className="mt-2 font-light
                        text-white">
                           obis fugiat. Molestias voluptatem accusamus molestiae excepturi! obis fugiat.  accusamus molestiae excepturi!
                        </p>
                        <div className="mt-3">
                            <a href="" className="text-blue-600">View project <FaLink className='inline mx-2'/></a>
                        </div>
                </div>
                <div className="w-[320px] h-[380px] rounded-lg bg-gray-900 p-4">
                        <img src="" className='w-[100%] h-[55%] rounded-lg' alt="" />
                        <h2 className='text-white font-bold mt-3 '>PHP-NTL-Library</h2>
                        <p className="mt-2 font-light
                        text-white">
                           obis fugiat. Molestias voluptatem accusamus molestiae excepturi! obis fugiat.  accusamus molestiae excepturi!
                        </p>
                        <div className="mt-3">
                            <a href="" className="text-blue-600">View project <FaLink className='inline mx-2'/></a>
                        </div>
                </div>
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

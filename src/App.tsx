import  { useState } from 'react'
import br from '/br.jpg'
import me from './assets/me.jpg'
import { FaBars, FaX, FaUserAstronaut, FaReact, FaLink, FaArrowRight, FaEarthEurope, FaToolbox, FaMobile , FaCopyright, FaPaperPlane} from 'react-icons/fa6';
import {  Facebook, GitHub, LinkedIn, Mail,WhatsApp, YouTube, Code, Settings } from '@mui/icons-material';
import {AnimateOnScroll} from 'animate-on-scroll-framer'

function App() {
  const [activeMenu, setActiveMenu] = useState<boolean>(false)
  return (
<>

<div className="container sm relative flex justify-center m-auto">

        <div className='bg-blue-900  w-[100%] absolute container border rounded-xl border-blue-900 shadow-sm top-6 m-auto p-6 flex  justify-between items-center'>
            <div className='flex gap-4'>  
                <img src={br} className='w-10 h-10' alt="" />
                <h3 className='text-3xl font-bold text-white'>Brandon.</h3>
            </div>
            <div className=' gap-10 font-semibold text-white hidden md:flex'>  
                <a className='text-blue-800 hover:underline decoration-dashed decoration-blue-700 transition-all ' href="">Home</a>
                <a className='hover:underline decoration-dashed' href="">About Me</a>
                  <a className='hover:underline decoration-dashed' href="">Skills</a>
                  <a className='hover:underline decoration-dashed' href="">Project</a>
            </div>
            {activeMenu?(<FaX onClick={() => setActiveMenu(!activeMenu)} color='#4A76FD' size={30} className='md:hidden sm:inline' cursor={'pointer'}/>): <FaBars onClick={() => setActiveMenu(!activeMenu)} color='#4A76FD' size={30} className='md:hidden sm:inline' cursor={'pointer'}/>}
            <div className='hidden md:block'>  
                <button className='bg-[#4A76FD] py-2 px-10 rounded text-white'>Contact</button>
            </div>
        </div>
        {
          activeMenu && (  <div className="w-[100%] md:hidden flex-col align-left p-3 absolute top-[7.5rem] rounded-md bg-blue-800 transition-all duration-200 ">
            <div className='mb-5 hover:underline decoration-dashed text-blue-300'><a href=""></a>Home</div>
            <div className='mb-5 hover:underline decoration-dashed text-blue-300'><a href=""></a>About Me</div>
            <div className='mb-5 hover:underline decoration-dashed text-blue-300'><a href=""></a>Skills</div>
            <div className='mb-5 hover:underline decoration-dashed text-blue-300'><a href=""></a>Projects</div>
            <button className='bg-blue-700 py-2 px-10 rounded text-white'>Contact</button>
        </div>)
        }

        <div className="w-[100%]  flex flex-col align-center p-5 relative top-[8rem] md:top-40">
            <div className="mt-8 text-center">
                <h3 className='text-white font-semibold text-lg'>Hi, i'm <span className='underline decoration-dotted decoration-blue-500'>Brandon</span></h3>
            </div>
            <div className="mt-8 text-center">
                <h3 className='text-white font-bold text-[2rem] md:text-[3rem]'>Full-Stack Developer</h3>
            </div>
            <div className="mt-8 text-center md:w-[600px] m-auto">
                <p className="text-light md:text-xl text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur odit facilis labore quibusdam accusamus a vitae, accusantium deserunt nemo quos distinctio incidunt assumenda delectus, dicta quia doloribus dolorum! Quasi!</p>
            </div>
            <div className="mt-[5rem] text-center md:w-[400px] m-auto flex flex-row gap-3 justify-between">
                <a  href='' className='bg-blue-700 py-4 shadow-md shadow-blue-600 px-3 md:px-10 rounded font-bold text-white'>Hire Me<FaPaperPlane size={20} className='inline mx-3'/></a>
                <a  href='' className='border border-blue-700 py-4 shadow-md shadow-blue-600 px-3  md:px-10 rounded font-bold text-white'>GitHub<GitHub className='inline mx-3'/></a>
                
            </div>
        </div>
      <div className="absolute top-[650px] grid grid-cols-3 bg-gray-900  md:top-[843px] h-[120px]  w-[100%] p-4">
            <div className="flex flex-col items-center justify-center border-r-2 border-blue-600">
                    <p className='font-bold text-xl text-gray-300 '>40</p>
                    <p className='text-white font-light'>Repository</p>
            </div>
            <div className="flex flex-col  items-center justify-center border-r-2 border-blue-600">
                    <p className='font-bold text-xl text-gray-300 '>40</p>
                    <p className='text-white font-light'>Stars</p>
            </div>
            <div className="flex flex-col  items-center justify-center ">
                    <p className='font-bold text-xl text-gray-300 '>40</p>
                    <p className='text-white font-light'>Commits</p>
            </div>
      </div>
   
        <div className='w-[100%] absolute top-[800px] p-5 md:top-[980px]'>
        <AnimateOnScroll animation='fadeInUp' duration={4}>
        
            <h3 className='text-white font-medium text-center '>About Me <FaUserAstronaut className='inline' size={20}/></h3>
            <div className="mt-3 w-[100%] flex flex-wrap justify-evenly">
                <div className="w-[500px]  overflow-hidden h-auto mt-5">
                    <img src={me} className='w-[100%] h-[250px]' alt="my profil picture..." />
                </div>
                <div className="w-[500px] mt-3 ">
                    <h2 className='font-bold text-white text-3xl md:text-4xl text-center'>Ravomanana Brandon Fidelin</h2>
                    <p className='font-semibold mt-3'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt suscipit dolor quasi et officia minima harum praesentium nulla id odio qui vero cupiditate beatae tempora, a soluta numquam? Quae, blanditiis!
                    </p>
                    <p className='font-semibold mt-3'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt suscipit dolor quasi et officia minima harum praesentium nulla id odio qui vero cupiditate beatae tempora, a soluta numquam? Quae, blanditiis!
                    </p>
                </div>
                <div className="mt-[5rem] w-[100%]">
                    <AnimateOnScroll duration={4} animation='fadeInUp'>
                    <h3 className='text-white font-medium text-center '>My Skills <Code className='inline' /></h3>
                    <h2 className='text-center text-white text-3xl md:text-4xl font-bold mt-5'>All Skills</h2>
                    <div className="w-[100%] md:w-[450px] mt-3 m-auto">
                        <p className='text-center text-light text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus facilis repudiandae architecto, praesentium sapiente delectus repellat earum enim laborum tenetur unde eos impedit pariatur molestiae voluptatum iusto rem reiciendis sit?</p>
                    </div>
                    <div className="mt-5 flex  w-[100%] md:w-[700px] m-auto flex-wrap gap-4 justify-evenly">
                        <button className="py-2 px-4 border-blue-600  border-2 rounded-3xl bg-blue-600  text-white hover:bg-blue-600">Front-End</button>
                        <button className="py-2 px-4 border-blue-600  border-2 rounded-3xl text-white hover:bg-blue-600">Back-End</button>
                        <button className="py-2 px-4 border-blue-600  border-2 rounded-3xl text-white hover:bg-blue-600">Database</button>
                        <button className="py-2 px-4 border-blue-600  border-2 rounded-3xl text-white hover:bg-blue-600">versioning</button>
                        <button className="py-2 px-4 border-blue-600  border-2 rounded-3xl text-white hover:bg-blue-600">Hosting</button>
                        <button className="py-2 px-4 border-blue-600  border-2 rounded-3xl text-white hover:bg-blue-600">Tools</button>
                    </div>
                    <div className="mt-6 flex  w-[100%] md:w-[800px] m-auto flex-wrap gap-3 justify-evenly">
                            <div className="w-[100px] h-[100px] border-blue-600 border-2 rounded-xl flex flex-col items-center justify-center">
                                <FaReact color='blue' size={40}/>
                                <p className='text-white mt-2 '>React</p>
                            </div>
                            <div className="w-[100px] h-[100px] border-blue-600 border-2 rounded-xl flex flex-col items-center justify-center">
                                <FaReact color='blue' size={40}/>
                                <p className='text-white mt-2 '>React</p>
                            </div>       <div className="w-[100px] h-[100px] border-blue-600 border-2 rounded-xl flex flex-col items-center justify-center">
                                <FaReact color='blue' size={40}/>
                                <p className='text-white mt-2 '>React</p>
                            </div>
                            <div className="w-[100px] h-[100px] border-blue-600 border-2 rounded-xl flex flex-col items-center justify-center">
                                <FaReact color='blue' size={40}/>
                                <p className='text-white mt-2 '>React</p>
                            </div>
                            <div className="w-[100px] h-[100px] border-blue-600 border-2 rounded-xl flex flex-col items-center justify-center">
                                <FaReact color='blue' size={40}/>
                                <p className='text-white mt-2 '>React</p>
                            </div>
                         
                    </div>
                    
                    </AnimateOnScroll>
                </div>
                
            </div>
        </AnimateOnScroll>

        </div>
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
        
        <hr className='absolute top-[3800px] w-[100%] md:top-[2600px] border-blue-600 border-2'/>
        <div className="absolute mt-1 flex flex-wrap justify-evenly top-[3800px] w-[100%] md:top-[2600px] p-5   bg-gray-900">
                <div className="w-[100%] md:w-[500px] flex-col items-center">
                        <h1 className='text-white text-4xl font-bold'>Enough Talk! Let's Work Together.</h1>
                        <p className="mt-3 font-light text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius aperiam, nemo aspernatur ex molestiae harum doloribus, id cupiditate enim iusto at voluptatem facilis? Ullam quaerat, nesciunt animi fuga tempore autem.</p>
                        <ul className='mt-4'>
                            <li  className='mb-4'><FaEarthEurope size={30} className='text-blue-600'/></li>
                            <li className='mb-4'><FaToolbox size={30} className='text-orange-600' /></li>
                            <li className='mb-4'><FaMobile size={30} className='text-green-600' /></li>
                        </ul>
                </div>
                <div className=" w-[100%] md:w-[500px] flex-col items-center">
                        <h2 className='text-white text-4xl font-bold'>Let's Connect In...</h2>
                        <div className="mt-3 flex justify-between flex-wrap gap-2">
                            <a href="" className="px-6 py-2 bg-gray-700 text-white rounded-sm"><LinkedIn className='inline mx-2 text-blue-600'/>LinkedIn</a>
                            <a href="" className="px-6 py-2 bg-gray-700 text-white rounded-sm"><GitHub className='inline mx-2'/>Github</a>
                            <a href="" className="px-6 py-2 bg-gray-700 text-white rounded-sm"><Facebook className='inline mx-2'/>Facebook</a>
                            <a href="" className="px-6 py-2 bg-gray-700 text-white rounded-sm"><YouTube  className='inline mx-2 text-red-700'/>Youtube</a>
                        </div>
                        <h2 className='text-white text-4xl font-bold mt-3'>My Contact Information</h2>
                        <div className="mt-2 flex justify-start gap-1">
                            <div className="w-[200px] h-[100px] bg-blue-600 flex-col  justify-center items-center p-3 rounded-md">
                                <Mail className='text-white block '/>
                                <h3 className='text-white font-semibold'>Email Address</h3>
                                <p className='text-white font-bold'>Vixfgit@gmail.com</p>
                            </div>
                            <div className="w-[200px] h-[100px] bg-blue-600 flex-col justify-center items-center p-3 rounded-md ">
                            <WhatsApp className='text-white block'/>
                                <h3 className='text-white font-semibold'>Whatsapp</h3>
                                <p className='text-white font-bold'>+261 389411835</p>
                                </div>
                           
                        </div>

                </div>
        </div>
        <footer className='absolute top-[4600px] w-[100%] md:top-[3000px]'>
            <p className='text-center font-semibold text-white'>Made with ❤️ by <a className='underline' href="">BranGitFox</a>, <FaCopyright className='inline'/> 2024</p>
        </footer>
    </div>
</>
    
  )
}

export default App

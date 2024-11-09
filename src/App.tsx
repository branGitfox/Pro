import React, { useState } from 'react'
import br from '/br.jpg'
import { FaBars, FaX, FaUserAstronaut, FaGithub } from 'react-icons/fa6';
import { GitHub } from '@mui/icons-material';
function App() {
  const [activeMenu, setActiveMenu] = useState<boolean>(false)
  return (

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
            <div className="mt-8 text-center md:w-[400px] m-auto flex flex-row gap-3 justify-between">
                <a  href='' className='bg-blue-700 py-4 shadow-md shadow-blue-600 px-3 md:px-10 rounded font-bold text-white'>Hire Me<FaUserAstronaut className='inline mx-3'/></a>
                <a  href='' className='border border-blue-700 py-4 shadow-md shadow-blue-600 px-3  md:px-10 rounded font-bold text-white'>GitHub<GitHub className='inline mx-3'/></a>
                
            </div>
        </div>
      <div className="absolute top-[650px] md:top-[843px] h-[120px] bg-black w-[100%]">
          hhh
      </div>
    </div>
  )
}

export default App

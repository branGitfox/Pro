import React from 'react'
import br from '/br.jpg'
import {FaBars} from 'react-icons/fa6'
function App() {
  return (

    <div className="container sm relative flex justify-center m-auto">

        <div className='bg-blue-950  w-[100%] absolute container border rounded-xl border-blue-900 shadow-sm top-6 m-auto p-6 flex  justify-between items-center'>
            <div className='flex gap-4'>  
                <img src={br} className='w-10 h-10' alt="" />
                <h3 className='text-3xl font-bold text-white'>Brandon</h3>
            </div>
            <div className=' gap-10 font-semibold text-white hidden md:flex'>  
                <a className='text-blue-800 hover:underline decoration-dashed decoration-blue-700 transition-all ' href="">Home</a>
                <a className='hover:underline decoration-dashed' href="">Project</a>
                  <a className='hover:underline decoration-dashed' href="">Skills</a>
                  <a className='hover:underline decoration-dashed' href="">About</a>
            </div>
            <FaBars color='#4A76FD' size={30} className='md:hidden sm:inline'/>
            <div className='hidden md:block'>  
                <button className='bg-[#4A76FD] py-2 px-10 rounded text-white'>Contact</button>
            </div>
        </div>
    </div>
  )
}

export default App

import { useState } from "react"
import { FaBars, FaX} from 'react-icons/fa6';
import br from '/br.jpg'

function Navbar() {
  const [activeMenu, setActiveMenu] = useState<boolean>(false)

  const toggleMenu = () => {
    setActiveMenu(!activeMenu)
  }
  return (
    <>
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
            {activeMenu?(<FaX onClick={toggleMenu} color='#4A76FD' size={30} className='md:hidden sm:inline' cursor={'pointer'}/>): <FaBars onClick={() => setActiveMenu(!activeMenu)} color='#4A76FD' size={30} className='md:hidden sm:inline' cursor={'pointer'}/>}
            <div className='hidden md:block'>  
                <button className='bg-[#4A76FD] py-2 px-10 rounded text-white'>Contact</button>
            </div>
        </div>
        {
          activeMenu && (  <div className="w-[100%] z-50 md:hidden flex-col align-left p-3 absolute top-[7.5rem] rounded-md bg-blue-800 transition-all duration-200 ">
            <div className='mb-5 hover:underline decoration-dashed text-blue-300'><a href=""></a>Home</div>
            <div className='mb-5 hover:underline decoration-dashed text-blue-300'><a href=""></a>About Me</div>
            <div className='mb-5 hover:underline decoration-dashed text-blue-300'><a href=""></a>Skills</div>
            <div className='mb-5 hover:underline decoration-dashed text-blue-300'><a href=""></a>Projects</div>
            <button className='bg-blue-700 py-2 px-10 rounded text-white'>Contact</button>
        </div>)
        }

    </>
  )
}

export default Navbar

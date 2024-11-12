
import {FaPaperPlane} from 'react-icons/fa6';
import {GitHub } from '@mui/icons-material';


function Intro() {
  return (
   <>
        <div className="w-[100%]  flex flex-col align-center p-5 relative top-[8rem] md:top-40">
            <div className="mt-8 text-center">
                <h3 className='text-white font-semibold text-lg'>Hi 👋, i'm <span className='underline decoration-dotted decoration-blue-500'>Brandon </span>🧑‍💻</h3>
            </div>
            <div className="mt-8 text-center">
                <h3 className='text-white font-bold text-[2rem] md:text-[3rem]'>Full-Stack Developer</h3>
            </div>
            <div className="mt-8 text-center md:w-[600px] m-auto">
                <p className="text-light md:text-xl text-white">Passionate about programming, I am motivated to enrich my skills and experiences within your team. Even more so, accustomed to high work pressure, self-taught and hardworking. That's why you are in the right place with the right person 😁.</p>
            </div>
            <div className="mt-[5rem] text-center md:w-[400px] m-auto flex flex-row gap-3 justify-between">
                <a  href='#footer' className='bg-blue-700 py-4 shadow-md shadow-blue-600 px-3 md:px-10 rounded font-bold text-white'>Hire Me<FaPaperPlane size={20} className='inline mx-3'/></a>
                <a  href='https://github.com/BranGitfox' className='border border-blue-700 py-4 shadow-md shadow-blue-600 px-3  md:px-10 rounded font-bold text-white'>GitHub<GitHub className='inline mx-3'/></a> 
            </div>
        </div>
   </>
  )
}

export default Intro

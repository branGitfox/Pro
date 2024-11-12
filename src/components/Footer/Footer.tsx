
import { FaEarthEurope, FaToolbox, FaMobile , FaCopyright} from 'react-icons/fa6';
import {  Facebook, GitHub, LinkedIn, Mail,WhatsApp, YouTube } from '@mui/icons-material';
function Footer() {
  return (
    <>
        <hr className='absolute top-[4000px] w-[100%] md:top-[2600px] border-blue-600 border-2'/>
        <div className="absolute mt-1 flex flex-wrap justify-evenly top-[4000px] w-[100%] md:top-[2600px] p-5   bg-gray-900">
                <div className="w-[100%] md:w-[500px] flex-col items-center">
                        <h1 className='text-white text-4xl font-bold'>Enough Talk! Let's Work Together.</h1>
                        <p className="mt-3 font-light text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius aperiam, nemo aspernatur ex molestiae harum doloribus, id cupiditate enim iusto at voluptatem facilis? Ullam quaerat, nesciunt animi fuga tempore autem.</p>
                        <ul className='mt-4'>
                            <li  className='mb-4'><FaEarthEurope size={30} className='text-blue-600'/>Web Application </li>
                            <li className='mb-4'><FaToolbox size={30} className='text-orange-600' />Microservice API</li>
                            <li className='mb-4'><FaMobile size={30} className='text-green-600' />Mobile Application</li>
                        </ul>
                </div>
                <div className=" w-[100%] md:w-[500px] flex-col items-center">
                        <h2 className='text-white text-4xl font-bold'>Let's Connect In...</h2>
                        <div className="mt-3 flex justify-between flex-wrap gap-2">
                            <a href="https://www.linkedin.com/in/brandon-fidelin-ravomanana-59157b281" className="px-6 py-2 bg-gray-700 text-white rounded-sm"><LinkedIn className='inline mx-2 text-blue-600'/>LinkedIn</a>
                            <a href="www.github.com" className="px-6 py-2 bg-gray-700 text-white rounded-sm"><GitHub className='inline mx-2'/>Github</a>
                            <a href="https://web.facebook.com/brandonfidelin.ravomanana" className="px-6 py-2 bg-gray-700 text-white rounded-sm"><Facebook className='inline mx-2'/>Facebook</a>
                            <a href=" www.youtube.com/@BrandonFidelinDEV" className="px-6 py-2 bg-gray-700 text-white rounded-sm"><YouTube  className='inline mx-2 text-red-700'/>Youtube</a>
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
        <footer className='absolute top-[4800px] w-[100%] md:top-[3000px]'>
            <p className='text-center font-semibold text-white'>Made with ❤️ by <a className='underline' href="www.github.com/BranGitfox">BranGitFox</a>, <FaCopyright className='inline'/> 2024</p>
        </footer>
    </>
  )
}

export default Footer

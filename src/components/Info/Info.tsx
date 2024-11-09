import { AnimateOnScroll } from "animate-on-scroll-framer";
import { FaReact, FaUserAstronaut } from "react-icons/fa6";
import { Code } from "@mui/icons-material";
import me from '../../assets/me.jpg'
function Info() {
  return (
    <>
           <div className='w-[100%] absolute top-[800px] p-5 md:top-[980px]'>
      <AnimateOnScroll animation="fadeInUp" duration={4}>
        <h3 className="text-white font-medium text-center ">
          About Me <FaUserAstronaut className="inline" size={20} />
        </h3>
        <div className="mt-3 w-[100%] flex flex-wrap justify-evenly">
          <div className="w-[500px]  overflow-hidden h-auto mt-5">
            <img
              src={me}
              className="w-[100%] h-[250px]"
              alt="my profil picture..."
            />
          </div>
          <div className="w-[500px] mt-3 ">
            <h2 className="font-bold text-white text-3xl md:text-4xl text-center">
              Ravomanana Brandon Fidelin
            </h2>
            <p className="font-md mt-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              suscipit dolor quasi et officia minima harum praesentium nulla id
              odio qui vero cupiditate beatae tempora, a soluta numquam? Quae,
              blanditiis!
            </p>
            <p className="font-md mt-3 text-white ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              suscipit dolor quasi et officia minima harum praesentium nulla id
              odio qui vero cupiditate beatae tempora, a soluta numquam? Quae,
              blanditiis!
            </p>
          </div>

          <div className="mt-[5rem] w-[100%]">
            <AnimateOnScroll duration={4} animation="fadeInUp">
              <h3 className="text-white font-medium text-center ">
                My Skills <Code className="inline" />
              </h3>
              <h2 className="text-center text-white text-3xl md:text-4xl font-bold mt-5">
                All Skills
              </h2>
              <div className="w-[100%] md:w-[450px] mt-3 m-auto">
                <p className="text-center text-light text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Possimus facilis repudiandae architecto, praesentium sapiente
                  delectus repellat earum enim laborum tenetur unde eos impedit
                  pariatur molestiae voluptatum iusto rem reiciendis sit?
                </p>
              </div>
              <div className="mt-5 flex  w-[100%] md:w-[700px] m-auto flex-wrap gap-4 justify-evenly">
                <button className="py-2 px-4 border-blue-600  border-2 rounded-3xl bg-blue-600  text-white hover:bg-blue-600">
                  Front-End
                </button>
                <button className="py-2 px-4 border-blue-600  border-2 rounded-3xl text-white hover:bg-blue-600">
                  Back-End
                </button>
                <button className="py-2 px-4 border-blue-600  border-2 rounded-3xl text-white hover:bg-blue-600">
                  Database
                </button>
                <button className="py-2 px-4 border-blue-600  border-2 rounded-3xl text-white hover:bg-blue-600">
                  versioning
                </button>
                <button className="py-2 px-4 border-blue-600  border-2 rounded-3xl text-white hover:bg-blue-600">
                  Hosting
                </button>
                <button className="py-2 px-4 border-blue-600  border-2 rounded-3xl text-white hover:bg-blue-600">
                  Tools
                </button>
              </div>
              <div className="mt-6 flex  w-[100%] md:w-[800px] m-auto flex-wrap gap-3 justify-evenly">
             
                <div className="w-[100px] h-[100px] border-blue-600 border-2 rounded-xl flex flex-col items-center justify-center">
                  <FaReact color="blue" size={40} />
                  <p className="text-white mt-2 ">React</p>
                </div>{" "}
                <div className="w-[100px] h-[100px] border-blue-600 border-2 rounded-xl flex flex-col items-center justify-center">
                  <FaReact color="blue" size={40} />
                  <p className="text-white mt-2 ">React</p>
                </div>
                <div className="w-[100px] h-[100px] border-blue-600 border-2 rounded-xl flex flex-col items-center justify-center">
                  <FaReact color="blue" size={40} />
                  <p className="text-white mt-2 ">React</p>
                </div>
                <div className="w-[100px] h-[100px] border-blue-600 border-2 rounded-xl flex flex-col items-center justify-center">
                  <FaReact color="blue" size={40} />
                  <p className="text-white mt-2 ">React</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </AnimateOnScroll>
      </div>
    </>
  );
}

export default Info;

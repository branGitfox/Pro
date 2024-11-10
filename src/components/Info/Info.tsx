import { AnimateOnScroll } from "animate-on-scroll-framer";
import { FaReact, FaUserAstronaut } from "react-icons/fa6";
import { Code } from "@mui/icons-material";
import me from "../../assets/me.jpg";
import InfoCard from "./InfoCard";
import skills from "../../assets/data/skills";
import { useState } from "react";
import { Tech } from "../../assets/data/skills";
function Info() {
  const [skill] = useState<Tech[]>(skills);
  const [filter, setFilter] = useState<string>("Front");
  const filtered = skill.filter((sk) => sk.type === filter);

  const matchFilter = (filter: string) => {
    setFilter(filter);
  };
  return (
    <>
      <div className="w-[100%] absolute top-[800px] p-5 md:top-[980px]">
        <AnimateOnScroll animation="fadeInUp" duration={4}>
          <h3 className="text-white font-medium text-center ">
            About Me <FaUserAstronaut className="inline" size={20} />
          </h3>
            </AnimateOnScroll>
          
          <div className="mt-3 w-[100%] flex flex-wrap justify-evenly">
          
            <div className="w-[500px]  overflow-hidden h-auto mt-5">
        <AnimateOnScroll animation="fadeInUp" duration={4}>

              <img
                src={me}
                className="w-[100%] h-[250px]"
                alt="my profil picture..."
                />
                   </AnimateOnScroll>
            </div>
            <div className="w-[500px] mt-3 ">
        <AnimateOnScroll animation="fadeInUp" duration={4}>

              <h2 className="font-bold text-white text-3xl md:text-4xl text-center">
                Ravomanana Brandon Fidelin
              </h2>
              <p className="font-md mt-3 text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt suscipit dolor quasi et officia minima harum
                praesentium nulla id odio qui vero cupiditate beatae tempora, a
                soluta numquam? Quae, blanditiis!
              </p>
              <p className="font-md mt-3 text-white ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt suscipit dolor quasi et officia minima harum
                praesentium nulla id odio qui vero cupiditate beatae tempora, a
                soluta numquam? Quae, blanditiis!
              </p>
              </AnimateOnScroll>

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
                    Possimus facilis repudiandae architecto, praesentium
                    sapiente delectus repellat earum enim laborum tenetur unde
                    eos impedit pariatur molestiae voluptatum iusto rem
                    reiciendis sit?
                  </p>
                </div>
                  </AnimateOnScroll>
              <AnimateOnScroll duration={4} animation="fadeInUp">
                <div className="mt-5 flex  w-[100%] md:w-[700px] m-auto flex-wrap gap-4 justify-evenly">

                  <button
                    onClick={() => matchFilter("Front")}
                    className={`py-2 px-4 border-blue-600  border-2 rounded-3xl ${
                      filter === "Front" ? "bg-blue-600" : ""
                    } text-white hover:bg-blue-600`}
                  >
                    Front-End
                  </button>
                  <button
                    onClick={() => matchFilter("Back")}
                    className={`py-2 px-4 border-blue-600  ${
                      filter === "Back" ? "bg-blue-600" : ""
                    } border-2 rounded-3xl text-white hover:bg-blue-600`}
                  >
                    Back-End
                  </button>
                  <button
                    onClick={() => matchFilter("Data")}
                    className={`py-2 px-4 border-blue-600 ${
                      filter === "Data" ? "bg-blue-600" : ""
                    }  border-2 rounded-3xl text-white hover:bg-blue-600`}
                  >
                    Database
                  </button>
                  <button
                    onClick={() => matchFilter("Version")}
                    className={`py-2 px-4 border-blue-600 ${
                      filter === "Version" ? "bg-blue-600" : ""
                    } border-2 rounded-3xl text-white hover:bg-blue-600`}
                  >
                    versioning
                  </button>
                  <button
                    onClick={() => matchFilter("Host")}
                    className={`py-2 px-4 border-blue-600  border-2 ${
                      filter === "Host" ? "bg-blue-600" : ""
                    } rounded-3xl text-white hover:bg-blue-600`}
                  >
                    Hosting
                  </button>
                  <button
                    onClick={() => matchFilter("Tools")}
                    className={`py-2 px-4 border-blue-600 ${
                      filter === "Tools" ? "bg-blue-600" : ""
                    } border-2 rounded-3xl text-white hover:bg-blue-600`}
                  >
                    Tools
                  </button>

                </div>
              </AnimateOnScroll>
              <AnimateOnScroll duration={4} animation="fadeInUp">
                
                <div className="mt-6 flex  w-[100%] md:w-[800px] m-auto flex-wrap gap-3 justify-evenly">
                  
                  {filtered.map((sk, index) => (
                    <InfoCard
                      key={index}
                      logo={sk.logo}
                      logoname={sk.logoname}
                      type={sk.type}
                    />
                  ))}
                </div>
                </AnimateOnScroll>
            
            </div>
          </div>
      
      </div>
    </>
  );
}

export default Info;

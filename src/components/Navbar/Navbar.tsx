import { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import br from "/br.jpg";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  const location = useLocation();

  return (
    <>
      <div className="bg-blue-900  w-[100%] absolute container border rounded-xl border-blue-900 shadow-sm top-6 m-auto p-6 flex  justify-between items-center">
        <div className="flex gap-4">
          <img src={br} className="w-8 h-8 " alt="" />
          <h3 className="text-3xl font-bold text-white">Brandon.</h3>
        </div>
        <div className=" gap-10 font-semibold text-white hidden md:flex">
          <Link
            className={`${
              location.pathname === "/" ? "text-blue-500" : ""
            } hover:underline decoration-dashed decoration-blue-600 transition-all `}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`${
              location.pathname === "/projects" ? "text-blue-500" : ""
            } hover:underline decoration-dashed`}
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className={`${
              location.pathname === "/experiences" ? "text-blue-500" : ""
            }hover:underline decoration-dashed`}
            to="experiences"
          >
            Experiences
          </Link>
        </div>
        {activeMenu ? (
          <FaX
            onClick={toggleMenu}
            color="#4A76FD"
            size={30}
            className="md:hidden sm:inline"
            cursor={"pointer"}
          />
        ) : (
          <FaBars
            onClick={() => setActiveMenu(!activeMenu)}
            color="#4A76FD"
            size={30}
            className="md:hidden sm:inline"
            cursor={"pointer"}
          />
        )}
        <div className="hidden md:block">
          <button className="bg-[#4A76FD] py-2 px-10 rounded text-white">
            Download CV
          </button>
        </div>
      </div>
      {activeMenu && (
        <div className="w-[100%] z-50 md:hidden flex-col align-left p-3 absolute top-[7.5rem] rounded-md bg-blue-800 transition-all duration-200 ">
          <div className="mb-5 hover:underline decoration-dashed text-blue-300">
            {" "}
            <Link
              className={`${
                location.pathname === "/" ? "text-blue-500" : ""
              } hover:underline decoration-dashed decoration-blue-600 transition-all `}
              to="/"
            >
              Home
            </Link>
          </div>
          <div className="mb-5 hover:underline decoration-dashed text-blue-300">
            {" "}
            <Link
              className={`${
                location.pathname === "/projects" ? "text-blue-500" : ""
              } hover:underline decoration-dashed`}
              to="/projects"
            >
              Projects
            </Link>
          </div>
          <div className="mb-5 hover:underline decoration-dashed text-blue-300">
            {" "}
            <Link
              className={`${
                location.pathname === "/experiences" ? "text-blue-500" : ""
              }hover:underline decoration-dashed`}
              to="experiences"
            >
              Experiences
            </Link>
          </div>
          <button className="bg-blue-700 py-2 px-10 rounded text-white">
            Download CV
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;


import { Tech } from "../../assets/data/skills"
function InfoCard({logo, logoname}:Tech) {
  return (
    <>
           <div className="w-[100px] h-[100px] border-blue-600 border-2 rounded-xl flex flex-col items-center justify-center">
                  {logo}
                  <p className="text-white mt-2 ">{logoname}</p>
            </div>
    </>
  )
}

export default InfoCard

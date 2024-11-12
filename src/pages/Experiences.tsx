
import { Chrono } from "react-chrono";
function Experiences() {
    const items = [{
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
  
      }]
  return (
    <div className="absolute top-[150px]">
              <div className="w-[100%] md:w-[700px]">
        <Chrono items={items} />
      </div>
    </div>
  )
}

export default Experiences

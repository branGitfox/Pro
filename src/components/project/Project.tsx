
import { useState } from "react"
import Projects, { datas } from "../../data/project"
function Project() {
    const [projects, setProjets] = useState<Projects[]>(datas)
  return (
    <div>Project</div>
  )
}

export default Project
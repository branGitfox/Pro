import { JSXElement } from "@babel/types";

export default interface Project {
    name:string,
    description:string,
    img:string,
    githubLink:string,
    liveDemo?:string,
    stacks: JSXElement[],
    type: ProjectType
}

type ProjectType= 'webApp'|'website'|'utils'
import { JSXElement } from "@babel/types";

export default interface Projects {
    name:string,
    description:string,
    img1:string,
    img2:string,
    githubLink:string,
    liveDemo?:string,
    stacks: JSXElement[],
    type: ProjectType
}

type ProjectType= 'webApp'|'website'|'utils'


export const datas : Projects[] = [
    {
        name:'Ravomanana',
        description:"Lorem ipsum",
        img1:"/img/first.png",
        img2:"/img/second.png",
        githubLink:"https://github.com",
        liveDemo:"https://https://livedemo.com",
        stacks: [],
        type: "webApp"
    },
    {
        name:'Ravomanana',
        description:"Lorem ipsum",
        img1:"/img/first.png",
        img2:"/img/second.png",
        githubLink:"https://github.com",
        liveDemo:"https://https://livedemo.com",
        stacks: [],
        type: "webApp"
    }
]


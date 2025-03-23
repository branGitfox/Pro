import { JSXElement } from "@babel/types";

export default interface Projects {
    name:string,
    description:string,
    img1:string,
    img2:string,
    githubLink:string,
    liveDemo?:string,
    stacks: string[],
    type: ProjectType
}

export type ProjectType= 'webApp'|'website'|'utils'


export const datas : Projects[] = [
    {
        name:'Ravomanana',
        description:"Lorem ipsum",
        img1:"/img/first.png",
        img2:"/img/second.png",
        githubLink:"https://github.com",
        liveDemo:"https://https://livedemo.com",
        stacks: ['vite.svg', 'vite.svg'],
        type: "website"
    },
    {
        name:'Ravomanana',
        description:"Lorem ipsum",
        img1:"/img/first.png",
        img2:"/img/second.png",
        githubLink:"https://github.com",
        liveDemo:"https://https://livedemo.com",
        stacks: ['vite.svg', 'vite.svg', 'vite.svg'],
        type: "webApp"
    }
]


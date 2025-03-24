

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
        name:'Gestion d\'employés',
        description:"Lorem ipsum",
        img1:"GE.png",
        img2:"Full.png",
        githubLink:"https://github.com",
        liveDemo:"https://https://livedemo.com",
        stacks: ['php.svg', 'javascript.svg', 'ajax.svg', 'bootstrap.svg', 'mysql.svg', ],
        type: "website"
    },
    {
        name:'Ravomanana',
        description:"Lorem ipsum",
        img1:"GE.png",
        img2:"Full.png",
        githubLink:"https://github.com",
        liveDemo:"https://https://livedemo.com",
        stacks: ['react.svg', 'vite.svg', 'vite.svg'],
        type: "webApp"
    }
]


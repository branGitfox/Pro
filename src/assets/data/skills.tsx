import { GitHub } from "@mui/icons-material"
import { DiMongodb, DiMysql } from "react-icons/di"
import { FaReact, FaHtml5, FaCss3, FaJs, FaBootstrap, FaNodeJs, FaPhp, FaGit} from "react-icons/fa6"
import { SiExpress, SiInsomnia, SiRender, SiTailwindcss, SiVercel, SiVisualstudiocode, SiTypescript, SiRedux, SiPostman } from "react-icons/si"
import { ReactElement } from "react"

export interface Tech {
    logo:ReactElement,
    logoname:string,
    type:string
}
const skills:Tech[] = [

    {
        logo:<FaHtml5 size={30} color='red'/>,
        logoname:'HTML',
        type:'Front'
    },
    
    {
        logo:<FaCss3 size={30} color='#4cc9f0'/>,
        logoname:'CSS',
        type:'Front'
    },
    {
        logo:<FaJs size={30} color='yellow'/>,
        logoname:'JavaScript',
        type:'Front'
    },
    {
        logo:<SiTypescript size={30} color='#4cc9f0'/>,
        logoname:'TypeScript',
        type:'Front'
    },

    {
        logo:<FaReact size={30} color='cyan'/>,
        logoname:'React',
        type:'Front'
    },

 
    {
        logo:<FaBootstrap size={30} color='#3a0ca3'/>,
        logoname:'Bootstrap',
        type:'Front'
    },
    {
        logo:<SiTailwindcss size={30} color='blue'/>,
        logoname:'TailWindCss',
        type:'Front'
    },

    {
        logo:<SiExpress size={30} color='white'/>,
        logoname:'Express',
        type:'Back'
    },

    {
        logo:<FaNodeJs size={30} color='green'/>,
        logoname:'NodeJs',
        type:'Back'
    },

    {
        logo:<FaPhp size={30} color='violet'/>,
        logoname:'PHP',
        type:'Back'
    },

    {
        logo:<FaGit size={30} color='orange'/>,
        logoname:'Git',
        type:'Version'
    },

    {
        logo:<GitHub />,
        logoname:'GitHub',
        type:'Version'
    },

    {
        logo:<SiRender size={30} color='white'/>,
        logoname:'Render',
        type:'Host'
    },
    {
        logo:<SiVercel size={30} color='white'/>,
        logoname:'Vercel',
        type:'Host'
    },

    {
        logo:<SiInsomnia size={30} color='#3a0ca3'/>,
        logoname:'Insomnia',
        type:'Tools',
    },
    {
        logo:<SiPostman size={30} color='#e85d04'/>,
        logoname:'Postman',
        type:'Tools',
    },
    {
        logo:<SiVisualstudiocode size={30} color='blue'/>,
        logoname:'VsCode',
        type:'Tools',
    },

    {
        logo:<DiMongodb size={30} color='green'/>,
        logoname:'MongoDB',
        type:'Data',
    },

    {
        logo:<DiMysql size={30} color='pink'/>,
        logoname:'MySQL',
        type:'Data',
    },
    {
        logo:<SiRedux size={30} color='purple'/>,
        logoname:'Redux',
        type:'Front',
    },

]

export default skills
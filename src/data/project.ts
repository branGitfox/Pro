

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
        description:"Application web de gestion d'employés qui permet de gérer, afficher les salaires periodiquement, gérer les avances, les absences avec un système de sauvegarde de base de donnée et de roles utiliseurs",
        img1:"GE.png",
        img2:"Full.png",
        githubLink:"https://github.com",
        liveDemo:"https://https://livedemo.com",
        stacks: ['php.svg', 'javascript.svg', 'ajax.svg', 'bootstrap.svg', 'mysql.svg'],
        type: "webApp"
    },
    {
        name:'Yummy',
        description:"Application web Fast-Food qui permet de commander des plats en ligne et se faire livrer, payer, avec un système de panier, affichage de plats du jour et  à la une. La possiblité de filtrer les plats par categorie",
        img1:"yummy.png",
        img2:"Full.png",
        githubLink:"https://github.com",
        liveDemo:"https://https://livedemo.com",
        stacks: ['php.svg', 'mysql.svg', 'javascript.svg', 'bootstrap.svg'],
        type: "webApp"
    },
    {
        name:'E-parapheur',
        description:"Application web suivi des courriers Ministeriel (MTEFOp) qui permet d'enregistrer, transférer, retracer le circuit de transférer de facon explicite et precice, avec un système de role et une securité puissante. Des statistiques et des graphiques permettant de faire des rappports journaliers, hebdomadaires, mensuels et annuaires. Mais aussi un compteur de visite qui peut etre filtrer pat date.",
        img1:"paraph.png",
        img2:"Full.png",
        githubLink:"https://github.com",
        liveDemo:"https://https://livedemo.com",
        stacks: ['laravel.svg', 'react.svg', 'tailwindcss.svg', 'mysql.svg'],
        type: "webApp"
    }
]


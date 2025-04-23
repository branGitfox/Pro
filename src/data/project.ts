

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
        name: 'Gestion d\'employés',
        description: "Application web de gestion d'employés qui permet de gérer, afficher les salaires périodiquement, gérer les avances, les absences avec un système de sauvegarde de base de données et de rôles utilisateurs",
        img1: "GE.png",
        img2: "Full.png",
        githubLink: "https://github.com/branGitfox/GestionEmployers",
        liveDemo: "",
        stacks: ['php.svg', 'javascript.svg', 'ajax.svg', 'bootstrap.svg', 'mysql.svg'],
        type: "webApp"
    },
    {
        name: 'Yummy',
        description: "Application web Fast-Food qui permet de commander des plats en ligne et se faire livrer, payer, avec un système de panier, affichage de plats du jour et à la une. La possibilité de filtrer les plats par catégorie",
        img1: "yummy.png",
        img2: "Full.png",
        githubLink: "https://github.com/branGitfox/yummy",
        liveDemo: "",
        stacks: ['php.svg', 'mysql.svg', 'javascript.svg', 'bootstrap.svg'],
        type: "webApp"
    },
    {
        name: 'E-parapheur',
        description: "Application web de suivi des courriers ministériels (MTEFOp) qui permet d'enregistrer, transférer, retracer le circuit de transfert de façon explicite et précise, avec un système de rôles et une sécurité puissante. Des statistiques et des graphiques permettant de faire des rapports journaliers, hebdomadaires, mensuels et annuels. Mais aussi un compteur de visites qui peut être filtré par date.",
        img1: "paraph.png",
        img2: "Full.png",
        githubLink: "https://github.com/branGitfox/MTEFoP-eParapheur",
        liveDemo: "https://mtefop-e-parapheur.vercel.app/",
        stacks: ['laravel.svg', 'react.svg', 'tailwindcss.svg', 'mysql.svg'],
        type: "webApp"
    },
    {
        name: 'JokeLand',
        description: "Site web qui génère des blagues, parfait pour commencer sa journée et avoir des fous rires, disponible en français et anglais pour l'instant, d'autres langues viendront bientôt",
        img1: "jokeland.jpeg",
        img2: "Full.png",
        githubLink: "https://github.com/branGitfox/JokeLand",
        liveDemo: "https://joke-land.vercel.app/",
        stacks: ['react.svg', 'redux.svg', 'tailwindcss.svg'],
        type: "website"
    },
    {
        name: 'PHP-NTL',
        description: "PHP-NTL est une bibliothèque PHP puissante qui permet de convertir les nombres en leur représentation littérale. Elle prend en charge les nombres allant de 0 à 999 999 999 999, des langues française et anglaise, ce qui permet de l'utiliser facilement dans des projets multilingues. Cette bibliothèque offre une grande flexibilité et est idéale pour des applications nécessitant des conversions de nombres en texte, que ce soit pour des factures, des rapports financiers ou tout autre système où la représentation écrite des chiffres est nécessaire.",
        img1: "ntl.png",
        img2: "Full.png",
        githubLink: "https://github.com/branGitfox/PHP-NumberToLetter-library",
        liveDemo: "https://php-number-to-letter-library.vercel.app/",
        stacks: ['php.svg', 'javascript.svg'],
        type: "utils"
    },
    {
        name: 'IP-Tracker',
        description: "Site web qui permet de géolocaliser une adresse IP, le site est déjà fonctionnel mais n'affiche que quelques infos seulement sur l'adresse IP, mais ce n'est que temporaire, je vous invite à visiter le site et de tester vous-même !",
        img1: "ip.png",
        img2: "Full.png",
        githubLink: "https://github.com/branGitfox/IP-Tracker",
        liveDemo: "https://iptracker-brangitfox.netlify.app/",
        stacks: ['react.svg', 'typescript.svg', 'tailwindcss.svg'],
        type: "utils"
    },


    {
        name: 'GUI',
        description: "GUI vous simplifie la vie en vous offrant des composants pré-stylés pour afficher vos statistiques GitHub en temps réel. le package est sur NPM et installable dans vos projet react en un seul click",
        img1: "gui.png",
        img2: "gui.png",
        githubLink: "https://github.com/branGitfox/GUI",
        liveDemo: "https://gui-smoky.vercel.app/",
        stacks: ['react.svg', 'typescript.svg', 'tailwindcss.svg'],
        type: "utils"
    },
    {
        name: 'En cours de développement',
        description: "Application web desktop de gestion d'école qui permet de gérer les élèves, inscriptions, écolages, droits, notes. Gérer les personnels, professeurs, salaires et avances, informations historifiées ; les flux bancaires et flux mobile money de l'école. Pour finir, des statistiques complètes des données.",
        img1: "asap.jpg",
        img2: "Full.png",
        githubLink: "",
        liveDemo: "",
        stacks: ['laravel.svg', 'electron.svg', 'react.svg', 'typescript.svg', 'redux.svg', 'tailwindcss.svg'],
        type: "webApp"
    }
    
]


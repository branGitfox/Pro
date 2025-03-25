

function Hero() {
  return (
    <div className="bg-neutral-900" id="hero">
    <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-14">
      <h1 className="font-semibold text-white text-5xl md:text-6xl ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 clip">Brandon Fidelin:</span> transformer les idées en réalité
      </h1>
      <div className="max-w-4xl">
        <p className="mt-5 text-neutral-400 text-lg">
        Passionné, intelligent et full-stack, je m'épanouis en transformant des défis complexes en solutions fluides. Avec un œil avisé pour le design front-end et l'architecture back-end, je fais le lien entre créativité et fonctionnalité, en construisant des applications à la fois innovantes et fiables.</p>
      </div>
      <a className="group inline-flex items-center mt-8 gap-x-2 py-2 px-3 bg-gradient-to-r from-blue-400 to-cyan-500 font-medium text-sm text-neutral-300 mr-2 focus:outline-hidden rounded-sm" href="#contact">
       Me Contacter
      </a>
      <a className="group inline-flex items-center mt-8 gap-x-2 py-2 px-3 border-cyan-500 border-1 font-medium text-sm text-neutral-300  hover:bg-cyan-500 rounded-sm" href="/cv.PNG" download={'brandon'}>
        Téléchager mon CV
      </a>
    </div>
  </div>
  )
}

export default Hero
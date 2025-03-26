
import emailjs from 'emailjs-com';
import { useState } from 'react';
import {  toast, ToastContainer } from 'react-toastify';

function Footer() {
  const [loader, setLoader] = useState<boolean>(false)
  const sendEmail = async (e:React.ChangeEvent<HTMLFormElement>)  => {
     e.preventDefault();  
      setLoader(true)
    await emailjs.sendForm('service_m0052xg', 'template_bypqpvc',e.target, 'Zt1TUCueO51qvJEol').
       then(() => setLoader(false))
       .then(() => toast.success('Votre message a bien été envoyé'))
       .catch(() => toast.error("Verifier votre connexion internet"))
   }


  return (
    <>
        <div className="bg-neutral-900" id='contact'>
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
      
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Me Contacter</h2>
          <p className="mt-1 text-neutral-400">Si mon travail a retenu votre attention - contactez-moi au plus vite.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
            <form onSubmit={sendEmail}>
              <div className="space-y-4">
           
                <div className="relative">
                  <input type="text" id="hs-tac-input-name" className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  not-placeholder-shown:pt-6
                  not-placeholder-shown:pb-2
                  autofill:pt-6
                  autofill:pb-2" placeholder="Nom" name='name'/>
                  <label htmlFor="hs-tac-input-name" className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-not-placeholder-shown:text-xs
                    peer-not-placeholder-shown:-translate-y-1.5
                    peer-not-placeholder-shown:text-neutral-400">Nom</label>
                </div>
            
                <div className="relative">
                  <input type="email" id="hs-tac-input-email" className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  not-placeholder-shown:pt-6
                  not-placeholder-shown:pb-2
                  autofill:pt-6
                  autofill:pb-2" placeholder="Email" name='from'/>
                  <label htmlFor="hs-tac-input-email" className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-not-placeholder-shown:text-xs
                    peer-not-placeholder-shown:-translate-y-1.5
                    peer-not-placeholder-shown:text-neutral-400">Email</label>
                </div>
                <input type="hidden" name="to" value='vixfgit@gmail.com'/>

     
                <div className="relative">
                  <textarea id="hs-tac-message" className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  not-placeholder-shown:pt-6
                  not-placeholder-shown:pb-2
                  autofill:pt-6
                  autofill:pb-2" placeholder="This is a textarea placeholder" data-hs-textarea-auto-height name='message'></textarea>
                  <label htmlFor="hs-tac-message" className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-not-placeholder-shown:text-xs
                    peer-not-placeholder-shown:-translate-y-1.5
                    peer-not-placeholder-shown:text-neutral-400" >Parlez-moi de votre projet</label>
                </div>
     
              </div>

              <div className="mt-2">
                <p className="text-xs text-neutral-500">
                  Tous les champs sont requis
                </p>

                <p className="mt-5">
                  <button className="group inline-flex items-center gap-x-2 py-2 px-3 bg-blue-500 font-medium text-sm text-neutral-800 rounded-full focus:outline-hidden" type='submit'>
                    {loader?(<div className="animate-spin inline-block size-6 border-3 border-current border-t-transparent text-cyan-600 rounded-full dark:text-cyan-500" role="status" aria-label="loading">
  <span className="sr-only">Loading...</span>
</div>):'Envoyer'}
                    <svg className="shrink-0 size-4 transition " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </p>
              </div>
            </form>
          </div>


          <div className="space-y-14">
       
            <div className="flex gap-x-5">
              <svg className="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="grow">
                <h4 className="text-white font-semibold">Mon Adresse:</h4>

                <address className="mt-1 text-neutral-400 text-sm not-italic">
                  Antananarivo 101, Analamanga<br/>
                  Madagascar +261
                </address>
              </div>
            </div>
  
            <div className="flex gap-x-5">
              <svg className="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
              <div className="grow">
                <h4 className="text-white font-semibold">Email-Moi:</h4>

                <a className="mt-1 text-neutral-400 text-sm hover:text-neutral-200 focus:outline-hidden focus:text-neutral-200" href="#mailto:example@site.co" target="_blank">
                  vixfgit@gmail.com
                </a>
              </div>
            </div>
    
            <div className="flex gap-x-5">
              <svg className="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="m3 11 18-5v12L3 14v-3z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
              <div className="grow">
                <h4 className="text-white font-semibold">Disponibilité</h4>
                <p className="mt-1 text-neutral-400">Je suis disponible pour des missions Freelance, en remote ou sur place.</p>
              </div>
            </div>

          </div>

        </div>
 
      </div>
      <ToastContainer/>
    </div>
    <footer className="relative overflow-hidden bg-neutral-900">
    <svg className="absolute -bottom-20 start-1/2 w-[1900px] transform -translate-x-1/2" width="2745" height="488" viewBox="0 0 2745 488" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 330.864C232.505 403.801 853.749 527.683 1482.69 439.719C2111.63 351.756 2585.54 434.588 2743.87 487" className="stroke-neutral-700/50" stroke="currentColor" />
      <path d="M0.5 308.873C232.505 381.81 853.749 505.692 1482.69 417.728C2111.63 329.765 2585.54 412.597 2743.87 465.009" className="stroke-neutral-700/50" stroke="currentColor" />
      <path d="M0.5 286.882C232.505 359.819 853.749 483.701 1482.69 395.738C2111.63 307.774 2585.54 390.606 2743.87 443.018" className="stroke-neutral-700/50" stroke="currentColor" />
      <path d="M0.5 264.891C232.505 337.828 853.749 461.71 1482.69 373.747C2111.63 285.783 2585.54 368.615 2743.87 421.027" className="stroke-neutral-700/50" stroke="currentColor" />
      <path d="M0.5 242.9C232.505 315.837 853.749 439.719 1482.69 351.756C2111.63 263.792 2585.54 346.624 2743.87 399.036" className="stroke-neutral-700/50" stroke="currentColor" />
      <path d="M0.5 220.909C232.505 293.846 853.749 417.728 1482.69 329.765C2111.63 241.801 2585.54 324.633 2743.87 377.045" className="stroke-neutral-700/50" stroke="currentColor" />
      <path d="M0.5 198.918C232.505 271.855 853.749 395.737 1482.69 307.774C2111.63 219.81 2585.54 302.642 2743.87 355.054" className="stroke-neutral-700/50" stroke="currentColor" />
      <path d="M0.5 176.927C232.505 249.864 853.749 373.746 1482.69 285.783C2111.63 197.819 2585.54 280.651 2743.87 333.063" className="stroke-neutral-700/50" stroke="currentColor" />
      <path d="M0.5 154.937C232.505 227.873 853.749 351.756 1482.69 263.792C2111.63 175.828 2585.54 258.661 2743.87 311.072" className="stroke-neutral-700/50" stroke="currentColor" />
      <path d="M0.5 132.946C232.505 205.882 853.749 329.765 1482.69 241.801C2111.63 153.837 2585.54 236.67 2743.87 289.082" className="stroke-neutral-700/50" stroke="currentColor" />
      <path d="M0.5 110.955C232.505 183.891 853.749 307.774 1482.69 219.81C2111.63 131.846 2585.54 214.679 2743.87 267.091" className="stroke-neutral-700/50" stroke="currentColor" />
      <path d="M0.5 88.9639C232.505 161.901 853.749 285.783 1482.69 197.819C2111.63 109.855 2585.54 192.688 2743.87 245.1" className="stroke-neutral-700/50" stroke="currentColor" />
      <path d="M0.5 66.9729C232.505 139.91 853.749 263.792 1482.69 175.828C2111.63 87.8643 2585.54 170.697 2743.87 223.109" className="stroke-neutral-700/50" stroke="currentColor" />
      <path d="M0.5 44.9819C232.505 117.919 853.749 241.801 1482.69 153.837C2111.63 65.8733 2585.54 148.706 2743.87 201.118" className="stroke-neutral-700/50" stroke="currentColor" />
      <path d="M0.5 22.991C232.505 95.9276 853.749 219.81 1482.69 131.846C2111.63 43.8824 2585.54 126.715 2743.87 179.127" className="stroke-neutral-700/50" stroke="currentColor" />
      <path d="M0.5 1C232.505 73.9367 853.749 197.819 1482.69 109.855C2111.63 21.8914 2585.54 104.724 2743.87 157.136" className="stroke-neutral-700/50" stroke="currentColor" />
    </svg>

    <div className="relative z-10">
      <div className="w-full max-w-5xl px-4 xl:px-0 py-10 lg:pt-16 mx-auto">
        <div className="inline-flex items-center font-bold text-white">   
                      BR
          <div className="border-s border-neutral-700 ps-5 ms-5">
            <p className="text-sm text-neutral-400">
              © 2025 Brandon Fidelin.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </>

  )
}

export default Footer
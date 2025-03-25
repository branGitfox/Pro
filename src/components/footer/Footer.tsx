
import emailjs from 'emailjs-com';
import { useState } from 'react';
import {  toast, ToastContainer } from 'react-toastify';

function Footer() {
  const [loader, setLoader] = useState<boolean>(false)
  const sendEmail = async (e:React.ChangeEvent<HTMLFormElement>)  => {
     e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
      setLoader(true)
    await emailjs.sendForm('service_m0052xg', 'template_bypqpvc',e.target, 'Zt1TUCueO51qvJEol').
       then(() => setLoader(false))
       .then(() => toast.success('Votre message a bien été envoyé'))
       .catch(() => toast.error("Verifier votre connexion internet"))
   }


  return (
    <div className="bg-neutral-900">
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
                    peer-not-placeholder-shown:text-neutral-400" >Parle moi de ton projet</label>
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
  )
}

export default Footer
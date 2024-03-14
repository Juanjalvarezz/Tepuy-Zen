import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import DarkMode from '../components/DarkMode'
import { motion } from 'framer-motion'
import UserGUias from '../components/UserGuias'

const Guias = () => {
  return (
    <motion.div className='dark:bg-[url(https://i.ibb.co/pfZ1D3h/fondodark.png)]' style={{backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}  initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Header/>
      
      <section alt="Guias Turisticos" className="w-4/5 mx-auto mt-5">
      <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg mb-4">
                <h1 className="title text-3xl font-bold mb-2 text-slate-200 tracking-wider" style={{ color: '#DDE7C7' }}>Guías Turisticos</h1>
                <p className="amatic-sc-bold text-3xl mb-4">Ven y conoce toda la magia que hay detras de este maravilloso lugar con nuestros guias turisticos certificados. Déjate envolver por la energía mística de los tepuyes, la majestuosidad de las lagunas y la fuerza de los saltos de agua mientras disfrutas de una experiencia de relajación y renovación inigualable.</p>
      </div>
      </section>
      <UserGUias/>

      <Footer/>
      <DarkMode/>
    </motion.div>
  )
}

export default Guias
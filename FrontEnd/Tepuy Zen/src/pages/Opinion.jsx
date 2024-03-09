import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import DarkMode from '../components/DarkMode'
import { motion } from 'framer-motion'
import UserOpinion from '../components/UserOpinion'
import OpinionForm from '../components/OpinionForm'

const Opinion = () => {
  return (
    <motion.div className='dark:bg-[url(https://i.ibb.co/pfZ1D3h/fondodark.png)]' style={{backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}  initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Header/>

      <section alt="Opiniones de usuarios" className="w-4/5 mx-auto mt-5">

        <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg mb-4">
            <h1 className="title text-3xl font-bold mb-2 text-slate-200 tracking-wider" style={{ color: '#DDE7C7' }}>Opiniones y Reseñas</h1>
            <p className="amatic-sc-bold text-3xl mb-4 dark:text-white">Descubre lo que otros viajeros opinan sobre su experiencia en Tepuy Zen. Lee sus comentarios y valoraciones sobre las habitaciones, el servicio, las instalaciones, la ubicación y mucho más.</p>
        </div>

      </section>
      
    <UserOpinion/>

    <section className="w-4/5 mx-auto mt-5">
      <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg w-fit mx-auto">
            <h1 className="title text-3xl font-bold text-slate-200 tracking-wider text-center" style={{ color: '#DDE7C7' }}>Te gustaria dejar una Opinion?</h1>
      </div>
      </section>

      <div className='-mt-6 mb-3'>
      <OpinionForm/>
      </div>

      <DarkMode/>
      <Footer/>
    </motion.div>
  )
}

export default Opinion
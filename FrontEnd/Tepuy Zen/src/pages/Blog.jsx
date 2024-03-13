import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import DarkMode from '../components/DarkMode'
import { motion } from 'framer-motion'
import UserArticles from '../components/UserArticles'
import UserTips from '../components/UserTips'

const Blog = () => {
  return (
    <motion.div className='dark:bg-[url(https://i.ibb.co/pfZ1D3h/fondodark.png)]' style={{backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}  initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Header/>

      <section alt="Articulos de viaje" className="w-4/5 mx-auto mt-5">
      <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg mb-4">
          <h1 className="title text-3xl font-bold mb-2 text-slate-200 tracking-wider" style={{ color: '#DDE7C7' }}>Articulos de viaje</h1>
          <p className="amatic-sc-bold text-3xl mb-4">Embárcate en un viaje de descubrimiento con nuestros artículos de viajes cuidadosamente seleccionados. Toma estos articulos como inspiración para ayudarte a planificar tu aventura. </p>
      </div>
      </section>
      <UserArticles/>

      <section alt="Articulos de viaje" className="w-4/5 mx-auto mt-5">
          <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg mb-4">
          <h1 className="title text-3xl font-bold mb-2 text-slate-200 tracking-wider" style={{ color: '#DDE7C7' }}>Tips para tu viaje</h1>
          <p className="amatic-sc-bold text-3xl mb-4">Viajar es una de las experiencias más enriquecedoras que podemos tener en la vida. Nos permite conocer nuevas culturas, personas y lugares, y nos ayuda a crecer como individuos. Por eso, en este artículo, te daremos algunos tips y consejos para que tu próximo viaje sea una experiencia inolvidable. </p>
      </div>
      </section>
      <UserTips/>

      <DarkMode/>
      <Footer/>
    </motion.div>
  )
}

export default Blog
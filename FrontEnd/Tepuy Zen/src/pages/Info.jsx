import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Slider2 from "../components/Slider2"
import DarkMode from '../components/DarkMode'
import { motion } from 'framer-motion'
import UserServices from '../components/UserServices'
import UserHorarios from '../components/UserHorarios'
import UserPromo from '../components/UserPromos'

const Info = () => {
  return (
    <motion.div className='dark:bg-[url(https://i.ibb.co/pfZ1D3h/fondodark.png)]' style={{backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}  initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Header/>
      <Slider2/>
      
      <section>

      <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg mb-4 text-center mt-2 w-fit mx-auto">
          <h1 className="title text-3xl font-bold mb-2 text-slate-200 tracking-wider" style={{ color: '#DDE7C7' }}>Servicios</h1>
      </div>
      <UserServices/>

      <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg mb-4 text-center mt-2 w-fit mx-auto">
          <h1 className="title text-3xl font-bold mb-2 text-slate-200 tracking-wider" style={{ color: '#DDE7C7' }}>Horarios</h1>
      </div>
      <UserHorarios/>

      <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg mb-4 text-center mt-2 w-fit mx-auto">
          <h1 className="title text-3xl font-bold mb-2 text-slate-200 tracking-wider" style={{ color: '#DDE7C7' }}>Promociones</h1>
      </div>
      <UserPromo/>

      </section>





      <DarkMode/>
      <Footer/>
    </motion.div>
  )
}

export default Info
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Clima from '../components/Clima'
import DarkMode from '../components/DarkMode'
import { motion } from 'framer-motion'
import UserHabitaciones from '../components/UserHabitacion'

//background: '#98C9A3'
const Dashboard = () => {
  return (
    <motion.div className='dark:bg-[url(https://i.ibb.co/pfZ1D3h/fondodark.png)]' style={{backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Header/>
      <Slider/>
      <Clima/>

      <section alt="Guias Turisticos" className="w-4/5 mx-auto mt-5 flex justify-center">
      <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg mb-4 w-fit">
        <h1 className="title text-3xl font-bold mb-2 text-slate-200 tracking-wider" style={{ color: '#DDE7C7' }}>Habitaciones disponibles</h1>
      </div>
     </section>

      <UserHabitaciones/>
      
      <DarkMode/>
      <Footer/>
    </motion.div>
  )
}

export default Dashboard

import React from 'react'
import Footer from '../components/Footer'
import DarkMode from '../components/DarkMode'
import { motion } from 'framer-motion'
import AdminHeader from '../components/AdminHeader'
import HabitacionesForm from '../components/HabitacionForm'
import HabitacionesList from '../components/HabitacionList'
import ReviewList from '../components/ReviewList'

const AdminDashboard = () => {
  return (
    <motion.div className='dark:bg-[url(https://i.ibb.co/pfZ1D3h/fondodark.png)]' style={{backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}  initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      
      <AdminHeader/>
      <div className="container mx-auto">
        <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg">
        <h1 className="title text-3xl text-center font-bold mb-2 text-slate-200 tracking-wider" style={{ color: '#DDE7C7' }}>Habitaciones</h1>
        </div>
      <HabitacionesForm/>
      <HabitacionesList/>
      </div>

      <div className="container mx-auto">
        <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg">
        <h1 className="title text-3xl text-center font-bold mb-2 text-slate-200 tracking-wider" style={{ color: '#DDE7C7' }}>Reviews de Habitaciones</h1>
        </div>
      <ReviewList/>
      </div>
      

      <Footer/>
      <DarkMode/>
    </motion.div>
  )
}

export default AdminDashboard

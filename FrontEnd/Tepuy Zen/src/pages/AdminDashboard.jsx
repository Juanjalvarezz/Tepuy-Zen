import React from 'react'
import Footer from '../components/Footer'
import DarkMode from '../components/DarkMode'
import { motion } from 'framer-motion'
import AdminHeader from '../components/AdminHeader'

const AdminDashboard = () => {
  return (
    <motion.div className='dark:bg-[url(https://i.ibb.co/pfZ1D3h/fondodark.png)]' style={{backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}  initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      
      <AdminHeader/>
      <h1>admin</h1>
      <Footer/>

      <DarkMode/>
    </motion.div>
  )
}

export default AdminDashboard

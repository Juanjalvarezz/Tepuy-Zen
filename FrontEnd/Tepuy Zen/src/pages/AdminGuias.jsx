import React from 'react'
import Footer from '../components/Footer'
import AdminHeader from '../components/AdminHeader'
import DarkMode from '../components/DarkMode'
import { motion } from 'framer-motion'
import GuiasForm from '../components/GuiasForm'
import GuiasList from '../components/GuiasList'

function AdminGuias() {
  return (
    <motion.div className='dark:bg-[url(https://i.ibb.co/pfZ1D3h/fondodark.png)]' style={{backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}  initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      
    <AdminHeader/>

    <div className="container mx-auto">
    <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg">
      <h1 className="title text-3xl text-center font-bold mb-2 text-slate-200 tracking-wider" style={{ color: '#DDE7C7' }}>Guías Turisticos</h1>
    </div>

    <GuiasForm/>
    <GuiasList/>
    </div>


    <DarkMode/>
    <Footer/>
  </motion.div>
  )
}

export default AdminGuias

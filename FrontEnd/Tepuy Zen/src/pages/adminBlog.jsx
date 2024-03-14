import React from 'react'
import Footer from '../components/Footer'
import AdminHeader from '../components/AdminHeader'
import DarkMode from '../components/DarkMode'
import { motion } from 'framer-motion'
import AdminArticles from './AdminArticles'
import AdminTips from './AdminTips'


const Blog = () => {
  return (
    <motion.div className='dark:bg-[url(https://i.ibb.co/pfZ1D3h/fondodark.png)]' style={{backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}  initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      
      <AdminHeader/>

      <AdminArticles/>
      <AdminTips/>

      <DarkMode/>
      <Footer/>
    </motion.div>
  )
}

export default Blog
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import DarkMode from '../components/DarkMode'

const Blog = () => {
  return (
    <div className='dark:bg-[url(https://i.ibb.co/pfZ1D3h/fondodark.png)]' style={{backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}>
      <Header/>
      <h1>Blog</h1>
      <DarkMode/>
      <Footer/>
    </div>
  )
}

export default Blog
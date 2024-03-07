import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import DarkMode from '../components/DarkMode'

const Guias = () => {
  return (
    <div className='dark:bg-[url(https://i.ibb.co/pfZ1D3h/fondodark.png)]' style={{backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}>
      <Header/>
      <h1>Guias</h1>
      <Footer/>
      <DarkMode/>
    </div>
  )
}

export default Guias
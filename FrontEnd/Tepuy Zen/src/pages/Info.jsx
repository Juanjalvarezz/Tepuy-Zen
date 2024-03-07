import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Slider2 from "../components/Slider2"
import DarkMode from '../components/DarkMode'

const Info = () => {
  return (
    <div className='dark:bg-[url(https://i.ibb.co/pfZ1D3h/fondodark.png)]' style={{backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}>
      <Header/>
      <Slider2/>
      <h1>Info</h1>
      <DarkMode/>
      <Footer/>
    </div>
  )
}

export default Info
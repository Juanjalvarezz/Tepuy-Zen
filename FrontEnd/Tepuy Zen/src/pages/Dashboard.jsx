import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Clima from '../components/Clima'
import DarkMode from '../components/DarkMode'

//background: '#98C9A3'
const Dashboard = () => {
  return (
    <div className='dark:bg-[url(https://i.ibb.co/pfZ1D3h/fondodark.png)]' style={{backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}>
      <Header/>
      <Slider/>
      <Clima/>

      <h1>Dashboard</h1>
      
      <DarkMode/>
      <Footer/>
    </div>
  )
}

export default Dashboard

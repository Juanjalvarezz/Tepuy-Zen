import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Clima from '../components/Clima'

const Dashboard = () => {
  return (
    <div>
      <Header/>
      <Slider/>
      <Clima/>

      <h1>Dashboard</h1>
      
      <Footer/>
    </div>
  )
}

export default Dashboard

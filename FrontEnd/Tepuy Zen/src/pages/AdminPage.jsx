import React from 'react'
import Footer from '../components/Footer'
import DarkMode from '../components/DarkMode'

const AdminPage = () => {
  return (
    <div className='dark:bg-[url(https://i.ibb.co/pfZ1D3h/fondodark.png)]' style={{backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}>
      <h1>admin</h1>
      <Footer/>
      <DarkMode/>
    </div>
  )
}

export default AdminPage

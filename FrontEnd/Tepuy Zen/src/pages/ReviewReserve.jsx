import React, { useState } from 'react';
import Back from '../components/Back'
import Footer from '../components/Footer'
import DarkMode from '../components/DarkMode'
import { motion } from 'framer-motion'
import ReviewForm from '../components/ReviewForm'
import UserReview from '../components/UserReview'
import Formulario from '../components/Formulario'

function ReviewReserve() {
    const [enviado, setEnviado] = useState(false);

  return (
    <div>
        <motion.div className='dark:bg-[url(https://i.ibb.co/pfZ1D3h/fondodark.png)]' style={{backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover'}}  initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Back/>
      
      <section alt="Guias Turisticos" className="w-4/5 mx-auto">
      <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg mb-1">
            <h1 className="title text-3xl font-bold mb-2 text-slate-200 tracking-wider text-center" style={{ color: '#DDE7C7' }}>Reviews y Reservas</h1>
      </div>
      </section>

      <div className='w-4/5 mx-auto mt-1 mb-3'>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center">

            <ReviewForm/>
            <Formulario enviado={enviado} setEnviado={setEnviado} />

        </div>
      </div>

      <section alt="Guias Turisticos" className="w-4/5 mx-auto mt-2 flex justify-center">
      <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg mb-2 w-fit">
        <h1 className="title text-3xl font-bold text-slate-200 tracking-wider" style={{ color: '#DDE7C7' }}>Reviews de Habitaciones</h1>
      </div>
     </section>

      <UserReview/>




      <Footer/>
      <DarkMode/>
    </motion.div>

     

    </div>
  )
}

export default ReviewReserve

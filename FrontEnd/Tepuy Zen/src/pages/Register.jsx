import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Navigate from '../components/Navigate';
import { motion } from 'framer-motion'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await axios.post('http://localhost:3000/api/auth/singup', {
        name,
        email,
        password,
      });
      window.location.href = '/login';
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <motion.div  initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
    <Navigate/>

    <div className="w-4/5 mx-auto ">
    <div className='bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-5 mb-5 '>
  <h2 className='title text-2xl text-center text-gray-800 font-semibold mb-4'>Registro</h2>
  <form onSubmit={handleSubmit}>
    <div className='mb-4 '>
      <label htmlFor='name' className='block amatic-sc-regular text-2xl text-gray-700 font-semibold mb-2'>Nombre:</label>
      <input
        type='text'
        id='name'
        placeholder='Ingresa tu Nombre'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='appearance-none amatic-sc-regular text-xl border-2 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500'
      />
    </div>
    <div className='mb-4'>
      <label htmlFor='email' className='block amatic-sc-regular text-2xl text-gray-700 font-semibold mb-2'>Email:</label>
      <input
        type='email'
        id='email'
        placeholder='Ingresa tu Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='appearance-none amatic-sc-regular text-xl border-2 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500'
      />
    </div>
    <div className='mb-4'>
      <label htmlFor='password' className='block amatic-sc-regular text-2xl text-gray-700 font-semibold mb-2'>Contraseña:</label>
      <input
        type='password'
        id='password'
        placeholder='Ingresa tu contraseña'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='appearance-none amatic-sc-regular text-xl border-2 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500'
      />
    </div>
    <div className='mb-4'>
      <label htmlFor='confirmPassword' className='block amatic-sc-regular text-2xl text-gray-700 font-semibold mb-2'>Confirmar contraseña :</label>
      <input
        type='password'
        id='confirmPassword'
        placeholder='Confirma tu contraseña'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className='appearance-none amatic-sc-regular text-xl border-2 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500'
      />
    </div>
    {error && <p className='text-red-500 amatic-sc-regular text-xl font-semibold text-center mt-2'>{error}</p>}
    <button type='submit' className=' amatic-sc-regular text-3xl bg-[#98C9A3] hover:bg-[#77BFA3] hover:shadow-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mx-auto transition duration-400'>Registro</button>
  </form>
</div>
</div>


    <Footer/>
    </motion.div>
  );
};

export default Register;
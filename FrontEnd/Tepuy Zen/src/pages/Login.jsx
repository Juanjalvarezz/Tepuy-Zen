import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password,
      });

      if (res.data && res.data.token) {
        localStorage.setItem('token', res.data.token);
        const userRole = res.data.user && res.data.user.role; // Access role from user object

        console.log('UserRole:', userRole); // Log user role

        if (userRole === 'user') {
          window.location.href = '/dashboard';
        } else if (userRole === 'admin') {
          window.location.href = '/adminpage';
        } else {
          // Handle other roles if necessary
        }
      } else {
        setError('Invalid response from server');
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
    <Nav/>
    <div className="w-4/5 mx-auto ">
    <div className='bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-16 mb-16 '>
  <h2 className='title text-2xl text-center text-gray-800 font-semibold mb-4'>Login</h2>
      <form onSubmit={handleSubmit}>
      <div className='mb-4 '>
      <label className='block amatic-sc-regular text-2xl text-gray-700 font-semibold mb-2'>Email:</label>
          <input
            type="email"
            value={email}
            placeholder='Ingresa tu Email'
            onChange={(e) => setEmail(e.target.value)}
            className='appearance-none amatic-sc-regular text-xl border-2 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500'
          />
        </div>

        <div className='mb-4 '>
        <label className='block amatic-sc-regular text-2xl text-gray-700 font-semibold mb-2'>Contraseña:</label>
          <input
            type="password"
            value={password}
            placeholder='Ingresa tu contraseña'
            onChange={(e) => setPassword(e.target.value)}
            className='appearance-none amatic-sc-regular text-xl border-2 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500'
          />
        </div>


        {error && <p className='text-red-500 amatic-sc-regular text-xl font-semibold text-center mt-2' >{error}</p>}
        <button type="submit"  className=' amatic-sc-regular text-3xl bg-[#98C9A3] hover:bg-[#77BFA3] hover:shadow-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mx-auto transition duration-400'>Login</button>
      </form>
    </div>
    </div>



    <Footer/>
    
    
    </>
  );
};

export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';

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
    <div className='text-black'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>

    <Footer/>
    
    
    </>
  );
};

export default Login;

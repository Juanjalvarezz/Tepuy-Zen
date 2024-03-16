import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import AdminDashboard from '../pages/AdminDashboard'
import Info from '../pages/Info'
import Guias from '../pages/Guias'
import Opinion from '../pages/Opinion'
import Blog from '../pages/Blog'
import AdminBlog from '../pages/adminBlog'
import AdminOpinion from '../pages/AdminOpinion'

import { AnimatePresence } from 'framer-motion'
import AdminGuias from '../pages/AdminGuias'
import AdminInfo from '../pages/AdminInfo'
import ReviewReserve from '../pages/ReviewReserve'


function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>

          <Route path='/' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/adminDashboard' element={<AdminDashboard/>} />
          <Route path='/info' element={<Info/>} />
          <Route path='/guias' element={<Guias/>} />
          <Route path='/opinion' element={<Opinion/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/adminOpinions' element={<AdminOpinion/>} />
          <Route path='/adminBlog' element={<AdminBlog/>} />
          <Route path='/adminGuias' element={<AdminGuias/>} />
          <Route path='/adminInfo' element={<AdminInfo/>} />
          <Route path='/reviewReserve' element={<ReviewReserve/>} />

        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes

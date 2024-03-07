import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AdminPage from './pages/AdminPage'
import Info from './pages/Info'
import Guias from './pages/Guias'
import Opinion from './pages/Opinion'
import Blog from './pages/Blog'

const App = () => {
  return (
    <Router>
      <Routes>

          <Route path='/' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/adminpage' element={<AdminPage/>} />
          <Route path='/info' element={<Info/>} />
          <Route path='/guias' element={<Guias/>} />
          <Route path='/opinion' element={<Opinion/>} />
          <Route path='/blog' element={<Blog/>} />

      </Routes>
    </Router>
  )
}

export default App;

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AdminPage from './pages/AdminPage'

const App = () => {
  return (
    <Router>
      <Routes>

          <Route path='/' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/adminpage' element={<AdminPage/>} />

      </Routes>
    </Router>
  )
}

export default App;

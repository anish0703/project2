import React from 'react'
import Login from './components/Login/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './components/Register/Register'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'



function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
           
          <Route path='/' element={<Login />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/home' element={<Home />}></Route>
      </Routes>
  </BrowserRouter>
     
    
  )
}

export default App
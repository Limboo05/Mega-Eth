import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Quiz from './Pages/Quiz/Quiz'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>} />
    <Route path='/quiz' element={<Quiz/>} />
  </Routes>
  </>
  )
}

export default App

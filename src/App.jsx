// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/profile'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import About from './pages/about'
import Header from './components/header'

export default function App() {
  return (
   <BrowserRouter>
   <Header />
  <Routes>
      <Route path='/' element={<Home/> } />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={<Profile />} />
  </Routes>
  </BrowserRouter>
  )
}

// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Profile from './pages/Profile.jsx'
import Home from './pages/Home.jsx'
import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn.jsx'
import About from './pages/about.jsx'
import Header from './components/header.jsx'

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
  );
}

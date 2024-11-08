import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// components
import Navbar from './components/Navbar'


// pages
import Home from './pages/Home'
import About from './pages/About'
import ThirdPage from './pages/ThirdPage'

function App() {

  return (
    <>
    <h1>Context API</h1>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/third' element={<ThirdPage/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

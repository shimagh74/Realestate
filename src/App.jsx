import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import PropertyDetails from './pages/PropertyDetails'

function App() {

  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='property/:id' element={<PropertyDetails />} /> */}
      </Routes>
      {/* <Footer/> */}
    </div>
  )
}

export default App

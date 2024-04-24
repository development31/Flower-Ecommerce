import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'

function Routing() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        <Footer/>
    </Router>
      
    </>
  )
}

export default Routing

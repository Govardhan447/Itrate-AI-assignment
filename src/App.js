import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import Puja from './components/Puja'
import Header from './components/Header'
import PujaPackage from './components/PujaPackage'
import ReviewBooking from './components/ReviewBooking'
import Booking from './components/Booking'

import './App.css'

function App() {
  return (
    
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/puja" element={<Puja />} />
          <Route path="/pujapackage" element={<PujaPackage />} />
          <Route path="/reviewBooking" element={<ReviewBooking />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Router>
    
  )
}

export default App

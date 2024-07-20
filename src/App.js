import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import Puja from './components/Puja'
import Header from './components/Header'
import PujaPackage from './components/PujaPackage'
import ReviewBooking from './components/ReviewBooking'

import './App.css'

function App() {
  return (
    <div className="bg-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/puja" element={<Puja />} />
          <Route path="/pujapackage" element={<PujaPackage />} />
          <Route path="/reviewBooking" element={<ReviewBooking />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

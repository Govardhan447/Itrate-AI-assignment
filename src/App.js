import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import Puja from './components/Puja'
import Header from './components/Header'
import PujaPackage from './components/PujaPackage'
import './App.css'

function App() {
  return (
    <Router className="bg-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/puja" element={<Puja />} />
        <Route path="/pujapackage" element={<PujaPackage />} />
      </Routes>
    </Router>
  )
}

export default App

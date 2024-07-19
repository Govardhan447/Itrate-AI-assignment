import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import Puja from './components/Puja'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/puja' element={<Puja />} />
      </Routes>
    </Router>
  )
}

export default App

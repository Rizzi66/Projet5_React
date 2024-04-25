import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Accommodation from './pages/Accommodation'
import Error from './pages/Error'
import Footer from './components/Footer'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div className='size-container'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation/:idAccommodation" element={<Accommodation />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>,
)

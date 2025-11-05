import React, { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import Services from './pages/Services'
import Contact from './pages/Contact'
import HowitWorks from './pages/HowitWorks'
import Brands from './pages/Brands'
import AboutUs from './pages/AboutUs'
import ScrollToTop from './components/Scrollmount'
import Loader from './components/Loader'
import PageNotFound from './pages/PageNoFound'
import Terms from './pages/Terms'
import PrivacyPolicy from './pages/Privacypolicy'

function App() {
  const [loading, setLoading] = useState(true); 
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData(true)
      setLoading(false); 
    }, 2000);
  }, []);

  if (loading) return <Loader />;
  if (!data) return <PageNotFound />; // optional: keep this as a global fallback if your "data" is required

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/how-it-works' element={<HowitWorks/>} />
        <Route path='/our-brands' element={<Brands/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/terms&conditions' element={<Terms/>} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>} />

        {/* <<-- Wildcard route for any unmatched path --> */}
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

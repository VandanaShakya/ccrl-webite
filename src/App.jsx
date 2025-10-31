
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import Services from './pages/Services'
import Contact from './pages/Contact'
import HowitWorks from './pages/HowitWorks'
import Brands from './pages/Brands'
import AboutUs from './pages/AboutUs'

function App() {

  return (
    <>
    <Navbar/>
       <Routes>

         <Route path='/' element={<Homepage/>} />
         <Route path='/services' element={<Services/>} />
         <Route path='/contact-us' element={<Contact/>} />
         <Route path='/how-it-works' element={<HowitWorks/>} />
         <Route path='/our-brands' element={<Brands/>} />
         <Route path='/about-us' element={<AboutUs/>} />
       </Routes>
       <Footer/>
    </>
  )
}

export default App

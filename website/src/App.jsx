// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import About from './Components/About/About'
import Campus from "./Components/Campus/Campus"
import Testmonials from "./Components/Testimonials/testmonials"
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';
import { Route, BrowserRouter, Routes,} from 'react-router-dom';



const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/about" element={<About />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/testmonials" element={<Testmonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
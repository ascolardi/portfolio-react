import './App.css'

import About from "./pages/About"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from "react-router-dom"

function App() {
  

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App

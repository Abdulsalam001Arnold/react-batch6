
import Navbar from "./components/Navbar.jsx"
import Homepage from "./Pages/Home.jsx"
import Aboutpage from "./Pages/About.jsx"
import Contactpage from "./Pages/Contact.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<Aboutpage/>}/>
      <Route path="/contact" element={<Contactpage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

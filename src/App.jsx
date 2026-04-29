
import Navbar from "./components/Navbar.jsx"
import Homepage from "./Pages/Home.jsx"
import Aboutpage from "./Pages/About.jsx"
import Contactpage from "./Pages/Contact.jsx"
import SignupPage from "./Pages/Signup.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./Pages/Login.jsx"

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<Aboutpage/>}/>
      <Route path="/contact" element={<Contactpage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

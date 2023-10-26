import React from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./views/Home"

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className='mx-auto max-w-screen-md p-10'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App

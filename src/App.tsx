import React from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./views/Home"
import Login from "./views/Login"
import Signup from "./views/Signup"
import HackerPortal from "./views/HackerPortal"
import { AuthContextProvider } from "./contexts/auth"
import UnauthenticatedRoute from "./components/UnauthenticatedRoute"
import AuthenticatedRoute from "./components/AuthenticatedRoute"
import AdminPortal from "./views/AdminPortal"

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <Navbar />
      <div className='mx-auto max-w-screen-md p-10'>
        <Routes>
          <Route index element={<Home />} />

          {/* You cannot be logged in to access these routes*/}
          <Route element={<UnauthenticatedRoute />}>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Route>

          {/* You must be logged in to access these routes*/}
          <Route element={<AuthenticatedRoute />}>
            <Route path='portal/hacker' element={<HackerPortal />}>
              {/* Hacker Portal sub-routes go here*/}
            </Route>
            <Route path='portal/admin' element={<AdminPortal />}>
              {/* Admin Portal sub-routes go here*/}
            </Route>
          </Route>

          <Route path='*' element={<div>Not Found</div>} />
        </Routes>
      </div>
      <Footer />
    </AuthContextProvider>
  )
}

export default App

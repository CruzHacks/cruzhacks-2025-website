import React from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./views/Home"
import Login from "./views/Login"
import Signup from "./views/Signup"
import HackerPortal from "./views/HackerPortal"
import { AuthContextProvider } from "./contexts/auth"
import UnauthenticatedRoute from "./components/protectedRoutes/UnauthenticatedRoute"
import AdminPortal from "./views/AdminPortal"
import RoleProtectedRoute from "./components/protectedRoutes/RoleProtectedRoute"
import PortalRedirectRoute from "./components/protectedRoutes/PortalRedirectRoute"
import ApplicantPortal from "./views/ApplicantPortal"

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <Navbar />
      <div className=''>
        <Routes>
          <Route index element={<Home />} />

          {/* You cannot be logged in to access these routes*/}
          <Route element={<UnauthenticatedRoute />}>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Route>

          {/* You must be logged in to access these routes*/}
          <Route path='portal' element={<PortalRedirectRoute />} />

          <Route element={<RoleProtectedRoute allowedRole='applicant' />}>
            <Route path='portal/applicant' element={<ApplicantPortal />}>
              {/* Hacker Portal sub-routes go here*/}
            </Route>
          </Route>
          <Route element={<RoleProtectedRoute allowedRole='hacker' />}>
            <Route path='portal/hacker' element={<HackerPortal />}>
              {/* Hacker Portal sub-routes go here*/}
            </Route>
          </Route>
          <Route element={<RoleProtectedRoute allowedRole='admin' />}>
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

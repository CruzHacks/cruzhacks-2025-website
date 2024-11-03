import React from "react"
import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import RoleProtectedRoute from "./components/protectedRoutes/RoleProtectedRoute"
import PortalRedirectRoute from "./components/protectedRoutes/PortalRedirectRoute"
import UnauthenticatedRoute from "./components/protectedRoutes/UnauthenticatedRoute"
import Home from "./views/(static)/home"
import Login from "./views/Login"
import Signup from "./views/Signup"
import NotFound from "./views/NotFound"
import HackerPortal from "./views/portal/hacker"
import AdminPortal from "./views/portal/admin"
import DashboardAdmin from "./views/portal/admin/dashboard"
import ApplicationsAdmin from "./views/portal/admin/applications"
import UsersAdmin from "./views/portal/admin/users"
import TeamsHacker from "./views/portal/hacker/team"
import TeamAdmin from "./views/portal/admin/teams"
import PortalApplicant from "./views/portal/applicant"
import DashboardApplicant from "./views/portal/applicant/DashboardApplicant"
import useAuth from "./hooks/useAuth"
import UserSection from "./views/apply/0 - User"
import Apply, {
  DemographicsSection,
  LogisticsSection,
  ShortResponseSection,
  SocialsSection,
  WaviersSection,
} from "./views/apply"
import ReviewSection from "./views/apply/6 - Review"
import { Toaster } from "react-hot-toast"
import ApplicationsReviewAdmin from "./views/portal/admin/applications/Review"
import ScrollToAnchor from "./components/scrollControl/ScrollToAnchor"
import Team from "./views/(static)/team"
import ApplicationClosed from "./views/apply/ApplicationClosed"
import Map from "./views/(static)/support/map"
import Resources from "./views/(static)/support/resources"
import FAQ from "./views/(static)/support/faq"
import Support from "./views/(static)/support/home"
import StaticWrapper from "./views/(static)"

import QRCheckIn from "./views/portal/admin/QRCheckIn"
import DashbaordHacker from "./views/portal/hacker/dashboard"
import QRCodeHacker from "./views/portal/hacker/QRCode"
import SubmitHacker from "./views/portal/hacker/submit"
import SponsorshipPage from "./views/(static)/SponsorshipPage"

const App: React.FC = () => {
  const {
    auth: { loading },
  } = useAuth()

  if (loading) {
    return <div className='sr-only'>loading</div>
  }

  return (
    <>
      <Toaster
        toastOptions={{
          className: "font-subtext",
          position: "bottom-right",
          style: {
            background: "#071162",
            color: "#D3DAF4",
          },
          success: {
            style: {
              background: "#4BB543",
              color: "#FFFFFF",
            },
          },
          error: {
            style: {
              background: "#de3535",
              color: "#FFFFFF",
            },
          },
        }}
      />
      <ScrollToAnchor />

      <Routes>
        {/* These routes are accessible to everyone*/}
        <Route path='sponsorship' element = {<SponsorshipPage />} />
        
        <Route element={<StaticWrapper />}>
          <Route index element={<Home />} />
          <Route path='team' element={<Team />} />
          <Route path='support' element={<Outlet />}>
            <Route index element={<Support />} />
            <Route path='maps' element={<Map />} />
            <Route path='resources' element={<Resources />} />
            <Route path='faq-and-rules' element={<FAQ />} />
          </Route>
        </Route>

        {/* You cannot be logged in to access these routes*/}
        <Route element={<UnauthenticatedRoute />}>
          <Route path='login' element={<Login />} />
          <Route path='organizers-only/signup' element={<Signup />} />
          <Route path='apply' element={<Outlet />}>
            <Route index element={<ApplicationClosed />} />
            <Route path='*' element={<ApplicationClosed />} />
          </Route>

          <Route path='j7hxc5p6ri/apply' element={<Apply />}>
            <Route
              index
              element={<Navigate replace to='/j7hxc5p6ri/apply/user' />}
            />
            <Route path='user' element={<UserSection />} />
            <Route path='demographics' element={<DemographicsSection />} />
            <Route path='short_response' element={<ShortResponseSection />} />
            <Route path='logistics' element={<LogisticsSection />} />
            <Route path='socials' element={<SocialsSection />} />
            <Route path='waivers' element={<WaviersSection />} />
            <Route path='review' element={<ReviewSection />} />
          </Route>
        </Route>

        {/* You must be logged in to access these routes*/}
        <Route path='portal' element={<PortalRedirectRoute />} />

        <Route element={<RoleProtectedRoute allowedRole='applicant' />}>
          <Route path='portal/applicant' element={<PortalApplicant />}>
            <Route index element={<DashboardApplicant />} />
            <Route path='check-in' element={<QRCodeHacker />} />
          </Route>
        </Route>

        <Route element={<RoleProtectedRoute allowedRole='hacker' />}>
          <Route path='portal/hacker' element={<HackerPortal />}>
            <Route index element={<DashbaordHacker />} />
            <Route path='check-in' element={<QRCodeHacker />} />
            <Route path='team' element={<TeamsHacker />} />
            <Route path='submit' element={<SubmitHacker />} />
          </Route>
        </Route>

        <Route element={<RoleProtectedRoute allowedRole='admin' />}>
          <Route path='portal/admin' element={<AdminPortal />}>
            <Route index element={<DashboardAdmin />} />
            <Route path='applications' element={<ApplicationsAdmin />} />
            <Route
              path='applications/review/:email'
              element={<ApplicationsReviewAdmin />}
            />
            <Route path='teams' element={<TeamAdmin />} />
            <Route path='users' element={<UsersAdmin />} />
            <Route path='check-in' element={<QRCheckIn />} />
          </Route>
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

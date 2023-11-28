import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import RoleProtectedRoute from "./components/protectedRoutes/RoleProtectedRoute"
import PortalRedirectRoute from "./components/protectedRoutes/PortalRedirectRoute"
import UnauthenticatedRoute from "./components/protectedRoutes/UnauthenticatedRoute"
import Home from "./views/home"
import Login from "./views/Login"
import Signup from "./views/Signup"
import NotFound from "./views/NotFound"
import HackerPortal from "./views/portal/hacker"
import AdminPortal from "./views/portal/admin"
import DashboardAdmin from "./views/portal/admin/DashboardAdmin"
import ApplicationsAdmin from "./views/portal/admin/applications"
import UsersAdmin from "./views/portal/admin/users"
import TeamsAdmin from "./views/portal/admin/teams"
import ApplicationApplicant from "./views/portal/applicant/Application"
import PortalApplicant from "./views/portal/applicant"
import DashboardApplicant from "./views/portal/applicant/DashboardApplicant"
import useAuth from "./hooks/useAuth"
import Apply, {
  DemographicsSection,
  LogisticsSection,
  ShortResponseSection,
  SocialsSection,
  WaviersSection,
} from "./views/apply"
import { Toaster } from "react-hot-toast"
import UserSection from "./views/apply/0 - User"
import ApplicationsReviewAdmin from "./views/portal/admin/applications/Review"
import ReviewSection from "./views/apply/6 - Review"
import ScrollToAnchor from "./components/scrollControl/ScrollToAnchor"
import Team from "./views/team"

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
        <Route index element={<Home />} />
        <Route path='team' element={<Team />} />

        {/* You cannot be logged in to access these routes*/}
        <Route element={<UnauthenticatedRoute />}>
          <Route path='login' element={<Login />} />
          <Route path='organizers-only/signup' element={<Signup />} />
          <Route path='apply' element={<Apply />}>
            <Route index element={<Navigate replace to='/apply/user' />} />
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
            <Route path='application' element={<ApplicationApplicant />} />
          </Route>
        </Route>

        <Route element={<RoleProtectedRoute allowedRole='hacker' />}>
          <Route path='portal/hacker' element={<HackerPortal />}>
            {/* Hacker Portal sub-routes go here*/}
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
            <Route path='teams' element={<TeamsAdmin />} />
            <Route path='users' element={<UsersAdmin />} />
          </Route>
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

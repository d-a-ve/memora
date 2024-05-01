import { Suspense, lazy } from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { DashboardLayout } from "@modules/dashboard";

import { PageLoader } from "@components/Loader";
import { OAuthRedirectRoute } from "@components/OAuthRedirectRoute";
import {
  ProtectedRouteFromAuthenticatedUser,
  UserProtectedRoute,
} from "@components/ProtectedRoute";

const Login = lazy(() => import("@pages/Login"));
const Signup = lazy(() => import("@pages/Signup"));
const DashboardOverview = lazy(() => import("@pages/dashboard/Overview"));
const DashboardUpcomingBirthdays = lazy(
  () => import("@pages/dashboard/UpcomingBirthday")
);
const ForgotPassword = lazy(() => import("@pages/ForgotPassword"));
const ResetPassword = lazy(() => import("@pages/ResetPassword"));
const Home = lazy(() => import("@pages/Home"));
const Settings = lazy(() => import("@pages/dashboard/Settings"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" errorElement={<div>Error Page</div>} element={<Outlet />}>
        <Route index element={<Home />} />
        <Route element={<ProtectedRouteFromAuthenticatedUser />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="oauth" element={<OAuthRedirectRoute />} />
        </Route>
      </Route>

      <Route element={<UserProtectedRoute />}>
        <Route
          element={<DashboardLayout />}
          errorElement={<div>Dashboard Error Page</div>}
        >
          <Route path="/dashboard/:userId" element={<DashboardOverview />} />
          <Route
            path="/dashboard/:userId/upcoming-birthdays"
            element={<DashboardUpcomingBirthdays />}
          />
          <Route path="/dashboard/:userId/settings" element={<Settings />} />
        </Route>
      </Route>
    </>
  )
);

function MyRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
export default MyRouter;

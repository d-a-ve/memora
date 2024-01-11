import { Suspense } from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Settings from "@/modules/dashboard/pages/Settings";
import { DashboardLayout } from "@modules/dashboard";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Signup from "@pages/Signup";
import DashboardOverview from "@pages/dashboard/Overview";
import DashboardUpcomingBirthdays from "@pages/dashboard/UpcomingBirthday";

import { OAuthRedirectRoute } from "@components/OAuthRedirectRoute";
import ProtectedRoute from "@components/ProtectedRoute";

// const Login = lazy(() => import("./pages/Login/Login"));
// const Signup = lazy(() => import("./pages/Signup"));
// const Overview = lazy(() => import("./pages/Dashboard/pages/Overview"));
// const UpcomingBirthdays = lazy(
// 	() => import("./pages/Dashboard/pages/UpcomingBirthdays")
// );
// const Dashboard = lazy(() => import("./pages/Dashboard/pages/Dashboard"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" errorElement={<div>Error Page</div>} element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="oauth" element={<OAuthRedirectRoute />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route
          element={<DashboardLayout />}
          errorElement={<div>Dashboard Error Page</div>}
        >
          <Route path="/dashboard/:userId/" element={<DashboardOverview />} />
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
    <Suspense fallback="Loading...">
      <RouterProvider router={router} />
    </Suspense>
  );
}
export default MyRouter;

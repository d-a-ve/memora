import { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Route,
} from "react-router-dom";

import { DashboardLayout } from "@modules/dashboard";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Signup from "@pages/Signup";
import DashboardOverview from "@pages/dashboard/Overview";
import DashboardUpcomingBirthdays from "@pages/dashboard/UpcomingBirthday";

import { OAuthRedirectRoute } from "@components/OAuthRedirectRoute";
import ProtectedRoute from "@components/ProtectedRoute";

import { dashboardLoader } from "./dashboardLoader";

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
          path="/dashboard/:userId/"
          element={<DashboardLayout />}
          errorElement={<div>Dashboard Error Page</div>}
        >
          <Route
            index
            element={<DashboardOverview />}
            loader={dashboardLoader}
          />
          <Route
            path="/dashboard/:userId/upcomingbirthdays"
            element={<DashboardUpcomingBirthdays />}
            loader={dashboardLoader}
          />
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

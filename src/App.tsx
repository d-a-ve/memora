import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Outlet,
	// BrowserRouter as Router,
	// Routes,
	Route,
} from "react-router-dom";
import { Suspense } from "react";
import AuthContextProvider from "@context/AuthContext";
import ProtectedRoute from "@components/ProtectedRoute";
import { OAuthRedirectRoute } from "@components/OAuthRedirectRoute";

import Login from "@pages/Login";
import Signup from "@pages/Signup";
import Home from "@pages/Home";
import DashboardOverview from "@pages/dashboard/Overview";
import DashboardUpcomingBirthdays from "@pages/dashboard/UpcomingBirthday";
import {
	DashboardLayout,
} from "@modules/dashboard";
import { dashboardLoader } from "./routes/dashboardLoader";

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
					path="/dashboard/:userId"
					element={<DashboardLayout />}
					errorElement={<div>Dashboard Error Page</div>}>
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
// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: (
// 			<Suspense fallback="loading...">
// 				<Outlet />
// 			</Suspense>
// 		),
// 		errorElement: <div>Error Page</div>,
// 		children: [
// 			{
// 				index: true,
// 				element: <div>Home Page</div>,
// 			},
// 			{
// 				path: "login",
// 				element: <Login />,
// 			},
// 			{
// 				path: "signup",
// 				element: <Signup />,
// 			},
// 			{
// 				path: "dashboard",
// 				element: <ProtectedRoute route="/dashboard/" />,
// 				errorElement: <div>Dashboard error element</div>,
// 				children: [
// 					{
// 						index: true,
// 						element: <Overview />,
// 					},
// 					{
// 						path: "upcomingbirthdays",
// 						element: <UpcomingBirthdays />,
// 					},
// 				],
// 			},
// 		],
// 	},
// ]);

function App() {
	return (
		<AuthContextProvider>
			<Suspense fallback="Loading...">
				{/* <Router>
					<Routes>
						<Route
							path="/"
							errorElement={<div>Error Page</div>}
							element={<div>Home Page</div>}
						/>
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/oauth" element={<OAuthRedirectRoute />} />

						<Route element={<ProtectedRoute />}>
							<Route path="/dashboard" element={<Dashboard />}>
								<Route index element={<Overview />} />
								<Route
									path="/dashboard/upcomingbirthdays"
									element={<UpcomingBirthdays />}
								/>
							</Route>
						</Route>
					</Routes>
				</Router> */}
				<RouterProvider router={router} />
			</Suspense>
		</AuthContextProvider>
	);
}
export default App;

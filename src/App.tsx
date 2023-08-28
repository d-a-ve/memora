import {
	// createBrowserRouter,
	// RouterProvider,
	// Outlet,
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import { Suspense } from "react";
import AuthContextProvider from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { OAuthRedirectRoute } from "./components/OAuthRedirectRoute";

import Login from "./pages/Login/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard/pages/Dashboard";
import Overview from "./pages/Dashboard/pages/Overview";
import UpcomingBirthdays from "./pages/Dashboard/pages/UpcomingBirthdays";

// const Login = lazy(() => import("./pages/Login/Login"));
// const Signup = lazy(() => import("./pages/Signup"));
// const Overview = lazy(() => import("./pages/Dashboard/pages/Overview"));
// const UpcomingBirthdays = lazy(
// 	() => import("./pages/Dashboard/pages/UpcomingBirthdays")
// );
// const Dashboard = lazy(() => import("./pages/Dashboard/pages/Dashboard"));

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
				<Router>
					<Routes>
						<Route
							path="/"
							errorElement={<div>Error Page</div>}
							element={<div>Home Page</div>} />
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
				</Router>
			</Suspense>
		</AuthContextProvider>
	);
}
export default App;

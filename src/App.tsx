import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

const Login = lazy(() => import("./pages/Login/Login"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const DashboardLayout = lazy(
	() => import("./pages/Dashboard/pages/DashboardLayout")
);
const Overview = lazy(() => import("./pages/Dashboard/pages/Overview"));
const UpcomingBirthdays = lazy(
	() => import("./pages/Dashboard/pages/UpcomingBirthdays")
);

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Suspense fallback="loading...">
				<Outlet />
			</Suspense>
		),
		errorElement: <div>Error Page</div>,
		children: [
			{
				index: true,
				element: <div>Home Page</div>,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "signup",
				element: <Signup />,
			},
			{
				path: "dashboard",
				element: <DashboardLayout />,
				errorElement: <div>Dashboard error element</div>,
				children: [
					{
						index: true,
						element: <Overview />,
					},
					{
						path: "upcomingbirthdays",
						element: <UpcomingBirthdays />,
					},
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}
export default App;

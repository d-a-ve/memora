import { Navigate } from "react-router-dom";

function Home() {
  // return <div>Home</div>;
  // until we have a home page, redirect to login
  return <Navigate to="/login" />;
}

export default Home;

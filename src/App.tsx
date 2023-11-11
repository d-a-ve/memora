import AuthContextProvider from "@context/AuthContext";

import MyRouter from "./routes/MyRouter";

function App() {
  return (
    <AuthContextProvider>
      <MyRouter />
    </AuthContextProvider>
  );
}
export default App;

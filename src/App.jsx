import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./screens/login/Login";
import CreteNewPassword from "./screens/creteNewPassword/CreteNewPassword";
import ForgotPassword from "./screens/forgotPassword/ForgotPassword";

function App() {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="/create-new-password" element={<CreteNewPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;

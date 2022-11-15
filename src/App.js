import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "components/login";
import { Signup } from "screen/signup";
import { ForgetPassword } from "components/forgetPassword";
import { ResetPassword } from "screen/resetPassword";
import { HomeScreen } from "screen/home";
import { ProfileScreen } from "screen/profile";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/profile" exact element={<ProfileScreen />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Signup } from "./components/signup/index.js";
import "./App.css";
import { Login } from "./components/login";
import { Signup } from "./components/signup";
import { ForgetPassword } from "./components/forgetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Signup } from "./components/signup";
import { ForgetPassword } from "./components/forgetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;

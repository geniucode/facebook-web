import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/login";
import { Signup } from "./components/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/user/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
